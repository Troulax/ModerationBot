const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Moderasyon Oylama Sistemi', client.user.avatarURL)
     .setDescription(`:scroll: Yazı yazman gerek :scroll: Örnek: .oylama Müzik Olsun mu ? `)).then(m => m.delete(5000));
    
     
   console.log("Oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setAuthor("Oylama başlatıldı, lütfen oylayın!")
      
       .setThumbnail(message.author.avatarURL)
       .setFooter('Moderasyon Oylama Sistemi', client.user.avatarURL)

       .addField(`**Oylama Konusu**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: true,
       aliases: ['oylama'],
       permLevel: 2,
  
     
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};