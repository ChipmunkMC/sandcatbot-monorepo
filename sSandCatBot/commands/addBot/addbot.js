var name = "addbot";
var aliases = ["ab"];
var description = "Adds a bot to the server.";
var usage = "{prefix}addbot <username>";
var enabled = true;

var fs = require('fs');
var path = require('path');
var mineflayer = require('mineflayer');
var util = require("./../../util.js");
var cmd_handler = require("./cmdhandler/command-handler.js");

function execute(bot, cmd, username, args, handler) {
  
  const options = bot.options;
  
  options.username = args[0] || `bot${Math.round(util.random(1000,9999))}`;
  options.password = null;
  
  const prevName = options.username;
  const prevHost = options.host;
  const prevPort = options.port;
  
  if(args[1]) options.host = args[1];
  if(args[2]) options.port = args[2];
  
  const nBot = mineflayer.createBot(options);
  cmd_handler();

  nBot.on ('login', _ => {
    //if (online_mode.getEnabled()) bot.chat(`/sudo `+nBot.username+` username `+prevName);
    
    console.log('Added bot '+nBot.username+' successfully connected.');
    nBot.chat(util.colors('&aConnected!'));
  });
  
  
  const handleChat = (username, message) => {
    //console.log(`[chat] <${username}> ${message}`);
    
    if (message.startsWith(cmd_handler.prefix)) {
      let args = message.slice(cmd_handler.prefix.length).split(" ");
      let command = args.shift();
  
      if (cmd_handler.isCommand(command)) {
        let output = cmd_handler.execute(nBot, command, username, args);
  
        if (output.status == "success") {
          if (typeof output.message == "string")
            nBot.chat(util.infoMessage(output.message));
        } else if (output.status == "error") {
          if (typeof output.message == "string")
            nBot.chat(util.errorMessage(output.message));
        }
      }
    }
  
    /*
	  if (message.startsWith(cmd_handler.prefix)) {
  	  	let args = message.split(" ");
      let command = args.shift().slice(cmd_handler.prefix.length);
      
      let output = cmd_handler.execute(command, username, args, bot)
      if (output.status == "error") {
        let error = output.message;
        //let code = output.code;
        bot.chat(util.errorMessage(error));
      }
    }
    */
  
}

nBot.on("chat", handleChat);
if (prevHost != options.host) {
  bot.on("chat", handleChat);
}
  
  nBot.on ('error', (err) => {
    bot.chat(util.colors('&c'+err));
  });
  
  nBot.on ('kick', (err) => {
    bot.chat(util.colors('&c'+err));
  });
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;