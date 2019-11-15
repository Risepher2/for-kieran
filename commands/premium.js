exports.run = async (client, message, args) => {

    let array1 = ['596879758244053002', '639871940340744192', '533738839005593600', '630486711989829642', '642461763891363860']

    if(message.author.id !== (array1.includes(596879758244053002))) return message.channel.send('You are not a registered premium user.');

    message.author.send('Use this link to invite Dexo Premium to your server: <https://discordapp.com/oauth2/authorize?client_id=639960536166957057&scope=bot&permissions=303557726>.').catch(console.error);
    message.channel.send('Check your direct messages from `Nuclear Manager#8184`.')

};

exports.help = {
    name: 'premium'
};