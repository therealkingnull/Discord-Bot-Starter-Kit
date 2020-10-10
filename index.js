const Discord = require('discord.js');
const client = new Discord.Client()
const fs = require('fs');
const chalk = require('chalk');
const figlet = require('figlet');
const config = fs.readFileSync('./config.json');
config = JSON.parse(config);
const prefix = config.prefix;

client.on('ready', () => {
    console.log(chalk.red(`I'm Ready!\n---\n`
    + `> Users: ${client.users.cache.size}\n`
    + `> Channels: ${client.channels.cache.size}\n`
    + `> Servers: ${client.guilds.cache.size}`));
    client.user.setActivity(config.activity)
})
client.on('message', message => {
    if(message.content === prefix + "ping") {
        message.channel.send("Pong!")
    }
    if (message.content === prefix + "beep") {
        message.channel.send("Boop!")
    }
});
client.login(config.token)