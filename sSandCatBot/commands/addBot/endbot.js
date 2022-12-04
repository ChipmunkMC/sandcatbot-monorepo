var name = "endbot";
var aliases = ["eb"];
var description = "Ends added bot.";
var usage = "{prefix}endbot <username>";
var enabled = true;

function execute(bot, cmd, username, args, handler) { }

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;