const { MessageEmbed } = require("discord.js");

module.exports = {
    category: 'General Commands',
    description: 'Shows the servers beliefs/creed', // Required for slash commands

    slash: 'both', // Create both a slash and legacy command
    cooldown: '5s',
    testOnly: false, // Only register a slash command for the testing guilds

    callback: ({ message, interaction }) => {
        //const reply = `🏓 Pong!`
        const creedEmbed = {
            color: '#bcef1',
            title: "What we believe:",
            description: `We believe in the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death through His shed blood, in His bodily resurrection, in His ascension to the right hand of the Father, and His return in power and glory. We are saved by grace through faith in Christ Jesus. Salvation is found in Christ only. The Bible is the only written revelation that God has given the human race.`,
            footer: {
                text: 'Made with ❤️ by Astro for CHRISTLIKE'
            },
        };
        channel.send({ embeds: [creedEmbed] });
    },
}