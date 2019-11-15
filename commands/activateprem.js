exports.run = async (client, message, args) => {

    if(!message.member.roles.some((r) => ['Developer'].includes(r.name))) return message.channel.send('You do not have permission to run `associate`.');
    
    message.channel.send('Command currently disabled.')
    // message.channel.send(`Successfully added user ID \`630486711989829642\` to the Nuclear premium database.`)
    // message.channel.send(`Successfully added guild ID \`634811667292749845\` to the Nuclear Premium database.`);
    // message.channel.send(`<@630486711989829642>, please use the \`nm!premium\` command in the \`${message.guild.name}\` server to add the premium bot to \`Family Friendly\`. Please note you must remain in \`${message.guild.name}\` for your premium perks to function.`);

};

exports.help = {
    name: 'activateprem'
};