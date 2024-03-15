const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

  const yesil = (client.emojis.find("name", "ykleniyor").toString())
  const greatpalace = (client.emojis.find("name", "ykleniyor").toString())
  const yildiz = (client.emojis.find("name", "ykleniyor").toString())
     const emoji = (client.emojis.find("name", "ykleniyor").toString())
  message.channel.bulkDelete(1)
     const sunucusay = new Discord.RichEmbed()
  
  .setColor("RANDOM")
  .setAuthor('Bilgilendirme', `${message.author.displayAvatarURL}`)
        .addField(`Komut Uygulandı`, `${yesil}│Şu an Ses kanallarında \`${count}\` aktif kişi bulunmaktadır. \n\n${yildiz}│Şu an Sunucuda \`${message.guild.memberCount}\` kişi bulunmaktadır.\n\n${emoji}│Şu an Sunucuda \`${message.guild.members.filter(off => off.presence.status !== 'offline').size}\` aktif kişi bulunmaktadır.`)
        .setThumbnail("")
        .setTimestamp()
  .setFooter('© 2020 Moderasyon', client.user.avatarURL)
  message.channel.sendEmbed(sunucusay).then(async message => {
   setTimeout(() => {
                            message.delete(`**Temizlendi**`);
                        }, 100000);
  }  
  )

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0, 
  kategori: "sunucu"
};

exports.help = {
  name: 'say',
  description: 'sayma komudu.',
  usage: '.say'
};  