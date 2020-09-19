//   //Declare a new Date object we will use to set the time/date for all messages
//   const exposcheduledTime = new Date()


//   //Saturday at 1:00 PM
//   exposcheduledTime.setDate(exposcheduledTime.getDate()   ) //get the desired day
//   exposcheduledTime.setHours(17, 0, 0)
  
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Come meet recruiters at the Sponsorship Expo! You'll have a chance to talk one-on-one with our sponsoring companies until 3:00pm",
//     post_at: (exposcheduledTime.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'fun_and_games', //desired channel name goes here
//     text: "Come meet recruiters at the Sponsorship Expo! You'll have a chance to talk one-on-one with our sponsoring companies until 3:00pm",
//     post_at: (exposcheduledTime.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const amazonTechTalk = new Date()
  
//   //Saturday at 1:53 PM
//   amazonTechTalk.setDate(amazonTechTalk.getDate()   ) //get the desired day
//   amazonTechTalk.setHours(17, 53, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Come hear from Fletcher Liverance about working as an engineer at Amazon! This will be an exciting talk full of interesting information. Find him starting here at 2:00pm -> https://meet.google.com/kex-utyy-pva",
//     post_at: (amazonTechTalk.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const allyTechTalk = new Date()
  
//   //Saturday at 2:53 PM
//   allyTechTalk.setDate(allyTechTalk.getDate()   ) //get the desired day
//   allyTechTalk.setHours(18, 53, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Don’t wait until the last minute to automate your builds and deployments, shift left and create secure, scalable software patterns. Join us and learn about Continuous Integration, Continuous Delivery/Deployment, Automation, Testing, Security Scanning, Monitoring, Docker, Kubernetes, OpenShift, Helm, Jenkins, and more. This Tech Talk will be a combination of presentation and live demo with a healthy amount of Q&A. Prior experience with CI/CD and DevSecOps NOT necessary. You can learn all about this at 3:00 here -> https://meet.google.com/ejy-jbvm-dmg",
//     post_at: (allyTechTalk.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const littleCaesarsOH = new Date()
  
//   //Saturday at 3:53 PM
//   littleCaesarsOH.setDate(littleCaesarsOH.getDate()   ) //get the desired day
//   littleCaesarsOH.setHours(19, 53, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Come meet Keith Faigin and Time Somero from Little Caesars in this insightful office hours activity! The event will commence at 4:00pm here -> https://meet.google.com/ytb-pfnu-apw",
//     post_at: (littleCaesarsOH.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const comericaTechTalk = new Date()
  
//   //Saturday at 4:53 PM
//   comericaTechTalk.setDate(comericaTechTalk.getDate()   ) //get the desired day
//   comericaTechTalk.setHours(20, 53, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Learn how to innovate with Vaishali Bhatt, the VP Enterprise Architect at Comerica Bank! You can join his 5:00pm talk here -> https://meet.google.com/cxh-vidx-vey",
//     post_at: (comericaTechTalk.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const paintingBobRoss = new Date()
  
//   //Saturday at 4:55 PM
//   paintingBobRoss.setDate(paintingBobRoss.getDate()   ) //get the desired day
//   paintingBobRoss.setHours(20, 55, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Wanna paint like Bob Ross? Come learn with Major League Hacking here at 5:00pm -> https://meet.google.com/ufk-tuie-uiq",
//     post_at: (paintingBobRoss.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'fun_and_games', //desired channel name goes here
//     text: "Wanna paint like Bob Ross? Come learn with Major League Hacking here at 5:00pm -> https://meet.google.com/ufk-tuie-uiq",
//     post_at: (paintingBobRoss.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const littleCaesarsTechTalk = new Date()
  
//   //Saturday at 5:53 PM
//   littleCaesarsTechTalk.setDate(littleCaesarsTechTalk.getDate()   ) //get the desired day
//   littleCaesarsTechTalk.setHours(21, 53, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Do you like to eat pizza and think like a hacker? Then you'll love this Tech Talk given by Jason Brown of Little Caesars. It will start at 6:00pm here -> https://meet.google.com/zeo-jkge-dcx",
//     post_at: (littleCaesarsTechTalk.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const yogaTuesdaySixPM = new Date()
  
//   //Saturday at 5:55 PM
//   yogaTuesdaySixPM.setDate(yogaTuesdaySixPM.getDate()   ) //get the desired day
//   yogaTuesdaySixPM.setHours(21, 55, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Overwhelmed? Calm your mind with a yoga session, led by yoga master Laila Daughenbaugh here at 6:00pm -> https://meet.google.com/mjy-nqyn-pse",
//     post_at: (yogaTuesdaySixPM.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'fun_and_games', //desired channel name goes here
//     text: "Overwhelmed? Calm your mind with a yoga session, led by yoga master Laila Daughenbaugh here at 6:00pm -> https://meet.google.com/mjy-nqyn-pse",
//     post_at: (yogaTuesdaySixPM.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const fcaTechTalk = new Date()
  
