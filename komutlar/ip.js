const source = require('gamedig');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  

  
    
  try {
    let mesaj = args.slice(0).join(' ')

  let eee = mesaj.split(':');
      let host = '';

    if (host === '') {
const embed = new Discord.RichEmbed()
.setDescription('`` böyle bir sunucu yok.')
      return message.channel.send(embed);
    }

    let port = eee[1] ? parseInt(eee[1]) :27015;

    let data = await source.query({
      type: 'csgo',
      host: '',
      port: ''
    });

  
     let stats = [
     
    {
        name: 'Harita',
        value: data.map,
  inline: true
      },
   {
        name: 'Aktiflik',
        value: `${data.players.length}/${data.maxplayers}`,
  inline: true
      },


      {
        name: 'İp Adresi',
        value: `\`${host}:${port}\``,
        inline: true
      },

     {
   name: 'Katıl',
          value: `<steam://connect/${host}:${port}>`

        }
      
      
    

       
    ];

   let footer;
     {
      footer = {
        text: 'Favorilerinze Eklemeyi Unutmayın',
      };
    }

    
    message.channel.send({
      embed: {
        color: 0x36393E,
        title: data.name,
        fields: stats,
        footer: footer
       
        
      }
    });
  }
  catch (e) {
    if (e.toString() === 'UDP Watchdog Timeout') {
      return message.reply('bilinmeyen ip. Lütfen doğru ip giriniz.')
    }
    throw e;
  }
};

exports.conf = {
  aliases: [],
  enabled: true,
  guildOnly: false,
permLevel: 0
};

exports.help = {
  name: 'ip',
  description: 'CSGO serveri hakkında istatistikleri öğrenirsiniz.',
  usage: 'ip'
};