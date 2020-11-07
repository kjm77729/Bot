const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDcxOTg2OTMyNDMyNTAyNzg0.W1miFQ._NpWUH1WRSQn-fqVna6r5R9aY7Q';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);