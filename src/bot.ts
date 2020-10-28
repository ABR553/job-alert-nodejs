require('dotenv').config()
import Telegraf, { Markup } from 'telegraf'

const bot = new Telegraf(process.env.TOKEN)

const keyboard = Markup.keyboard([
  ['hello', '1 row'],
  ['2 row'],
  ['3 row']
]).oneTime().resize().extra()

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const chat_from = `${ctx.message.chat.first_name} (id: ${ctx.message.chat.id})`
  console.log(`Chat from ${chat_from}`)
})

bot.command('hola', ({ reply}) => reply('Waalaikumsalam', keyboard))
bot.hears('hello', (ctx) => ctx.reply('hello button'))
bot.launch()