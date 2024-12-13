import { Telegraf } from "telegraf";
import { message } from 'telegraf/filters';
import dotenv from "dotenv"
dotenv.config()
const bot = new Telegraf(process.env.TELEGRAM_BOT);
bot.on(message("text"), ctx => ctx.reply("Hello"));
bot.launch({
  webhook: {
    domain: process.env.WEBHOOK_DOMAIN,
    port: 4000,
  },
});