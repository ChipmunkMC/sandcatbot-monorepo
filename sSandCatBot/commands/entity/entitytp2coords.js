var name = "entitytp2coords";
var aliases = ["entitytp2c","etp2c"];
var description = "Teleports an entity to coordinates.";
var usage = "{prefix}entitytp2coords <target> <x> <y> <z>";
var enabled = true;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  
  if (args.length !== 4) {
    bot.chat(`&cUsage: ` + usage);
    return;
  }
  
  bot.chat(`/execute as ${args[0]} run data merge entity @s {Pos:[ ${args[1]}d,${args[2]}d,${args[3]}d]}`);
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;