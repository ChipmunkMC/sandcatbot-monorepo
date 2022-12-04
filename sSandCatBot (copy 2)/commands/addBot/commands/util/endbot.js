var name = "endbot";
var aliases = ["eb"];
var description = "Ends added bot.";
var usage = "{prefix}endbot <username>";
var enabled = true;

var util = require("./../../../../util.js");

function execute(bot, cmd, username, args, handler) {
  if (bot.username !== args[0] && args[0] !== 'all') return
  
  bot.chat(util.colors('Bye!'));
  bot.end();
  
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;