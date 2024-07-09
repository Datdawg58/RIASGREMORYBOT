//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ricoricx5@gmail.com";
global.location = "Nairobi, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github = process.env.GITHUB || "https://github.com/TrippywayneRico/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/EBUvKfB.jpeg";
global.devs = "33757054414";
global.sudo = process.env.SUDO || "254708002615";
global.owner = process.env.OWNER_NUMBER || "254708002615";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://toxic-session-id.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdqeE9nNlZKdDdXejhXUEZ5ejUxcDVXN1lmWHYwTUVaam5zanVENkJFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0M3RERIZ3dxaFdLVlJlSWcrSEQ4d1FUanVxd1JjWkVtbmc1dU5rUkZnZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Q013elNmQjlhZVkzVlhhcGF5Ym42a0Q4dndYY2ZVcXVBSysxeFpnWm1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrVmZPYjV5YmxCMjVvVllIY25KRktIbUI1Q09iSGl4LzE2T0swQ09zNHpVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDMU93d1RQcGJ3VkU3NWtmQThzZ2FmVVZBbHowZE9pdFpTWFJPeVUzbHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitLRlFYZzVsdE1FZEtiN25jWDJualpULzRBQmpsWjlHMGdOazN5T1V2bWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01STW1iamJ6dHA0b1owZ29NOEt3NWp2N0REVUFXWWNtQUNNUU1mWFBGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2c4Y2FWTkNJbGJ5RUxIZk1tcFlZNnA5UnJPWVlTT1p4eVhKNHZ4eVB4Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9GbUZ3N2oxZ2tkcTl1ejBIOEJtRE02b3ZjZTRoRXg2eWNNdG1xcS9MUXBid3VyYkVIMm9qOWhiR1NFMmlITGp3dyt6cnlpb0ExSU9xMk5KMVNhMGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6ImhhN1lpK3NYWDZodkw2dXN3VkZxcEM5K0xiNy9hZVFmTDZ3MjkwKy9aRlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVXQ3M4SFRTVHVPSE8wcElfZDBxLUEiLCJwaG9uZUlkIjoiYjllNGZkMzEtMDljZi00YzRlLTgzN2EtZDIxY2Y3NTYyMzgyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVEYjdTYlZUY1FuNWxZeTlSMmMvclFUNk1vTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJc3Y5UGxQd2tZRHRmcDA0YlFJUFF0RXpNVFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV0UzSjI5SjMiLCJtZSI6eyJpZCI6IjI1NDcwODAwMjYxNTo0NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGVEcU5vR0VJUHp0TFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieVpTZTBLOW54YXhhemtkSGEwM2thaVc3QkhXd3lZZ0luQTBYSXBWdjF5az0iLCJhY2NvdW50U2lnbmF0dXJlIjoieFNlTUdYdjVNeExhSlZjZjM5SjN2akNlUVA2UVZLd0U0ZURpbjhJOWlqZGZXcm5ady9qZHlJVEs1K2xCQzFnREJndEZqR1RPZjlLOGVuR1F5UDhlQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IlVPeThvVVZreXcwYVFCemlaMG1zNEtYRFJVTzJQNmhoL0NRdG1zbFZPeVZhWEhxMzRRVSs5ZGh6QWd2bWtLUE5qRkl4TWtvYzNiQnpoZXN0YlExa2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA4MDAyNjE1OjQ2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNtVW50Q3ZaOFdzV3M1SFIydE41R29sdXdSMXNNbUlDSndORnlLVmI5Y3AifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA1MzEzNDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlp1In0=="
module.exports = {
  menu: process.env.MENU || ".",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴛᴏxxɪᴄ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ᴛᴏxxɪᴄ ᴍᴅ",
  ownername: process.env.OWNER_NAME || "Trippy",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
