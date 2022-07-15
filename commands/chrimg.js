module.exports = {
    category: 'General commands',
    description: 'Sends a very specific image', // Required for slash commands
    permissions:['MUTE_MEMBERS'],
    slash: 'both', // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    cooldown:'5s',
    callback: ({ message, args,guild }) => {
      
      const image = "https://cdn.discordapp.com/attachments/840673462498099260/997443338707943564/image0.jpg"
      const imageEmbed = {
        color:'#bcef1',
        image: {
          url:image
        },
        footer:{
          text:'Made with ❤️ by Astro for CHRISTLIKE'
        },
    };
    channel.send({ embeds: [imageEmbed] });
    },
  }