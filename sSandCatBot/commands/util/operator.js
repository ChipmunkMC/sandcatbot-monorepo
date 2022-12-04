var name = "operator";
var aliases = ["o"];
var description = "Operator.";
var usage = "{prefix}operator";
var enabled = true;

var util = require("./../../util.js");

function execute(bot, cmd, username, args, handler) {
  let num1 = parseFloat(args[0]);
  let num2 = parseFloat(args[2]);
  let operator = args[1]
  
  let result;
  switch(operator) {
    case '%=':
      result = args[0];
      result %= args[2];
      break;
    
    case '*=':
      result = args[0];
      result *= args[2];
      break;
    
    case '+=':
      result = args[0];
      result += args[2];
      break;
    
    case '-=':
      result = args[0];
      result -= args[2];
      break;
    
    case '/=':
      result = args[0];
      result /= args[2];
      break;
    
    case '=':
      result = args[0];
      result = args[2];
      break;
  }
  
  bot.chat(util.colors(`&aResult: ${result}`));
}

module.exports.name = name;
module.exports.aliases = aliases;
module.exports.description = description;
module.exports.usage = usage;
module.exports.enabled = enabled;
module.exports.execute = execute;