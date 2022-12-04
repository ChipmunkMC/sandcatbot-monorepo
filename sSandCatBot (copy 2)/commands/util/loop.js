var name = "loop";
var aliases = ["l"];
var description = "Loops something in chat.";
var usage = "{prefix}loop <text>";
var enabled = true;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  bot.loopChat.push(args.join(' '));
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;