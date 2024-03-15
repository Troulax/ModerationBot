const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  let yetki = message.member.roles.has("683631016195522560")
  
  if (!message.member.roles.has("683631016195522560")) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x7e1111').setDescription( `**Bu komudu kullanabilmek için \`Taşıma\` yetkisine sahip olmalısın**.`)
  .setTimestamp())
                                                                                      
  if (!message.member.voiceChannel) {
    return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x7e1111').setDescription( `**Bu komudu kullanabilmek için herhangi bir \`ses kanalında\` olmalısın**.`)
  .setTimestamp())
  }
  message.channel.bulkDelete(1)
  let kullanıcı = message.mentions.members.first();
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x7e1111').setDescription( `**Bir kullanıcıyı etiketlemelisin**.`)
  .setTimestamp())

  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);
  let afk = message.mentions.members.first();
  
  if (!member.voiceChannel) return message.channel.sendEmbed(new Discord.RichEmbed().setColor('0x7e1111').setDescription( `**${afk} kullanıcı bir ses kanalında değil.**.`)
  .setTimestamp()).then(m => m.delete(8000));

  const voiceChannel = message.member.voiceChannel.id;
  if (!voiceChannel) return;

  member.setVoiceChannel(voiceChannel);

  const voiceChannel1 = message.member.voiceChannel.name;
  let embed = new Discord.RichEmbed()
    .setColor("0x166821")
    .setDescription(
      message.author +
        " **Tarafından** " +
        kullanıcı +
        " **Kullanıcısı** `" +
        voiceChannel1 +
        "`** Sesli Kanalına Çekildi.**"
    )
    .setFooter(
      `${message.author.tag}`,
      `${message.author.displayAvatarURL}`
    )
    .setTimestamp();
  message.channel.send(embed).then(m => m.delete(8000));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek"],
  permLevel: 0
};
exports.help = {
  name: "çek",
  description: "çek",
  usage: "çek"
};