module.exports = {
    category: 'Mod Commands',
    description: 'Verifies the mentioned user', // Required for slash commands
    permissions:['MUTE_MEMBERS'],
    slash: 'both', // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    cooldown:'5s',
    callback: ({ message, args,guild }) => {
      const targetUser = message.mentions.users.first()
        if(!targetUser)
            return "Oops! You forgot to specify who you want to verify!"
        args.shift()
        const roleName = args.join(' ')
        //const role = guild?.roles.cache.find((role)=>{
        //    return role.name === roleName
        //})
        let role = "840990428102262814"
        let christianRole = "840711445297758229"
        let unverifiedRole="851219408901636148"
        if(!role) return "Oops! The Verified role has changed. Please message Astro so he can fix me!"
        const dude = guild?.members.cache.get(targetUser.id)
        if(role && targetUser){
            dude?.roles.add(role)
            dude?.roles.add(christianRole)
            dude?.roles.remove(unverifiedRole)
            return `User ${targetUser} was successfuly verified! Hooray!`
        }
    },
  }