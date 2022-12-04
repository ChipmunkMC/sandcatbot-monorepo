var name = "buildcloop";
var aliases = [];
var description = "Builds a cloop.";
var usage = "{prefix}buildcloop <command>";
var enabled = true;

var util = require("./../../util.js");
var sleep = require("system-sleep");

var perms = require("./../../config.json").commands_perms;

function execute(bot, cmd, username, args, handler) {
  command = args.join(' ');
  
  bot.chat(`/execute at ${username} run setblock ~ ~2 ~1 repeating_command_block[facing=up]{Command:'clone ~ ~2 ~ ~ ~3 ~ ~ ~ ~'}`); sleep(150);
  bot.chat(`/execute at ${username} run setblock ~ ~3 ~1 chain_command_block[facing=up]{Command:'${command}',auto:1b}`); sleep(150);
  bot.chat(`/execute at ${username} run setblock ~ ~4 ~1 repeating_command_block[facing=up]{Command:'clone ~ ~2 ~ ~ ~3 ~ ~ ~ ~'}`); sleep(150);
  bot.chat(`/execute at ${username} run setblock ~ ~5 ~1 chain_command_block[facing=up]{Command:'${command}',auto:1b}`); sleep(150);
  bot.chat(`/execute at ${username} run setblock ~ ~ ~1 observer[facing=up]`); sleep(150);
  bot.chat(`/execute at ${username} run setblock ~ ~1 ~1 observer[facing=down]`); sleep(150);
}
module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;