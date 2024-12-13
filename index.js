import { Telegraf } from "telegraf";
import { message } from 'telegraf/filters';
const bot = new Telegraf('7993069629:AAEDQ8NZlnKtn4GGPXYNcWMbM-hFP1Pg3ps');
bot.on(message("text"), ctx => ctx.reply("Hello"));
bot.launch({
  webhook: {
    domain:  "https://kind-friends-feel.loca.lt",
    port: 4000,
  },
});