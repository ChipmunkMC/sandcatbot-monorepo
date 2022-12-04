var name = "entitypos";
var aliases = ["epos"];
var description = "Gets the pos of an entity.";
var usage = "{prefix}entitypos";
var enabled = true;

var util = require("./../../util.js");
var sleep = require("system-sleep");

function execute(bot, cmd, username, args, handler) {
  
  bot.addChatPattern('pos', /.+\[(.+)d, (.+)d, (.+)d]/, { parse: true, repeat: false });
  
  bot.once('chat:pos', matches => {
    const coords = `${matches[0]}`.split(',');
    
    sleep(150);
    bot.chat(`&aThe position of the entity ${args[0]} is: ${coords[0]}, ${coords[1]}, ${coords[2]}.`);
  });
    
  bot.chat(`/data get entity ${args[0]} Pos`);

}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;