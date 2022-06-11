module.exports = {
    category: 'Mod Commands',
    description: 'Removes the Confined Member role (unconfines the user)', // Required for slash commands
    permissions:['MUTE_MEMBERS'],
    slash: 'both', // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    
    callback: ({ message,guild, args }) => {
      const targetUser = message.mentions.users.first()
        if(!targetUser)
            return "Oops! You forgot to specify who you want to take out of confinement!"
        args.shift()
        const roleName = args.join(' ')
        //const role = guild?.roles.cache.find((role)=>{
        //    return role.name === roleName
        //})
        let role = "984916497585561611"
        let permsRole = "841613824536870923"
        let verifiedRole = "840990428102262814"
        if(!role) return "Oops! The Confined Member role has changed. Please message Astro so he can fix me!"
        const dude = guild?.members.cache.get(targetUser.id)
        if(role && targetUser){
            dude?.roles.remove(role)

            dude?.roles.add(verifiedRole)
            return `User ${targetUser} is now free! Hooray!`
        }
    },
  }