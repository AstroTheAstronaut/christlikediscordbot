module.exports = {
  category: 'General Commands',
  description: 'Makes the bot talk', // Required for slash commands
  cooldown:'5s',
  slash: 'both', // Create both a slash and legacy command
  testOnly: false, // Only register a slash command for the testing guilds

  callback: ({message}) => {
      // if (message.author.bot) return;
      const SayMessage = message.content.slice(4).trim();
      message.delete();
      message.channel.send(SayMessage)
  },
}