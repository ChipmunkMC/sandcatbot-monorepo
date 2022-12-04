var mineflayer = require("mineflayer");
var fs = require("fs");
var cmd_handler = require("./command-handler.js");
var util = require("./util.js");
var sleep = require("system-sleep");
var vec3 = require("vec3");

var config = require("./config.json");

var botVersion = "0.1";

var options = {
    username: config.bot.username || "SandCatBot",
    host: config.bot.host || "veast.network",
    port: config.bot.port || 25565,
    //version: "1.15.2",
    checkTimeoutInterval: 5555*1000,
    plugins: {
      "bed":false,
      "book":false,
      "boss_bar":false,
      "chest":false,
      "command_block":false,
      "craft":false,
      "creative":false,
      "digging":false,
      "dispenser":false,
      "enchantment_table":false,
      "experience":false,
      "furnace":false,
      "health":false,
      "inventory":false,
      "rain":false,
      "scoreboard":false,
      "sound":false,
      "title":false,
      "villager":false//maybe some more?
    }
}

util.randomizeUsername(options);

var bot = mineflayer.createBot(options);
bot.options = options;
bot.loadPlugin(require('./core.js'))
addListeners(bot);
cmd_handler();

function addListeners(bot) {
  bot.on("login", () => {
    console.log(`(${bot.username}) logged in!`);   
    
    bot.chat(util.colors("&fSandCatBot&7 v&6"+botVersion+"&7 made by &9_ChipMC_&7 and uses stuff from a bot by &aMorganAnkan&7. Prefix: '" + cmd_handler.prefix + "'."));
  });
  
  bot.on("chat", (username, message) => {
    console.log(`[chat] <${username}> ${message}`);
  
    if (message.startsWith(cmd_handler.prefix)) {
      let args = message.slice(cmd_handler.prefix.length).split(" ");
      let command = args.shift();
  
      if (!cmd_handler.isCommand(command)) return bot.chat(util.errorMessage(command+' is not a valid command!'));
        let output = cmd_handler.execute(bot, command, username, args);
  
        if (output.status == "success") {
          if (typeof output.message == "string")
            bot.chat(util.infoMessage(output.message));
        } else if (output.status == "error") {
          if (typeof output.message == "string")
            bot.chat(util.errorMessage(output.message));
        }
      }
  
    /*
  	if (message.startsWith(cmd_handler.prefix)) {
  		let args = message.split(" ");
      let command = args.shift().slice(cmd_handler.prefix.length);
      
      let output = cmd_handler.execute(command, username, args, bot);
      if (output.status == "error") {
        let error = output.message;
        //let code = output.code;
        bot.chat(util.errorMessage(error));
      }
    }
    */
    
  });
  
  bot.loopChat = [];
  bot.on('physicTick', _ => {
    for (const item in bot.loopChat) {
      const message = bot.loopChat[item];
      
      if (message)
      bot.chat(message);
    }
  });
  
  
  bot.on("playerJoined", (player) => {
    console.log(`[join] Player ${player.username} (${player.uuid}) joined.`);
  });
  
  
  bot.on("end", (player) => {
    sleep(5000);
    options.username = config.bot.username || "SandCatBot";
    util.randomizeUsername(options);
    bot = mineflayer.createBot(options);
    addListeners(bot);
  });
  
  bot._client.on('game_state_change', (packet) => {
    // Fix end portal exploit lol
    if (packet.reason === 4) {
      bot._client.write('client_command', { payload: 0 });
    }
  });
}

module.exports.getBot = _ => bot

const stdin = process.openStdin();

stdin.addListener("data", (d) => {
    const message = d.toString().trim();

    if (!message.startsWith('/')) {
      bot.chat(`/tellraw @a [{"text":"<"},{"text":"_ChipMC_","color":"blue"},{"text":"> ${message.replace(/"/g, '\\"')}"}]`);
      return;
    }
    
    bot.chat(message);
  });
