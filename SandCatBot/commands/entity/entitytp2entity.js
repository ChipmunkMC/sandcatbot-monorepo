var name = "entitytp2entity";
var aliases = ["entitytp2e","etp2e"];
var description = "Teleports an entity to another entity.";
var usage = "{prefix}entitytp2entity <target1> <target2>";
var enabled = true;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  if (args.length !== 2) {
    bot.chat(`&cUsage: ` + usage);
    return;
  }
  bot.chat(`/execute as ` + args[0] + ` run data modify entity @s Pos prepend from entity ` + args[1] + ` Pos[]`);
  
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;