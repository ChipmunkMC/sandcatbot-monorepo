var name = "quit";
var aliases = ["q"];
var description = "Ends the bot.";
var usage = "{prefix}end";
var enabled = true;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  bot.quit();
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;