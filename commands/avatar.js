const { MessageEmbed } = require("discord.js");

module.exports = {
    category: 'Mod Commands',
    description: 'Shows the avatar of an user', // Required for slash commands
    slash: 'both', // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    
    callback: ({ message,guild, args }) => {
      const targetUser = message.mentions.users.first() || message.author;
        if(!targetUser)
            return "Oops! You forgot to tell me whose avatar you want to see!"
      const response = new MessageEmbed()
      .setColor('#BCCEF1')
      .setAuthor(`${targetUser.tag}\'s avatar`)
      .setDescription(targetUser.displayAvatarURL({dynamic:true}))
    },
  }