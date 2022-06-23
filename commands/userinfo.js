const moment = require('moment')
const { MessageEmbed } = require("discord.js");
module.exports = {
    category: 'Moderation command',
    description: 'Shows information about a user', // Required for slash commands
    
    slash: 'both', // Create both a slash and legacy command
    cooldown:'5s',
    testOnly: false, // Only register a slash command for the testing guilds
    
    callback: ({ message, interaction }) => {
        const target = message.mentions.users.first() || message.author()
        const Member = message.guild.members.cache.get(target.id)

        const responseEmbed = {
            color: '#bcef1',
            description: `${target.username}'s info:`,
            footer:{
                text:'Made with ❤️ by Astro for CHRISTLIKE'
            },
            fields: [ 
                {
                    name:'User ID:',
                    value: `${target.id}`,
                    inline:false
                },
                {
                    name:'Roles:',
                    value:`${Member.roles.cache.map(r=>r).join(' ').replace("@everyone", " ")}`
                },
                {
                    name:'Server age:',
                    value:`<t:${parseInt(target.joinedTimestamp / 1000)}:R>`,
                    inline:true
                    //value:`${moment(Member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\\n**-** ${moment(Member.joinedAt).startOf('day').fromNow()}`
                },
                {
                    name:'Account age:',
                    value:`<t:${parseInt(target.user.createdTimestamp / 1000)}:R>`,
                    inline:true
                    //value:`${moment(Member.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\\n**-** ${moment(Member.createdAt).startOf('day').fromNow()}`
                }
            ]
        }
        message.reply({embeds:[responseEmbed]})
    },
  }