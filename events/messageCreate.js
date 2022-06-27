const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if(message.author.bot) return;
    }
}