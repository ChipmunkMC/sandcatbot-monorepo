const config = require("./config.json");

const enabled = config.online_mode.enabled;
const accounts = config.online_mode.accounts;
let accountsUsed = 0;

const getEnabled = _ => {
  return enabled;
}

const getAccount = (item = accountsUsed) => {
  const num = item;
  //if (num > accounts.length) num = 0;
  return accounts[num].split(':') || ['bot', null];
}

const getAccountsUsed = _ => {
  return accountsUsed;
}

const incAccountsUsed = (amount = 1) => {
  accountsUsed += amount;
}

module.exports.getEnabled = getEnabled;
module.exports.getAccount = getAccount;
module.exports.getAccountsUsed = getAccountsUsed;
module.exports.incAccountsUsed = incAccountsUsed;