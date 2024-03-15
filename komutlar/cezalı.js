const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("683428779045158953")) return message.channel.send(`Bu komutu kullanabilmek için \`Hapishane Bekçisi\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Lütfen Birini Etiketleyiniz Örnek: .cezalı Mod')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   member.removeRoles(member.roles)

setTimeout(()=>{ member.addRole(`683426782967365696`)/// VERİLECEK CEZALI ROL İD
    },3000) 
  
  

  const sChannel = message.guild.channels.find(c=> c.id ==="683640571923005492")
const cıks = new Discord.RichEmbed()
.setTitle(`Cezalı Rolu Verildi. `)
  .setColor("0Xee0000")
  .setDescription(`${kullanıcı}'a cezalı rolu verildi.\n\nCezasını kaldırmak için: .masum @kullanıcı`)
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
  name: 'cezalı',
  description: "Şeçtiğiniz Kişiye Cezalı Rolu Verir",
  usage: 'cezalı [@Cezalandırılıcak Kişi kişi]'
}