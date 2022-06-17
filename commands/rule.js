const actions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
const { MessageEmbed } = require("discord.js");
module.exports = {
    category: 'General Commands',
    description: 'Sends the specified rule in chat', // Required for slash commands
    
    slash: 'both', // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds,
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
    ],
    
    callback: async ({ args, channel, interaction }) => {
      const action = args.shift()
      if(!action || !actions.includes(action)){
        return `I don't know which rule to quote!`
      }

      if(action === '1'){
        const rule1Embed = {
            color:'#bcef1',
            title: "Rule 1",
            description:`No profanity. (Including swear abbreviations). Ephesians 4: 29 “Let no corrupting talk come out of your mouths, but only such as is good for building up, as fits the occasion, that it may give grace to those who hear.” You will be verbally warned the first time for using these swear abbreviations/cuss words but doing it continuously must lead to an official warning. Let’s also remember to be mature; refrain from such obscene talks, and act in a christlike manner. Colossians 3:8: “But now you must put them all away: anger, wrath, malice, slander, and obscene talk from your mouth.”`,
            footer:{
              text:'Made with ❤️ by Astro for CHRISTLIKE'
            },
          };
        channel.send({ embeds: [rule1Embed] });
      }
      if(action === '2'){
        const rule2Embed = {
          color:'#bcef1',
          title:'Rule 2',
          description:`Be respectful to everyone. Any sort of discriminatory speech against a member is not tolerated. Keep in mind that this is a Christian server and we do not allow any disrespect and inappropriate talks concerning our beliefs. We must all learn how to treat each other with love and respect, even if there are things we disagree on with each other. Be gentle and loving with everyone; extend God’s grace to them as this is what us Christians are supposed to be like. Proverbs 15 :1 “A gentle answer turneth away wrath: but harsh words stir up anger”, 2 Corinthians‬ ‭13:11, 14 “Finally, brothers, rejoice. Aim for restoration, comfort one another, agree with one another, live in peace; and the God of love and peace will be with you. The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.”`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule2Embed] });
      }
      if(action==='3'){
        const rule3Embed = {
          color:'#bcef1',
          title:'Rule 3',
          description:`Do not bring any drama in this server. If it is an issue within the server then the staff team will handle it. When it is a personal issue with you and another member, please take it to DMs. This includes bringing in complaints about other servers that have no involvement with CHRISTLIKE. We do not want to cause any divisions among our brothers and sisters. Do not take part in gossiping about others behind their back, neither should we bring in issues from other servers nor start any dramas, fruitless debates and arguments in CHRISTLIKE, Titus 3:2 “To speak evil of no one, to avoid quarreling, to be gentle, and to show perfect courtesy toward all people.” Arguing with each other is not going to help anyone, we must remain in peace with each other. 2 Timothy 2:23-24 “Don’t have anything to do with foolish and stupid arguments, because you know they produce quarrels. And the Lord’s servant must not be quarrelsome but must be kind to everyone, able to teach, not resentful.”`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule3Embed] });
      }
      if(action==='4'){
        
      }
      if(action==='5'){
        const rule5Embed = {
          color:'#bcef1',
          title:'Rule 5',
          description:`No NSFW content or anything that is sexually suggestive. Any crude jokes or NSFW content can lead to a warn, mute, or ban if it is repeatedly done despite getting warned and muted by a staff member. Keep in mind that this is a Christian server, and we do not tolerate such things as this. Let us be mindful of everyone else, Romans 14:21 “It is good not to eat meat or drink wine or do anything that causes your brother to stumble”, and be holy for our God is holy, (1 Peter 1:16).`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule5Embed] });
      }
      if(action==='6'){
        const rule6Embed = {
          color:'#bcef1',
          title:'Rule 6',
          description:`Do not advertise unless given permission to. You may ask the staff team to post your advertisement instead and they will put it in the right channel for everyone to see. However, if you continue to advertise without asking for permission from the staff (knowing that it is against the rules) then this can lead to a warn.`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule6Embed] });
      }
      if(action==='7'){
        const rule7Embed = {
          color:'#bcef1',
          title:'Rule 7',
          description:`No inappropriate nicknames, usernames, profile pictures, about me’s and statuses. You will be asked politely to change it, and we also ask you to cooperate by listening to the staff and abiding to the rules. Refusing to change your profile which clearly shows how inappropriate it is can lead to a mute/kick/ban.`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule7Embed] });
      }
      if(action==='8'){
        const rule8Embed = {
          color:'#bcef1',
          title:'Rule 8',
          description:`No trolling. (The staff team will decide on what does amount to trolling and what doesn’t).`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule8Embed] });
      }
      if(action==='9'){
        const rule9Embed = {
          color:'#bcef1',
          title:'Rule 9',
          description:`Please speak English only. This is simply just so everyone in the server can understand each other. However, there are cases in chat where speaking in a different language is not that much of a big deal (such as short phrases etc), but having an ongoing conversation without speaking in English is not allowed.`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule9Embed] });
      }
      if(action==='10'){
        const rule10Embed = {
          color:'#bcef1',
          title:'Rule 10',
          description:`Mentioning everyone, the staff members, or a specific person without proper reason is prohibited.`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule10Embed] });
      }
      if(action==='11'){
        const rule11Embed = {
          color:'#bcef1',
          title:'Rule 11',
          description:`Please use the appropriate channels. When someone is discussing a serious topic with another in discussion , be considerate and do not add anything irrelevant—we have <#840352411402108931> in discussing topics that are not serious. And serious topics must be moved to <#841255395598663730>.`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule11Embed] });
      }
      if(action==='12'){
        const rule12Embed = {
          color:'#bcef1',
          title:'Rule 12',
          description:`Debates and fights do not belong here. Do not start any arguments, especially when it is just regarding small matters, if you’re asked to change topics by the staff, please do so. Let us be in peace with each other, slow to anger, and have patience. 2 Timothy 2:16 “However, avoid pointless discussions. For people will become more and more ungodly.” Titus 3:1-2 “Remind the believers to submit to the government and its officers. They should be obedient, always ready to do what is good. They must not slander anyone and must avoid quarreling. Instead, they should be gentle and show true humility to everyone.”`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule12Embed] });
      }
      if(action==='13'){
        const rule13Embed = {
          color:'#bcef1',
          title:'Rule 13',
          description:`Do not lie. Please do not show any complete dishonesty with each other especially when it is a serious manner, cooperate by being in truth and having honesty in oneself.`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule13Embed] });
      }
      if(action==='14'){
        const rule14Embed = {
          color:'#bcef1',
          title:'Rule 14',
          description:`No blasphemy. Do not blaspheme the name of the Lord, neither should you talk about Him in an obscene way. Doing any other things that show blasphemy is not tolerated.`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule14Embed] });
      }
      if(action==='15'){
        const rule15Embed = {
          color:'#bcef1',
          title:'Rule 15',
          description:`Do not answer questions that are meant for Christians to respond to. Please leave these questions to those who are a part of the faith. This includes correcting people or answering people based on any teachings not found in the 66 Books or considered as common Christian theology in that regard (E.g., the Trinity)`,
          footer:{
            text:'Made with ❤️ by Astro for CHRISTLIKE'
          },
        };
      channel.send({ embeds: [rule15Embed] });
      }
      return `I don't know what this rule is!`
    },
  }