const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("**ZEUS AKTİF**").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'rzeus', 
  description: 'Botu yeniden başlatır',
  usage: 'rzeus'
};
