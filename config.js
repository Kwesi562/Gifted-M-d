//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "giftedmd@giftedtechnexus.co.ke";
global.location = "Eldoret,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fc815a90e59c2203f0c41.jpg";
global.devs = "254762016957,254110853827,254728746852,255655147353,254728782591";
global.sudo = process.env.SUDO || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.owner = process.env.OWNER_NUMBER || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke/bots/giftedmd/sessions";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURzd0dvTS9xbjJhc2dtUFVpOGNIOTAxTUp3MXR0WDJGWDF1Q0J2dXcxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVm9SVEpmWnVjeTEzWjRIcGVEaEczc3FzOEJNTHRZUG44L3JnTnpTY1V6QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRng0ZVVEUmUvOUxXajljbDRJS2hlVlZheFcvZDhEckNHOThmSVFacG04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1cmEremxSTnkzWThOOHVaYXoxaFVxSXlDRHYvbVlxbGdMYktobTE2a3ljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1DSnk5eER6b0NZN0loZmtLaWtsTFBjemY3b0pSYnV2QllTU3JmTXhQbFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCSGIwSkgzYU9ZZjYvTzZYd0Rad1FBUGdiVkhjVGlUODNzUVlEYm80U1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0lBTnQrWDVwYnpDNFp4UDRXUnhBdHgvanpKRm5ESmFYU2ttc3F1aitWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnoxMmVaa0pGdWRZaFdybkZiS0dFcFg5TFN0bk8xWVkvUXdSYmI1bmFGYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkoxZm54NWU5TDNWR3EyR1JiekkrVmZENStZRTZxcGh0T3ZPbjdrNy9kWG1Wd1A5QmdwZmdQZVQwSUxPVEVuTDJZYkpmRnBUYlNrbC9EN1R5b3NVWUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJaN0JJNnA1RSsxNGI1c1hCbE5PcEE1UVEvOVpuRFF0TWwwS0lHaFVzVDF3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJta29scTgxc1FOdVJWZXRuX2R1RjJ3IiwicGhvbmVJZCI6ImZkMmFkZWM2LWJkOGMtNGM1Zi05M2FkLTAxZThiZDg0ZGRhMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUeVNEcWNiY08rUWtaUWdkN0R5dStvUDF5VEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXYycFJaTFlWbVpKRUtRZmlkckIvNlhnN1NrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk2NFNDRDQ4IiwibWUiOnsiaWQiOiIyMzM1MzQxNjQzOTM6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ3J5c3RhbGxpbmUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xYUTl1a05FTzdtdjdNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFiN1BQMFYxeTkzelQwWUlsQnFxK0pTMSs1T2dPcUVsK25tUGVyaGZoQU09IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVWWmNYdmd0Y3dxODNGd2w3Z1BKeUtETHgyMlZJMnFvR2o0bnNzN25qS3NyM0ZKbUkya3NLQ0Uzb3dhbnM0b2FabDZUbURtUmY2cWdWUEFtTU1yVGp3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaanJqbndCSnZJdDdPenZrUkgrcHFlOEMwbHFLaC8rME9ibSt1RWRzRDhUT2V4OWQwMXBxNHI1MnBLcXUzYkJUbFhoRWZ6QzdXc3pOaldzK1owSklCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzUzNDE2NDM5MzoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXbSt6ejlGZGN2ZDgwOUdDSlFhcXZpVXRmdVRvRHFoSmZwNWozcTRYNFFEIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4NjEyODU5fQ=="
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION || "𝗚𝗜𝗙𝗧𝗘𝗗 𝗠𝗗 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 𝟰.𝟬.𝟬",
  author: process.env.PACK_AUTHER || "𝗚𝗜𝗙𝗧𝗘𝗗 𝗠𝗗",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "ɢɪғᴛᴇᴅ-ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "GIFTED").toUpperCase(),
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
