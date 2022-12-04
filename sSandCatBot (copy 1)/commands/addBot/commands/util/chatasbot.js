var name = "chatasbot";
var aliases = [];
var description = "Chats as an added bot.";
var usage = "{prefix}chatAsBot <username> <message>";
var enabled = true;

var util = require("./../../../../util.js");

function execute(bot, cmd, username, args, handler) {
  if (bot.username !== args[0]) return
  
  let chat = '';
  for (let i = 1; i < args.length; i++) {
    chat = chat + ' ' + args[i];
  }
  
  bot.chat(chat.trim());
  
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;