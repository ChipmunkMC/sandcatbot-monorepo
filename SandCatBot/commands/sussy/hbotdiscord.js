var name = "hbotdiscord";
var aliases = [];
var description = "When the message is sus :o";
var usage = "{prefix}hbotdiscord <username> <message>";
var enabled = true;

var util = require("./../../util.js");
var sleep = require("system-sleep");

var perms = require("./../../config.json").commands_perms;

function execute(bot, cmd, username, args, handler) {
  user = args.shift();
  msg = args.join(' ');
  
  bot.chat(`&8[&9HBot Discord&8] &3${user} &8› &7${msg}`);
}
module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;