//   //Saturday at 6:53 PM
//   fcaTechTalk.setDate(fcaTechTalk.getDate()   ) //get the desired day
//   fcaTechTalk.setHours(22, 53, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel In part one - beginning at 7:00pm - you'll see `How innovation is a cornerstone of FCA's culture: innovations across FCA as part of the digital transformation` by Mamatha Chamarthi - FCA CIO. In part two, watch Charlie Cross & Lucas Romero talk about `Every day is a hackathon: Innovations in Connected Vehicles at FCA` You can find the link to that viewing session here -> https://meet.google.com/apx-sktn-fwm",
//     post_at: (fcaTechTalk.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const submissionDiscussion = new Date()
  
//   //Saturday at 8:23 PM
//   submissionDiscussion.setDate(submissionDiscussion.getDate()  + 1) //get the desired day
//   submissionDiscussion.setHours(0, 23, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Don't know what you'll need for your project submission tomorrow, or can't quite figure out how to do it? Don't miss our Submission Discussion with Andrew! This presentation will begin at 8:30pm here -> https://meet.google.com/puj-vhdy-wfk",
//     post_at: (submissionDiscussion.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const hackerHangoutSatNight = new Date()
  
//   //Saturday at 8:23 PM
//   hackerHangoutSatNight.setDate(hackerHangoutSatNight.getDate()  + 1) //get the desired day
//   hackerHangoutSatNight.setHours(0, 53, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Meet your fellow attendees and answer some light-hearted questions here with our organizing team here at 9:00pm -> https://meet.google.com/tct-jmtd-cxi",
//     post_at: (hackerHangoutSatNight.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'fun_and_games', //desired channel name goes here
//     text: "Meet your fellow attendees and answer some light-hearted questions here with our organizing team here at 9:00pm -> https://meet.google.com/tct-jmtd-cxi",
//     post_at: (hackerHangoutSatNight.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const bingoEvent = new Date()
  
//   //Saturday at 10:53 PM
//   bingoEvent.setDate(bingoEvent.getDate()  + 1) //get the desired day
//   bingoEvent.setHours(2, 53, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Let's Play Bingo! You can join this Google Meeting for a chance to win Bingo at 11:00pm -> https://meet.google.com/qqy-ijvg-siv",
//     post_at: (bingoEvent.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'fun_and_games', //desired channel name goes here
//     text: "Let's Play Bingo! You can join this Google Meeting for a chance to win Bingo at 11:00pm -> https://meet.google.com/qqy-ijvg-siv",
//     post_at: (bingoEvent.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const artExcelEvent = new Date()
  
//   //Sunday at 12:53 AM
//   artExcelEvent.setDate(artExcelEvent.getDate()  + 1) //get the desired day
//   artExcelEvent.setHours(4, 53, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Excited to make some artwork on Excel (or Google Sheets?) That's right, it can be done! Check it out at this event, beginning at 1:00am -> https://meet.google.com/dqp-rrtp-fnm",
//     post_at: (artExcelEvent.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'fun_and_games', //desired channel name goes here
//     text: "Excited to make some artwork on Excel (or Google Sheets?) That's right, it can be done! Check it out at this event, beginning at 1:00am -> https://meet.google.com/dqp-rrtp-fnm",
//     post_at: (artExcelEvent.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const oneHourLeft = new Date()
  
//   //Sunday at 7:30 AM
//   oneHourLeft.setDate(oneHourLeft.getDate()  + 1) //get the desired day
//   oneHourLeft.setHours(11, 30, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Hacking will end in 1 hour! Be sure to get your Devpost name, tagline, and prize information up at https://grizzhacks5.devpost.com",
//     post_at: (oneHourLeft.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const halfHourLeft = new Date()
  
//   //Sunday at 8:00 AM
//   halfHourLeft.setDate(halfHourLeft.getDate()  + 1) //get the desired day
//   halfHourLeft.setHours(12, 0, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Hacking will end in 1/2 hour! Be sure to get your Devpost name, tagline, and prize information up at https://grizzhacks5.devpost.com",
//     post_at: (halfHourLeft.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const fifteenLeft = new Date()
  
//   //Sunday at 8:15 AM
//   fifteenLeft.setDate(fifteenLeft.getDate()  + 1) //get the desired day
//   fifteenLeft.setHours(12, 15, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Hacking will end in 15 minutes! Be sure to get your Devpost name, tagline, and prize information up at https://grizzhacks5.devpost.com",
//     post_at: (fifteenLeft.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const fiveLeft = new Date()
  
//   //Sunday at 8:25 AM
//   fiveLeft.setDate(fiveLeft.getDate()  + 1) //get the desired day
//   fiveLeft.setHours(12, 25, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Hacking will end in 5 minutes! Be sure to get your Devpost name, tagline, and prize information up at https://grizzhacks5.devpost.com",
//     post_at: (fiveLeft.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const thatsItHackingDone = new Date()
  
