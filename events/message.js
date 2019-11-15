const { prefix } = require('../config.js');

module.exports = (client, message) => {

    const one = () => {
        message.delete(60000);
        return message.channel.send(`\`1.\` <@${message.author.id}>, to invite one of our bots, head to <link-coming-bot>.`)
        .then((msg) => {
           msg.delete(60000);
       });
    };
    const two = () => {
        message.delete(60000);
        return message.channel.send(`\`2.\` <@${message.author.id}>, please visit <link-coming-soon> for information on how to use a Nuclear bot.\nIf you don't find an answer to your query, please try option \`3\` for troubleshooting help.`)
        .then((msg) => {
            msg.delete(60000);
        });
    };
    const three = () => {
        message.delete(60000);
        return message.channel.send(`\`3.\` <@${message.author.id}>, for info about solving common issues with one of the Nuclear bots, please visit <link-coming-soon>.\nIf you don't find an answer for your query, please try option \`5\` for further assistance.`)
        .then((msg) => {
            msg.delete(60000);
        });
    };
    const four = () => {
        message.delete(60000);
        return message.channel.send(`\`4.\` <@${message.author.id}>, to report a bug, please visit <link-coming-soon>.`)
        .then((msg) => {
            msg.delete(60000);
        });
    };
    const five = () => {
        message.delete(60000);
        return message.channel.send(`\`5.\` <@${message.author.id}>, you have been given the \`Further Assistance\` role. Please explain your issue in <#644631783391887432>.`).then(message.member.addRole('644632346469072948'))
        .then((msg) => {
            msg.delete(60000);
        });
    };
    if(message.channel.id !== '644631754950311936') return;
    switch (message.content) {
        case '1':
            one();
        break;
        case '2':
            two();
        break;
        case '3':
            three();
        break;
        case '4':
            four();
        break;
        case '5':
            five();
        break;
        default:
            if(message.author.bot) return;
            message.delete()
    };

    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +g/);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;
    
    cmd.run(client, message, args);

};