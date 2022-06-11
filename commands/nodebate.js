module.exports = {
    category: 'General commands',
    description: 'Sends a nodebate message', // Required for slash commands
    slash: 'both', // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    
    callback: ({ channel }) => {
      const embed = new MessageEmbed()
        .setTitle("Please don't debate!")
        //.setDescription(`Please do not debate in this channel! Feel free to take this interesting conversation to a channel meant for debating, such as <#841255395598663730>.`)
        .setDescription(`Please keep all debates in <#841255395598663730>! Refusal to do so may lead to a warning!`)
        .setFooter({text:`Requested by: ${message.author.tag} • Made with ❤️ by Astro for CHRISTLIKE`})
        .setColor('#BCCEF1')
        channel.send({ embeds: [embed] });
    },
  }
