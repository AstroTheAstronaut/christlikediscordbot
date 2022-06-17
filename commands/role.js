const actions = ['give', 'has', 'remove']

module.exports = {
    category: 'Moderation command',
    description: 'Give a role, takes a role or checks if an user has a role', // Required for slash commands
    permissions:['MANAGE_MEMBERS'],
    minArgs: 3,
    expectedArgs: `<"${actions.join('","')}"> <user @> <role @>}`,
    slash: 'both', // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    guildOnly:true,
    options:[
        {
          name:'action',
          description: 'the action to perform',
          type: 'STRING',
          required: 'true',
          choices: actions.map((action)=> ({
            name:action,
            value:action,
          })),
        },
        {
            name:'user',
            description:'The user to perform this action on',
            type:'USER',
            required:true,
        },
        {
            name:'role',
            description:'The role to perform the action on',
            type:'ROLE',
            required:true,
        },
      ],
    callback: ({ guild, args, message, interaction }) => {
        const action = args.shift()
        if(!action || !actions.includes(action)){
            return `Unknown action! Please use one of the following: ${actions.join(', ')}`
        }
        const memberId = args.shift().replace(/[<@!&>]/g, '')
        const roleId = args.shift().replace(/[<@!&>]/g, '')
        const member = guild.members.cache.get(memberId)
        const role = guild.members.cache.get(roleId)
        if(action === 'has'){
            return member.roles.cache.has(roleId)
            ? 'The user has the role!'
            : 'The user does not have role!'
        }
        if(action==='give'){
            member.roles.add(role)
            return 'The role was given to the specified member!'
        }
        if(action === 'remove'){
            member.roles.remove(role)
            return 'The role was removed from the specified member!'
        }
    },
  }