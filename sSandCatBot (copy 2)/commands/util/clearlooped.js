var name = "clearlooped";
var aliases = [/*"clrlp"*/];
var description = "Clears looped chat messages.";
var usage = "{prefix}clearlooped <text>";
var enabled = true;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  
  bot.loopChat = [];
  
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;