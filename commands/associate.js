const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

    if(!message.member.roles.some((r) => ['Developer'].includes(r.name))) return message.channel.send('You do not have permission to run `associate`.');
    // let associateChannel = message.guild.channels.find(c => c.name === 'associates');
    // if(!associateChannel) return message.channel.send('Unable to find the `associates` channel.');
    message.channel.send('The following has not been provided: `associate-embed`, `guild-id` and `guild-owner-id`.');

    // let associateEmbed = new RichEmbed()
    // .setAuthor('Suggester Support', 'https://cdn.discordapp.com/attachments/642772352525926412/642822836091748365/image3.png')
    // .setThumbnail('https://cdn.discordapp.com/attachments/642772352525926412/642822836091748365/image3.png')
    // .setColor('#cd77ff')
    // .setDescription('Suggester Support is the home of Suggester, a multi-feature suggestion bot for your Discord servers!')
    // .addField('Type', 'Support Server', true)
    // .addField('Representative', '<@596879758244053002>', true)
    // .addField('Invite', 'https://discord.gg/GbUm2KY', true)
    // .setFooter(client.user.username, client.user.displayAvatarURL)
    // .setTimestamp()

    // associateChannel.send(associateEmbed);
    // message.channel.send('Successfully sent the the associate message to the `associates` channel.');
    // message.channel.send('Successfully added guild ID `642741632474808321` to the Nuclear Premium database.');
    // message.channel.send(`<@596879758244053002>, please use the \`nm!premium\` command in the \`${message.guild.name}\` server to add the premium bot to \`Suggester Support\`. Please note you must remain in \`${message.guild.name}\` for your premium perks to function.`)

};

exports.help = {
    name: 'associate'
};