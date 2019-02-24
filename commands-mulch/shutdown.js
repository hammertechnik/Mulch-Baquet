module.exports.run = async (client, message, args) => {
    const devs = ["437999876828037158"];
    if(!~devs.indexOf(message.author.id)) {
        return;
    }
    message.channel.send('Fermeture....')
    setTimeout(shutdown, 1000);
    function shutdown(){
        process.exit(1)
    }
    console.log(`Shutting down...`)
    
}