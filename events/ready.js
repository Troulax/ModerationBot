const Moment = require('moment')
const Discord = require('discord.js')
const moment = require('moment');
let prefix = '.'
module.exports = client => {
  
  var oyun = [
`Mod.`,
    ];

    setInterval(function() {

        var random = Math.floor(Math.random() * (oyun.length - 0))

        client.user.setActivity(oyun[random] );
        }, 3000);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};

   