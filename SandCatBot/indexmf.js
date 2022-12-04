const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'veast.network',
  port: 25565,
  username: 'test',
  password: null,
  
  plugins: {
    'chat': false
  }
})

bot.chat = message => bot._client.write('chat', {message: message});

bot.on('login', _ => {
  bot.chat('test')
})