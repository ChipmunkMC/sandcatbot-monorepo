var name = "ulspawnmob";
var aliases = [];
var description = "SpawnMob without the 10 mobs limit.";
var usage = "{prefix}ulspawnmob <mob> <count>";
var enabled = true;

var util = require("./../../util.js");
var sleep = require("system-sleep");

function execute(bot, cmd, username, args, handler) {
  let toSpawn = args[1]
  
  while (toSpawn > 0) {
    let spawning = toSpawn;
    if (spawning > 10) spawning = 10;
    
    bot.chat(`/sudo ${username} spawnmob ${args[0]} ${spawning}`);
    //bot._client.write('chat', {message: `/spawnmob ` + args[0] + ` ` + spawning})
    toSpawn -= spawning;
    sleep(150);
  }
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;