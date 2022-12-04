var mineflayer = require("mineflayer");
var fs = require("fs");
var cmd_handler = require("./command-handler.js");
var util = require("./util.js");
var online_mode = require("./online_mode.js");
var sleep = require("system-sleep");
var vec3 = require("vec3");
let mcData;

var config = require("./config.json");

var botVersion = "69";

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
      "chat":false,
      "chest":false,
      //"command_block":false,
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

if (online_mode.getEnabled()) {
  const account = online_mode.getAccount();
  const prevName = options.username;
    
  options.username = account[0];
  options.password = account[1];
  
  online_mode.incAccountsUsed();
}

var bot = mineflayer.createBot(options);
bot.entity = {position: {x: null, y: null} };
bot.options = options;

bot.chat = message => bot._client.write('chat', {Message: message});

cmd_handler();

function check(x, y, z){
    let posupd = new vec3(bot.player.entity.position)

    let xu = Math.round(posupd.x)
    let yu = Math.round(posupd.y)
    let zu = Math.round(posupd.z)

    if((x+y+z) != (xu+yu+zu)){
        sleep(150);
        bot.chat(`/tp ${x} ${y+0.5} ${z}`);
        sleep(150);
        bot.chat(`/fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 minecraft:repeating_command_block`);
    };

    const commandBlock = bot.findBlock({
        matching: mcData.blocksByName.repeating_command_block.id
        });
    
    if(commandBlock == null){
        bot.chat(`/fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 minecraft:repeating_command_block`);
    };

    
};
bot.core = function(command) {
 
    const commandBlock = bot.findBlock({
    matching: mcData.blocksByName.repeating_command_block.id
    });

    try {
        bot.setCommandBlock(commandBlock.position, command, { mode: 1, trackOutput: true, conditional: false, alwaysActive: true });
    } catch (e) {

        console.log('[Error]: '+e.message);

        if(e.message.includes('creative mode')){
            bot.chat('/gmc');
            sleep(150);
            core(command);
        };
    };
    
};

util.randomizeUsername(options);

var bot = mineflayer.createBot(options);
bot.options = options;
addListeners(bot);
cmd_handler();

function addListeners(bot) {
  bot.on("login", () => {
    mcData = require("minecraft-data")(bot.version);
  
    console.log(`(${bot.username}) logged in!`);   
    
    bot.chat("/c on");
    sleep(150);
    bot.chat(util.colors("&fSandCatBot&7 v&6"+botVersion+"&7 made by &9_ChipMC_&7 and uses stuff from a bot by &aMorganAnkan&7. Prefix: '" + cmd_handler.prefix + "'."));
    if (online_mode.getEnabled()) {
      sleep(150); 
      bot.chat("/username "+config.bot.username);
    }
  
  
    const x = 561
    const y = 150
    const z = -5151
    
    setInterval(() => {
      check(x, y, z);
    }, 3000);
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
  
  
  bot.on("end", _ => {
    sleep(5000);
    options.username = config.bot.username || "SandCatBot";
    util.randomizeUsername(options);
    bot = mineflayer.createBot(options);
    bot.entity = {position: {x: null, y: null} };
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
