var name = "0trust";
var aliases = ["0t"];
var description = "Free trusted commands on 0skar's command bot.";
var usage = "{prefix}0trust <command>";
var enabled = true;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  bot.chat(`/say <ignGeri> ${args.join(' ')}`)
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;