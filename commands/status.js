module.exports = {
    category: 'Bot configuration',
    description: `Changes the bot's status`, // Required for slash commands
    permissions:['BAN_MEMBERS'],
    minArgs:1,
    cooldown:'5s',
    expectedArgs:'<status>',
    slash: 'both', // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    
    callback: ({client,text }) => {
      client.user?.setPresence({
        status:'online',
        activities:[
            {
                name:text,
            },
        ],
    })
    return 'Status updated!'
    },
  }