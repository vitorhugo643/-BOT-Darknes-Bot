const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: `» IP: ghostminigames.com | » IP: ghostsurvival.com`, type: 1, url: 'https://www.youtube.com/yRecky'} });
    console.log('Logado');
});
bot.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
let args = message.content.split(" ").slice(1);
if(cmd === '/anuncio'){
    const args = message.content.split(" ").slice(1);
    const prefix = '/'
    message.delete()
    if (!args.slice(0).join(' ')) return message.channel.send('test')
    message.channel.send({embed:{
        'description':args.slice(0).join(' ')
        ,'color':message.member.highestRole.color,
        "thumbnail":{
            }
        }
    }
    )
}
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
