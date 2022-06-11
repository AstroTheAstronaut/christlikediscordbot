const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require ('dotenv')
dotenv.config()
const { Intents } = DiscordJS

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})
/* const TOKEN = "OTg0NzEyNDc4MjA4NDUwNTgw.Gzpg69.Lu27AS0zV0yVxcpYgGCkVfCU_wV8G-WubRu8FY" */
client.on('ready', () => {
  new WOKCommands(client, {
    // The name of the local folder for your command files
    mongoUri: process.env.MONGO_URI,
    commandsDir: path.join(__dirname, 'commands'),
    // What guilds your slash commands will be created in
    testServers: ['YOUR TEST GUILD ID HERE']
  })
})

client.login(process.env.TOKEN)