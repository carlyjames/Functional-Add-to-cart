const { Telegraf } = require('telegraf');

const BOT_TOKEN = '5563614161:AAGgT6UpRWW9bf4H_b-ayHLv51swFvfjXqU'
const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on('sticker', (ctx) => ctx.reply('👍'));
// bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();
