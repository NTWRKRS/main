const {SlashCommandBuilder} = require('discord.js');

new SlashCommandBuilder()
    .setName('represent')
    .setDescription('returns a string that greets the user')
 
    

    module.exports = {
        data: new SlashCommandBuilder()
            .setName('represent')
            .setDescription('Returns a string that greets the user'),
        async execute(interaction) {
            await interaction.reply('welcome to the first completed run of a slash command');
        },
    };