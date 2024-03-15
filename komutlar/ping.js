const Discord = require('discord.js')

exports.run = async (client, message, args, color) => {

    let start = Date.now(); message.channel.send( 'Pong! ').then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
        
        let embed = new Discord.RichEmbed()
        .setTitle(`Komut Uygulandı`)
        .setColor("RANDOM")
        .addField("Mesaj Gecikmesi", `${diff}ms`, true)
        .addField("Toplam Bot Gecikmesi", `${API}ms`, true)
        .setFooter('Ping Sistemi')
        .setTimestamp()
        message.edit(embed);
      
    });

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

exports.help = {
    name: 'ping',
  description: "Botun Pingini Atar",
    usage: "ping"

}
 