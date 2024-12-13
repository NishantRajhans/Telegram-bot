import { Telegraf } from "telegraf";
import { message } from 'telegraf/filters';
import dotenv from "dotenv";
dotenv.config();
const bot = new Telegraf(process.env.TELEGRAM_BOT);
bot.on(message("text"), ctx => {
    ctx.reply("Hello welcome");
});
bot.launch({
  webhook: {
    domain: "https://telegram-bot-kappa-three.vercel.app",
    port:5003,
  },
});
