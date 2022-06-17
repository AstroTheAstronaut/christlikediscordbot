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
        { name: 'commands', value: 'Lists all the commands.', inline:true },
        { name: 'confine', value: 'Gives the Confined Member role.', inline:true },
        { name: 'unconfine', value: 'Removes the Confined Member role.', inline:true  },
        { name: 'nodebate', value: 'Sends an embed that says to not debate.', inline:true  },
        { name: 'perms', value: 'Gives the Perms role', inline:true  },
        { name: 'verify', value: 'Gives the Verified role', inline:true  },
        { name: 'ping', value: 'Replies with Pong!', inline:true  },
        { name: 'role', value: 'Gives, removes or checks if the user has a role', inline:true  },
        { name: 'rule', value: 'Shows a rule you specify', inline:true  },
        { name: 'status', value: 'Changes the status of the bot', inline:true  }
      ),
      footer: {
        text: 'Made with ❤️ by Astro for CHRISTLIKE'
      },

    };
    channel.send({ embeds: [commandsEmbed] });
  },
}