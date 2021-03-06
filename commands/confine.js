module.exports = {
    category: 'Mod Commands',
    description: 'Gives an user the Confined Member role (confines the user)', // Required for slash commands
    permissions:['MUTE_MEMBERS'],
    slash: 'both', // Create both a slash and legacy command
    cooldown:'5s',
    testOnly: false, // Only register a slash command for the testing guilds
    
    callback: ({ message,guild, args }) => {
      const targetUser = message.mentions.users.first()
        if(!targetUser)
            return "Oops! You forgot to specify who you want to confine!"
        args.shift()
        const roleName = args.join(' ')
        //const role = guild?.roles.cache.find((role)=>{
        //    return role.name === roleName
        //})
        let role = "984916497585561611"
        let verifiedRole = "840990428102262814"
        let permsRole = "841613824536870923"
        if(!role) return "Oops! The Confined Member role has changed. Please message Astro so he can fix me!"
        const dude = guild?.members.cache.get(targetUser.id)
        if(role && targetUser){
            dude?.roles.add(role)
            dude?.roles.remove(verifiedRole)
            dude?.roles.remove(permsRole)
            return `User ${targetUser} has been confined for a short period of time.`
        }
    },
  }