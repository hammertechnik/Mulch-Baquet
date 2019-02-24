const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client();
const config = require('./storage/config-mulch.json');
const prefix = '?';

client.on('ready', async() =>{
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)

    client.user.setActivity('Dragons !', { type: 'WATCHING' }, {url:"https://hammermusik.com"},);
    client.user.setStatus('online')
});

client.on('message', async message => {
    if(!message.guild || message.author.bot) return;

    let msg = message.content.toUpperCase();
       let args = message.content.slice(prefix.length).trim().split(" ");
       let cmd = args.shift().toLowerCase();
        let msgContent = message.content.toLowerCase().trim().split(" ");
    

    if (!msg.startsWith(prefix)) return;
    if (message.author.bot) return;  
    
    try {
        let commandFile = require(`./commands-mulch/${cmd}.js`);
        commandFile.run(client, message, args, prefix)
    } catch (e) {
    }
});
client.on('error', console.error);

//fs.readdir('./events/', (err, files) => {
    //files.forEach(file => {
      //const eventHandler = require(`./events-mulch/${file}`)
      //const eventName = file.split('.')[0]
      //client.on(eventName, (...args) => eventHandler(client, ...args))
    //})
  //})

client.login(config.token)