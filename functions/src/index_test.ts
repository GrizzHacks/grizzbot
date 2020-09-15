// import * as crypto from 'crypto';
// import * as tsscmp from 'tsscmp';
// import * as functions from 'firebase-functions';
// // import { slackPOST } from './slackPOST';

// // Initialize Slack bot
// import { WebClient } from '@slack/web-api';
// const bot = new WebClient(functions.config().slack.token);
// // Initialize Google PubSub
// const { PubSub } = require('@google-cloud/pubsub');
// const pubsubClient = new PubSub();

// // Listen for Slack events: (member-joined-channel)
// export const grizzBot = functions.https.onRequest( async (req, res) => {

//   //Validate Slack Signature is legit
//   if (verifySlackSignature(req) !== true){
//     console.log("Error: Slack Signature is not Legit!")
//   }

//   const data = JSON.stringify(req.body);
//   const dataBuffer = Buffer.from(data);

//   await pubsubClient
//       .topic('slack-channel-join')
//       .publisher()
//       .publish(dataBuffer);

//   //Respond with HTTP 200 OK to keep Slack from timing out
//   res.sendStatus(200);

// });



// export const slackChannelJoin = functions.pubsub.topic('slack-channel-join')
// .onPublish(async (message, context) => {

//   const { event } = message.json;

//   const { user, channel } = event;

//   //IDs for the channels you plan on working with
//   const generalChannel = 'C12345';
//   const newChannel = '#someBS-here';

//   // Throw error if not on the general channel
//   if (channel !== generalChannel){
//     throw Error()
//   }

//   //Get the full Slack profile

//   const userResult = await bot.users.profile.get({ user });

//   const { email, display_name } = userResult.profile as any;

//   const invite = await bot.channels.invite({
//     channel: newChannel,
//     user
//   });

//   const chatMessage = await bot.chat.postMessage({
//     channel: newChannel,
//     text: `Hey ${display_name}! Welcome to the Slack channel!`
//   });


// });


// function verifySlackSignature(req) {
//   // Your signing secret
//   const slackSigningSecret = '2b225953bb2802fdee8c75b46bfebb31';

//   // Grab the signature and timestamp from the headers
//   const requestSignature = req.headers['x-slack-signature'] as string;
//   const requestTimestamp = req.headers['x-slack-request-timestamp'];

//   // Create the HMAC
//   const hmac = crypto.createHmac('sha256', slackSigningSecret);

//   // Update it with the Slack Request
//   const [version, hash] = requestSignature.split('=');
//   const base = `${version}:${requestTimestamp}:${JSON.stringify(req.body)}`;
//   hmac.update(base);

//   // Returns true if it matches
//   return tsscmp(hash, hmac.digest('hex'));
// }



