var name = "kick";
var aliases = [];
var description = "sus.";
var usage = "{prefix}kick";
var enabled = false;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  bot.chat(`/title ${args[0]} title [{"nbt":"","entity":"@e"},{"nbt":"","entity":"@e"},{"nbt":"","entity":"@e"},{"nbt":"","entity":"@e"},{"nbt":"","entity":"@e"}]`)

}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;