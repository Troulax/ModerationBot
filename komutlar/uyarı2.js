const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("683428779045158953")) return message.channel.send(`Bu komutu kullanabilmek için \`Hapishane Bekçisi\` yetkisine sahip olmasınız.`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Lütfen Birini Etiketleyiniz Örnek: .uyarı2 Mod')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
    member.addRole(`683745595114258460`)

  const sChannel = message.guild.channels.find(c=> c.id ==="683650691721330761")
const cıks = new Discord.RichEmbed()

  
  .setTitle(`Uyarı Rolu Verildi `)
  .setColor("0Xee0000")
  .setDescription(`${kullanıcı}'a uyarı 2 verildi'`)
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
  name: 'uyarı2',
  description: "Uyarı rolu verir",
  usage: 'uyarı [@kişi]'
}