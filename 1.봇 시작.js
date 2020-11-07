const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Nzc0NDc2MjE3OTI3NzI5MTcz.X6YVLw.oYydMwttmM78_TjoIsHJ5yHUEO0';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login(token);