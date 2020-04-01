require('dotenv').config()
const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.TOKEN

bot.login(token)

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}`)
})

bot.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong')
    // msg.channel.send('pong')
  }
  if (msg.content === 'bad word') {
    msg.reply("potty mouth")
  }
})
