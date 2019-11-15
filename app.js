const Discord = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');
const client = new Discord.Client();
const { token } = require('./config.js');

client.commands = new Enmap();

fs.readdir('./commands/', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`Loaded command: ${cmdName}`);
        client.commands.set(cmdName, props);

    });
});

fs.readdir('./events/', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
    if(!file.endsWith('.js')) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split('.')[0];
    console.log(`Loaded event: ${evtName}`)
    client.on(evtName, evt.bind(null, client));
    });
});

client.login(token);