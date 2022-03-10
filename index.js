const Discord = require("discord.js");
const Client = new Discord.Client({
    intents :[
Discord.Intents.FLAGS.GUILDS,
Discord.Intents.FLAGS.GUILD_MESSAGES,
Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});


const prefix = "!";


Client.on("ready", () => {
console.log("MinaBot en marche !");
});

Client.login(process.env.TOKEN);

Client.on("messageCreate", message => {
if (message.content === "!role"){
    var row = new Discord.MessageActionRow()

    .addComponents(new Discord.MessageButton()
    .setCustomId("boutonClient")
    .setLabel("Client Gratuit")
    .setStyle("SECONDARY")
    .setEmoji("🙋‍♂️")

    
    )  .addComponents(new Discord.MessageButton()
    .setCustomId("boutonClientPayant")
    .setLabel("Client Payant")
    .setStyle("PRIMARY")
    .setEmoji("🙋")   
    
    ).addComponents(new Discord.MessageButton()
    .setCustomId("boutonGraphiste")
    .setLabel("Graphiste")
    .setStyle("DANGER")
    .setEmoji("💻")

    )    .addComponents(new Discord.MessageButton()
    .setCustomId("boutonMonteur")
    .setLabel("Monteur")
    .setStyle("SUCCESS")
    .setEmoji("📹")
);


message.channel.send({content: "**Rôle réaction** / _appuyer sur le bouton qui vous correspond_", components:[row]});

}

});

Client.on("interactionCreate", interaction => {
if(interaction.isButton()){
 if (interaction.customId === "boutonClient"){
    interaction.reply({ content: 'vous avez maintenant le rôle Client Gratuit', ephemeral: true })
     interaction.member.roles.add("927948363037548644")
 }

 if (interaction.customId === "boutonClientPayant"){
    interaction.reply({ content: 'vous avez maintenant le rôle Client Payant (vous pouvez désormais effectuer une commande limitée.)', ephemeral: true })
     interaction.member.roles.add("951397149705396224")
 }

 if (interaction.customId === "boutonGraphiste"){
    interaction.reply({ content: 'vous avez maintenant le rôle Graphiste', ephemeral: true })
     interaction.member.roles.add("927948460030836776")
 }


 if (interaction.customId === "boutonMonteur"){
    interaction.reply({ content: 'vous avez maintenant le rôle Monteur', ephemeral: true })
     interaction.member.roles.add("928631144184958976")
 }

}
    });


//zizi
    
Client.on("guildMemberAdd", member => {
    console.log("Un membre a rejoint le serveur!");

    Client.channels.cache.get("926260363958317089").send("<@" + member.id + ">, merci d'avoir rejoins MiniaServ! J'espère que tu trouveras ton bonheur. N'oublie pas d'aller dans le salon #⚡┃role-reaction")
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre a quitté le serveur!");
    Client.channels.cache.get("926260363958317089").send("**" + member.displayName + "**" + " nous a quitté :(")
});
