
   
const Discord = require('discord.js');

exports.run = async(client, message, args) => {
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setDescription(`**Doğru kullanım:** \`m!slowmode [0/10]\``)
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 10) {
    return message.channel.sendEmbed(new Discord.RichEmbed().setDescription("Süre limiti maksimum **10** saniye olabilir.").setColor('RANDOM'));
}
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor('RANDOM').setFooter(`${message.author.username} tarafından ayarlandı \n \n Moderasyon.`, message.author.avatarURL));
var request = require('request');

request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3,
};

exports.help = {
  name: 'slowmode',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'slowmode [1/10]',
};