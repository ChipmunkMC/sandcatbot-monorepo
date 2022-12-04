var name = "addserver";
var aliases = ["as"];
var description = "Adds server.";
var usage = "{prefix}addserver";
var enabled = true;

var mcServer = require('flying-squid')
var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  
  mcServer.createMCServer({
    'motd': 'A Minecraft Server \nRunning flying-squid',
    'port': Math.round(util.random(1025,65535)),
    'max-players': 10,
    'online-mode': false,
    'logging': true,
    'gameMode': 1,
    'difficulty': 1,
    'worldFolder':'world',
    'generation': {
      'name': 'diamond_square',
      'options':{
        'worldHeight': 80
      }
    },
    'kickTimeout': 10000,
    'plugins': {

    },
    'modpe': false,
    'view-distance': 10,
    'player-list-text': {
      'header':'Flying squid',
      'footer':'Test server'
    },
    'everybody-op': true,
    'max-entities': 100,
    'version': '1.16.1'
  })
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;