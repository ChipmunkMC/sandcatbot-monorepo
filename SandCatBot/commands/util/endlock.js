var name = "endlock";
var aliases = ["elock","el"];
var description = "Locks a player using the end";
var usage = "{prefix}endlock <player>";
var enabled = true;

var util = require("./../../util.js");
var sleep = require("system-sleep");

var perms = require("./../../config.json").commands_perms;

function execute(bot, cmd, username, args, handler) {
  if (!perms.includes(username) && username !== bot.username)
    return bot.chat(util.errorMessage("No permission to use this command."));
  
  bot.chat(`/world world_the_end`); sleep(150);
  
  const x = Math.round(util.random(-30000000, 30000000));
  const y = Math.round(util.random(0, 255));
  const z = Math.round(util.random(-30000000, 30000000));  
  bot.chat(`/forceload add ${x} ${z} ${x} ${z}`); sleep(1500);
  bot.chat(`/setblock ${x} ${y} ${z} end_portal`); sleep(150);
  bot.chat(`/spawnpoint ${args[0]} ${x} ${y} ${z}`); sleep(150);
  bot.chat(`/ekill ${args[0]}`); sleep(150);
}
module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;