//   //Sunday at 8:25 AM
//   thatsItHackingDone.setDate(thatsItHackingDone.getDate()  + 1) //get the desired day
//   thatsItHackingDone.setHours(12, 30, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel THAT'S IT! STOP YOUR WORK! HACKING IS DONE! YOU DID IT!!!! DevPost submissions are due now. Make sure to include name, prize category, and tagline! :tada:",
//     post_at: (thatsItHackingDone.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const videosOneHourLeft = new Date()
  
//   //Sunday at 9 AM
//   videosOneHourLeft.setDate(videosOneHourLeft.getDate()  + 1) //get the desired day
//   videosOneHourLeft.setHours(13, 0, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel You've got 1 hour to make sure you have a 2-min (max) video presentation, link to public code repository, and a full Devpost write-up available.",
//     post_at: (videosOneHourLeft.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const videosHalfHourLeft = new Date()
  
//   //Sunday at 9:30 AM
//   videosHalfHourLeft.setDate(videosHalfHourLeft.getDate()  + 1) //get the desired day
//   videosHalfHourLeft.setHours(13, 30, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel You've got 1/2 hour to make sure you have a 2-min (max) video presentation, link to public code repository, and a full Devpost write-up available.",
//     post_at: (videosHalfHourLeft.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const videosFifteenMinsLeft = new Date()
  
//   //Sunday at 9:45 AM
//   videosFifteenMinsLeft.setDate(videosFifteenMinsLeft.getDate()  + 1) //get the desired day
//   videosFifteenMinsLeft.setHours(13, 45, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel You've got 15 minutes to make sure you have a 2-min (max) video presentation, link to public code repository, and a full Devpost write-up available.",
//     post_at: (videosFifteenMinsLeft.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const ctfGameMLH = new Date()
  
//   //Sunday at 10:05 AM
//   ctfGameMLH.setDate(ctfGameMLH.getDate()  + 1) //get the desired day
//   ctfGameMLH.setHours(14, 5, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Let's capture the flag with our MLH reps! Join them at 10:10am here to learn more about cybersecurity challenges  -> https://meet.google.com/mmf-dbvu-awi",
//     post_at: (ctfGameMLH.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'fun_and_games', //desired channel name goes here
//     text: "Let's capture the flag with our MLH reps! Join them at 10:10am here to learn more about cybersecurity challenges  -> https://meet.google.com/mmf-dbvu-awi",
//     post_at: (ctfGameMLH.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const judgingStartingAnnouncement = new Date()
  
//   //Sunday at 10:30 AM
//   judgingStartingAnnouncement.setDate(judgingStartingAnnouncement.getDate()  + 1) //get the desired day
//   judgingStartingAnnouncement.setHours(14, 30, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel We've begun the judging process! Stay tuned for top 10 announcements around 1:15pm!",
//     post_at: (judgingStartingAnnouncement.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const topTenAnnouncementSoon = new Date()
  
//   //Sunday at 1:25 PM
//   topTenAnnouncementSoon.setDate(topTenAnnouncementSoon.getDate()  + 1) //get the desired day
//   topTenAnnouncementSoon.setHours(17, 25, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel If you're interested in seeing our Top 10 winners, be sure to check out our Facebook, Twitch, and Youtube pages starting at 1:30PM! That's in 5 minutes! https://www.twitch.tv/grizzhacks",
//     post_at: (topTenAnnouncementSoon.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const closingCeremonyAnnouncement = new Date()
  
//   //Sunday at 2:55 PM
//   closingCeremonyAnnouncement.setDate(closingCeremonyAnnouncement.getDate()  + 1) //get the desired day
//   closingCeremonyAnnouncement.setHours(18, 55, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Closing Ceremony starts in 5 minutes on our Facebook, Twitch, and Youtube channels! Come see who'se won big at GrizzHacks - it could be you! https://www.twitch.tv/grizzhacks",
//     post_at: (closingCeremonyAnnouncement.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  
  
  
//   //Declare a new Date object we will use to set the time/date for all messages
//   const closingCeremonyAnnouncementLive = new Date()
  
//   //Sunday at 2:55 PM
//   closingCeremonyAnnouncementLive.setDate(closingCeremonyAnnouncementLive.getDate() + 1) //get the desired day
//   closingCeremonyAnnouncementLive.setHours(19, 0, 0)
//   await bot.chat.scheduleMessage({
//     // The token you used to initialize the app
//     token: SLACK_BOT_TOKEN,
//     channel: 'general', //desired channel name goes here
//     link_names: true,
//     text: "@channel Closing Ceremony is now live on our Facebook, Twitch, and Youtube channels! Come see who'se won big at GrizzHacks - it could be you! https://www.twitch.tv/grizzhacks",
//     post_at: (closingCeremonyAnnouncementLive.getTime() / 1000).toString() // Time to post message, in Unix Epoch timestamp format
//   })
  
  
  