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
    client.user.setActivity(config.activity) //Sets the bot's activity
})
    client.on('message', async (message) => {
        if(message.author.bot) return; 
        if(!message.guild) return; //Ignores messages from outside of a guild
    
        if(!message.content.toLowerCase().startsWith(PREFIX)) return;
    
        var args = message.content.split(' ');
        var cmd = args.shift().slice(PREFIX.length).toLowerCase();
    
        try {
            var file = require(`./commands/${cmd}.js`);
            file.run(client, message, args); //Run a command file based on the user's input
        } catch(err) {
            console.warn(err)
        }
    });
client.login(config.token) // Login using the bot's token