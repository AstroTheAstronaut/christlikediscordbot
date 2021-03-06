module.exports = {
    category: 'Mod Commands',
    description: 'Gives an user the Perms role', // Required for slash commands
    permissions:['MUTE_MEMBERS'],
    slash: 'both', // Create both a slash and legacy command
    cooldown:'5s',
    testOnly: false, // Only register a slash command for the testing guilds
    
    callback: ({ message, args,guild }) => {
      const targetUser = message.mentions.users.first()
        if(!targetUser)
            return "Oops! You forgot to specify who you want to give the Perms role to!"
        args.shift()
        const roleName = args.join(' ')
        //const role = guild?.roles.cache.find((role)=>{
        //    return role.name === roleName
        //})
        let role = "841613824536870923"
        let unverifiedRole="851219408901636148"
        if(!role) return "Oops! The Perms role has changed. Please message Astro so he can fix me!"
        const dude = guild?.members.cache.get(targetUser.id)
        if(role && targetUser){
            dude?.roles.add(role)
            return `User ${targetUser} can now send images and links! Hooray!`
        }
    },
  }