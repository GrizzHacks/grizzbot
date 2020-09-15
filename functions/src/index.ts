// ============ Init ================
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { WebClient } from '@slack/web-api'

// Initialize Firebase
admin.initializeApp()

// Initialize Google PubSub
// const { PubSub } = require('@google-cloud/pubsub')
// const pubsubClient = new PubSub()

// Initialize Slack bot
// const SLACK_SIGNING_SECRET = functions.config().slack.signing_secret
const SLACK_BOT_TOKEN = functions.config().slack.bot_token
const bot = new WebClient(SLACK_BOT_TOKEN)



// ============ Helper Functions ================

// Post a message to a channel your app is in using ID and message text
function publishMessage(response: functions.Response<any>, id: string, text: string) {
    // Call the chat.postMessage method using the WebClient API
    bot.chat.postMessage({
      // The token you used to initialize your app
      token: SLACK_BOT_TOKEN,
      channel: id,
      text: "",
      // You could also use a blocks[] array to send richer content
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `Here is the text you passed in: ${text}`
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "Join Queue",
                "emoji": true
              },
              "value": "click_me_123"
            }
          ]
        }
      ]
    })
    .then(() => {
      console.log('GrizzBot Hello World message posted!')
      response.send('Message Successfully Posted!')
    })
    .catch((err) => {
      console.log(err)
      response.sendStatus(500) //send error code
    })
    
}

// ============ Google Cloud Functions ================

// Cloud Function: Hello World - send a message to Slack channel
// --------------------------
export const helloWorldMessage = functions.https.onRequest((request, response) => {
  functions.logger.info("Recieved helloWorldMessageRequest", {structuredData: true})
  
   //ID of GrizzHacks office-hour-test channel
  const channelID: string = "G017SQ9MU1K"                  
  //publish message to Slack and send response
  publishMessage(response, channelID, "Hello world :tada:") 
})

// Cloud Function: getLink
// --------------------------
export const getZoomLink = functions.https.onRequest((request, response) => {
    admin.firestore().doc('queue/quicken').get()
    .then(snapshot => {
        const data = snapshot.data()
        response.send(data) //send contents of the doc as JSON
    })
    .catch(error => {
        //Handle error
        console.log(error)
        response.status(500).send(error)
    })
})


// Cloud Function: joinQueue
// --------------------------
export const slashJoinQueue = functions.https.onRequest((request, response) => {
  functions.logger.info("Recieved slash command: joinqueue", {structuredData: true})
  const data = JSON.stringify(request.body)
  console.log(data)

 //send response as JSON
  const responseMessage:string = `Recieved /joinqueue command with request object: '${data}}'`
  response.send(responseMessage)
})

// Cloud Function: leaveQueue
// --------------------------
export const slashLeaveQueue = functions.https.onRequest((request, response) => {
  functions.logger.info("Recieved slash command: leavequeue", {structuredData: true})
  const data = JSON.stringify(request.body)
  console.log(data)

   //send response as JSON
  const responseMessage:string = `Recieved /leavequeue command with request object: '${data}'`
  response.send(responseMessage)

})

// Cloud Function: advanceQueue
// --------------------------
export const slashAdvanceQueue = functions.https.onRequest((request, response) => {
  functions.logger.info("Recieved slash command: advancequeue", {structuredData: true})
  const data = JSON.stringify(request.body)
  console.log(data)

 //send response as JSON
 const responseMessage:string = `Recieved /advancequeue command with args: '${data}'`
 response.send(responseMessage)

})


// Cloud Function: advanceQueue
// --------------------------
export const slashShowQueue = functions.https.onRequest((request, response) => {
  functions.logger.info("Recieved slash command: advancequeue", {structuredData: true})
  const data = JSON.stringify(request.body)
  console.log(data)

 //send response as JSON
 const responseMessage:string = `Recieved /showqueue command with args: '${data}'`
 response.send(responseMessage)

})