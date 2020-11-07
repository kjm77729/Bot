const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDcxOTg2OTMyNDMyNTAyNzg0.W1miFQ.x9UUHZRm2-EmV7b3CECMU75DDUE';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);