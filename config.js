const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347062709969";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_37_10_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDkxLFxuICAgICAgICA0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA2NCxcbiAgICAgICAgOSxcbiAgICAgICAgODMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1LFxuICAgICAgICA1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg5LFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMTM5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkY1ZURsaVNMaWkzTVpCcHlPYitRWHN6Kys5NGhJdGFGa1I3eGltU09MbUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndVZXl4d2NRU1NTSUdLTzQ5VTZXYXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2Q1ZjExYTktNGVkNi00Mzk5LWFiNjYtNzNjOGYzZDc0ZTk4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg4LFxuICAgICAgMjQ1LFxuICAgICAgMTk5LFxuICAgICAgOTMsXG4gICAgICAyNDUsXG4gICAgICAyNDMsXG4gICAgICA5MCxcbiAgICAgIDIyOCxcbiAgICAgIDY5LFxuICAgICAgODcsXG4gICAgICAxODQsXG4gICAgICA3NixcbiAgICAgIDExOCxcbiAgICAgIDkxLFxuICAgICAgNDQsXG4gICAgICA2MyxcbiAgICAgIDEyMSxcbiAgICAgIDE2MCxcbiAgICAgIDEwLFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDE4OCxcbiAgICAgIDUzLFxuICAgICAgMjI4LFxuICAgICAgMjA5LFxuICAgICAgODQsXG4gICAgICAxNzAsXG4gICAgICA1MSxcbiAgICAgIDIwMSxcbiAgICAgIDIyNyxcbiAgICAgIDY2LFxuICAgICAgMCxcbiAgICAgIDUzLFxuICAgICAgNTAsXG4gICAgICAxMDIsXG4gICAgICAxODAsXG4gICAgICAxNjIsXG4gICAgICA2NCxcbiAgICAgIDEzNSxcbiAgICAgIDE1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2RU5CTFQ5UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MjcwOTk2OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTW9tIEF5c2hhcnQgQ29sbGVjdGlvblwiLFxuICAgIFwibGlkXCI6IFwiNjI4NDAxMTk1NTAxOTg6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQS21yek1RODl5ZXVBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBZaUluODZuc3JtcVZmSzhnWHp0Z0VGNHRSTXZiUUFvUXltMjV3TEo1QW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieElKcjgzVkxZOXRwY3Foc2pMOEYvejI3NEZFZ0p1NjlrWXRIZUxYOElQZFdUSzI1dmp3R0lBK1lQU2dPQnI0VDM5a1NhcnlCUUY3SGJxNnVRTVZ5REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZURYMWlpVEFBNU5DUS9QTWVkRFljazdDazRqTG43VUwxL3FYdFN3MnZZem9DKzVKT201RFgvWm9iUTRkWXJaVWlReTRxWVdaMTcyZVpRVUxaWjB6Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MjcwOTk2OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg1NTY2NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGdGRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ0ZC5qc29uIjogIntcImtleURhdGFcIjpcIlI2UG1LRkFqM3phYVhVSGlTb3p0QTNEZ1ZoYWRsM1VyUmtpSGVjVm9seHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3NzI5Nzc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjg1NTE0OTQ5ODBcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
