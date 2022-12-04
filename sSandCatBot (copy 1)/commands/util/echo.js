var name = "echo";
var aliases = ["e"];
var description = "Echoes what you type.";
var usage = "{prefix}echo <text>";
var enabled = true;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  bot.chat(args.join(' '));
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;