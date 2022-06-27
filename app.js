const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: 32767 });
const mongoose = require('mongoose');

global.client = client;

client.commands = new Collection();
client.categories = fs.readdirSync("./commands/")

require('dotenv').config();

const clean = async (text) => {
    if (text && text.constructor.name == "Promise")
      text = await text;
    if (typeof text !== "string")
      text = require("util").inspect(text, { depth: 1 });
    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
}


const functions = fs.readdirSync("./functions").filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync("./commands");
(async () => {
    for(file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./events");
    client.handleCommands(commandFolders, './commands');
    client.login(process.env.TOKEN);
})();
