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
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/EBUvKfB.jpeg";
global.devs = "254708002615";
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
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://toxic-session-id.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUt6cHJ2UnRPTUFIMzFyOVZYbktCYkJmendxNm9wQVBqZ2YvZGQvRXlsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUFFWEMxL3hlWWhpanp6WjNnU01TeEk1cGNrN0VvYldqblhrQ0RnSnJTTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T2wrWUNYZkNYSWdNZ3BkQmNhWlNTOUF2RXJOU2p1QnRIT0NSK0d1SW0wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrajA4UlJabkJ0c1VxVjJnbDNjcEZ1Qm5wMDZ2OGE1QklqUFZJYWVQSnpZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVBOE5VeXRlNUVBVW5RSWZPUXJFeDNLQWpYQjFSNzJ1ZDMyZk9pSnJ5MDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFd3VQN0NqZXNuamNWQWluYkU3OVlJNkFDcUpERVo0OS92UVNyOVBLd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElYMVpETmJtbk9VaVhrbEhiL3NYc0JWUmFjbU1rcjZYTm90UVdtcEprMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzAyZ2NEM1lhQm0reEdoaUptODI2RnkxZlk0OEFreEFSRHQwVVVYWjhSQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUyeEJ1TjdyTWp2d1F2OGJJWWxybG9va1FLL1g0R0s0VTV0TGZMamlMMkpUa3hyaTdtSW1ET0tSRWJYay91aGJjakNQbVo5VFBFL09zcUp5L21tc2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoidkxiVUVSN0IwNHgvSjZWcklLRTJVbjUrOEZFazJ6ZVQrd0lFc2tQWThrQT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMHBmVXNjMVBRdE9EVnBmaDRfWEJUUSIsInBob25lSWQiOiIyOTA3YjkwMi0xMTYyLTQ4ODQtODIxZS1iZmJkODk2NGUxODkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGEzN2xoVExseWRDaVRaN05DV1c3d2ZSS3hJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV3L0RyOU1OTFZqbWJNS3hnWjFWUXd1WGFkTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaM1RGMUpRMyIsIm1lIjp7ImlkIjoiMjU0NzA4MDAyNjE1OjQ5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMN21qS2dCRVBXOHhiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiclpIc3ZHbWw5bXozbE16SG1aMGh3UU9IbmZHbmtLSHR5dWpOWHdadEZrPSIsImFjY291bnRTaWduYXR1cmUiOiJLVlozdHpjR1I5a3lTTjFFUlI0VXZxblZLZS8yZG9kaVhlWGVUSFJ3NTVsYWtYcllFakVKcnE2ajNpV2RoSmw0cm5LMkVmZU9zaE9BNFZkazllUy9EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS01RVVhLUk9sbTVGMHZvS20zTHoxVXN5MVJVWHkrMVBLU0tSeUN1SFVWTG9WZjllVzluaGdSVld5dUFsZk9oYTdnb24zbEI0Z1dxRStIZWQ0NHZMZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MDgwMDI2MTU6NDlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVzYyUjdMeHBwZlpzOTVUTXg1bWRJY0VEaDUzeHA1Q2g3Y3JvelY4R2JSWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDgwMjk0NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFER0QifQ=="
module.exports = {
  menu: process.env.MENU || "1",
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
