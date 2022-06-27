const { MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Attachment, MessageSelectMenu } = require("discord.js")
const wait = require('node:timers/promises').setTimeout;
const Canvas = require('canvas');
module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
    
        if (interaction.isCommand()) {

            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error when executing the command!', ephemeral: true });
            }
        } else if (interaction.isSelectMenu()) {
            return;
        }
    }
}
