var name = "screensaver";
var aliases = [];
var description = "Shows you a screensaver";
var usage = "{prefix}screensaver <player>";
var enabled = true;

var util = require("./../../util.js");
var sleep = require("system-sleep");

var perms = require("./../../config.json").commands_perms;

function execute(bot, cmd, username, args, handler) {
  
  bot.chat('/world world_the_end'); sleep(150);
  
  const x = Math.round(util.random(-30000000, 30000000));
  const y = Math.round(util.random(2, 252));
  const z = Math.round(util.random(-30000000, 30000000));  
  bot.chat(`/forceload add ${x} ${z} ${x} ${z}`); sleep(1500);
  bot.chat(`/fill ${(x-3)} ${(y-3)} ${(z-3)} ${(x+3)} ${(y+3)} ${(z+3)} end_gateway`); sleep(150);
  bot.chat(`/fill ${(x-2)} ${(y-2)} ${(z-2)} ${(x+2)} ${(y+2)} ${(z+2)} barrier hollow`); sleep(150);
  bot.chat(`/tppos ${x} ${y} ${z}`); sleep(150);
  bot.chat(`/tphere ${username}`); sleep(150);
}
module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;