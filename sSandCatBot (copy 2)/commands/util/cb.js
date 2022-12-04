var name = "cb";
var aliases = [];
var description = "Executes what you type in a command block.";
var usage = "{prefix}cb <command>";
var enabled = true;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  const scmd = args.join(' ')
  bot.core.run(scmd
  .replace(/{command}/g, `${handler.prefix}${cmd} ${scmd}`))
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;