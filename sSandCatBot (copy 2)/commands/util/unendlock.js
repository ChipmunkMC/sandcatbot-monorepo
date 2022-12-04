var name = "unendlock";
var aliases = [];
var description = "Unlocks an endlocked player.";
var usage = "{prefix}unendlock <player>";
var enabled = true;

var util = require("./../../util.js");
var sleep = require("system-sleep");

var perms = require("./../../config.json").commands_perms;

function execute(bot, cmd, username, args, handler) {
  if (!perms.includes(username))
    return bot.chat(util.errorMessage("No permission to use this command."));
  
  bot.chat(`/sudo ${args[0]} spawn`); sleep(150);
}
module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;