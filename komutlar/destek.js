const Discord = require('discord.js');

exports.run = (client, message, args) => {
 message.delete();
    message.guild.createChannel(`talep-${message.author.username}`, 'text').then(ch => {
        ch.overwritePermissions(message.member.roles.first(),{
            VIEW_CHANNEL: false,
        }).catch().then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "ᔕ ◥ Destek Kanalları ◤ᔕ")));

        message.guild.roles.forEach((role) => {
            let role2 = message.guild.roles.find("name", "「🌀」Destek Ekibi")
                ch.overwritePermissions(role2,{
                    VIEW_CHANNEL: true, 
                  SEND_MESSAGES: true ,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        )
        const embed = new Discord.RichEmbed()
        .setTitle(`» Selam Destek Talebiniz Açıldı ${message.author.username} !`)
        .setAuthor("Destek Sistemi")
        
        .setDescription("**Buradaki destek ekibimiz sizinle ilgilenecektir.\nDestek talebini iptal etmek için [.iptal] yazabilirsin!**")
        .setFooter('Destek Sistemi', client.user.avatarURL)
        .setTimestamp()
        
        ch.send(embed).catch()
      ch.send(`@here Lütfen İlgilenelim`)
      
        ch.awaitMessages((msg)=> {
            if (msg.content === ".iptal") {
                ch.send("`Talebiniz iptal ediliyor!`").then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'destek',
  description: 'Destek talebi açar.',
  usage: 'destek'
};