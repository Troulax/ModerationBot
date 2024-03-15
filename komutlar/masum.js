const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("683428779045158953")) return message.channel.send(`Bu komutu kullanabilmek için \`Hapishane Bekçisi\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Lütfen Birini Etiketleyiniz Örnek: .masum Mod')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   member.removeRole(`683426782967365696`)

setTimeout(()=>{ member.addRole(`683426826303045733`)/// VERİLECEK CEZALI ROL İD
    },3000) 
  
  
  
 
  const sChannel = message.guild.channels.find(c=> c.id ==="683640571923005492")
const cıks = new Discord.RichEmbed()

  .setTitle(`Cezalı Rolu Kaldırıldı. `)
  .setColor("GREEN")
  .setDescription(`${kullanıcı} artık cezalı değil`)
  .setThumbnail(client.user.avatarURL)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
 
 sChannel.send(cıks)
     

  
  
                        
 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'masum',
  description: "Şeçtiğiniz Kişinin Cezalı Rolunu Kaldırır",
  usage: 'masum [@Cezalandırılıcak Kişi kişi]'
}