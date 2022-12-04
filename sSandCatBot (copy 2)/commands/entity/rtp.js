var name = "rtp";
var aliases = [];
var description = "Teleports you to a random location.";
var usage = "{prefix}rtp";
var enabled = true;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  bot.chat(`/tp ${username} ${util.random(-30000000, 30000000)} 256 ${util.random(-30000000, 30000000)}`);

}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;