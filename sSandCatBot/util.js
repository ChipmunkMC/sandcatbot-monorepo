let config = require("./config.json");

function colors(message) {
  if (config.settings.colors_enabled == null) return message;
  return (config.settings.colors_enabled) ? message/*.replace(/&/g, "§")*/ : message.replace(/&[0-9a-fk-or]/g, "");
}

function firstLetterUppercase(s) {
  if(s == undefined) return "";
  s = typeof s !== "string" ? s.toString() : s;
  return s.charAt(0).toUpperCase()+s.slice(1);
}

function infoMessage(message) {
  return colors(`&6INFO: &7${message}`);
}

function errorMessage(message) {
  return colors(`&cError: ${message}`);
}

function wait(time) {
  return new Promise((resolve, reject) => setTimeout(resolve, time));
}

function clone(arr) {
  if (!(arr instanceof Array)) return null;
	return arr.slice(0);
};

function Error(error, code = "unknown") {
  return {status: "error", message: error, code: code};
}

function Success(message) {
  return {status: "success", message: message};
}

function remove(array, elem) {
  var index = array.indexOf(elem);
  if (index > -1) {
      array.splice(index, 1);
  }
}

function random(from = 0, to = 1) {
  let num = Math.random();
  num *= to - from;
  num += from;
  return num;
  //return (Math.random() * to - from + to); // is meant to be better but doesnt work lol
}

function randomizeUsername(options) {
  options.username += '§'+Math.round(random(0, 9));
  options.username += '§'+Math.round(random(0, 9));
  options.username += '§'+Math.round(random(0, 9));
}

module.exports = {
	colors: colors,
  infoMessage: infoMessage,
  errorMessage: errorMessage,
  wait: wait,
	clone: clone,
  Error: Error,
  Success: Success,
  remove: remove,
  firstLetterUppercase: firstLetterUppercase,
  random: random,
  randomizeUsername: randomizeUsername
};