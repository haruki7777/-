const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready',()=>{
    console.log("봇이 준비되었습니다.")
})
client.on('message',msg=>{
    if(msg.content === "핑"){
        msg.reply("퐁!")
    }
})

client.login('OTA1MzU1NDkxNzA4OTAzNDg1.YYI4AQ.XAq7IfLyPllsyBku8jKpLrXXJFM')