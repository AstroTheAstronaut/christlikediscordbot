module.exports = {
  category: 'General Commands',
  description: 'Lists all the commands I have!', // Required for slash commands

  slash: 'both', // Create both a slash and legacy command
  cooldown:'5s',
  testOnly: false, // Only register a slash command for the testing guilds

  callback: ({ channel, interaction }) => {
    const commandsEmbed = {
      color: '#bcef1',
      title: "Here are all the commands I currently have:",
      description:'Commands:',
      fields: (
        { name: 'commands', value: 'Lists all the commands.' },
        { name: 'confine', value: 'Gives the Confined Member role.' },
        { name: 'unconfine', value: 'Removes the Confined Member role.' },
        { name: 'nodebate', value: 'Sends an embed that says to not debate.' },
        { name: 'perms', value: 'Gives the Perms role' },
        { name: 'verify', value: 'Gives the Verified role' },
        { name: 'ping', value: 'Replies with Pong!' },
        { name: 'role', value: 'Gives, removes or checks if the user has a role' },
        { name: 'rule', value: 'Shows a rule you specify' },
        { name: 'status', value: 'Changes the status of the bot' }
      ),
      footer: {
        text: 'Made with ❤️ by Astro for CHRISTLIKE'
      },

    };
    channel.send({ embeds: [commandsEmbed] });
  },
}