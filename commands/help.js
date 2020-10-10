const Discord = require('discord.js');
const config = fs.readFileSync('./config.json');
config = JSON.parse(config);
exports.run = async (bot, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setTitle(config.bot-name)
.setDescription("Here is a list of commands.")
.addField(config.prefix + "help", "Brings up the help message")
.setTimestamp()
.setFooter(config.bot-name)
message.channel.send(embed)
}