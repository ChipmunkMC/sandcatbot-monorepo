var name = "resetskins";
var aliases = ["rskins","rs"];
var description = "Resets skins.";
var usage = "{prefix}resetskins";
var enabled = true;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  bot.chat(`/`)

}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;