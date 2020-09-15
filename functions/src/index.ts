// ============ Init ================
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { WebClient } from '@slack/web-api'

// Initialize Firebase
admin.initializeApp()

// Initialize Slack bot
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

// Cloud Function: buttonClickHandler
// --------------------------
// Any interactions with shortcuts, modals, or interactive components 
// (such as buttons, select menus, and datepickers) will be sent to this route
export const buttonClickHandler = functions.https.onRequest((request, response) => {
  functions.logger.info("Recieved request to buttonClickHandler", {structuredData: true})
  const data = request.body
  console.log(data)

 //send response
 response.status(200)
})

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
export const getDynatraceTest = functions.https.onRequest(async (request, response) => {
  const channelID = 'sponsor_dynatrace'
  
  try {
    const snapshot = await admin.firestore().doc(`queue/${channelID}`).get()
    const data = snapshot.data()
    console.log(data)
    response.send(data) //send contents of the doc as JSON

  } catch (error) {
     //Handle error
     console.log(error)
     response.status(500).send(error)
  }
  
})


// Cloud Function: joinQueue
// --------------------------
export const slashJoinQueue = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Recieved slash command: joinqueue", {structuredData: true})
  // Parse and save the incoming Slack data
  const data = request.body
  console.log(data)

  const channelID = data.channel_id
  const channelName = data.channel_name //use to retrieve sponsor Firebase doc
  const userID = data.user_id
  const userName = data.user_name
  const command = data.command

//   try {
//     const snapshot = await admin.firestore().doc(`queue/${channelID}`).get()
//     const data = snapshot.data()
//     console.log(data)
//     response.send(data) //send contents of the doc as JSON

//   } catch (error) {
//      //Handle error
//      console.log(error)
//      response.status(500).send(error)
//   }


//   if (!array || !array.length) {
//     // array or array.length are falsy
//     // ⇒ do not attempt to process array
// }

 //send response to Slack as JSON
  const responseMessage:string = `Recieved /joinqueue command with Slack data:\n 
  channelID: ${channelID}\n
  channelName: ${channelName}\n
  userID: ${userID}\n
  userName: ${userName}\n
  command: ${command}\n`
  response.send(responseMessage)
})


// Cloud Function: leaveQueue
// --------------------------
export const slashLeaveQueue = functions.https.onRequest((request, response) => {
  functions.logger.info("Recieved slash command: leavequeue", {structuredData: true})
  const data = request.body
  console.log(data)

   //send response to Slack
   const responseMessage:string = `Recieved /leavequeue command with data: '${JSON.stringify(data)}'`
  response.send(responseMessage)
})

// Cloud Function: advanceQueue
// --------------------------
export const slashAdvanceQueue = functions.https.onRequest((request, response) => {
  functions.logger.info("Recieved slash command: advancequeue", {structuredData: true})
  const data = request.body
  console.log(data)

 //send response as JSON
 const responseMessage:string = `Recieved /advancequeue command with args: '${JSON.stringify(data)}'`
 response.send(responseMessage)

})


// Cloud Function: advanceQueue
// --------------------------
export const slashShowQueue = functions.https.onRequest((request, response) => {
  functions.logger.info("Recieved slash command: advancequeue", {structuredData: true})
  const data = request.body
  console.log(data)

 //send response as JSON
 const responseMessage:string = `Recieved /showqueue command with args: '${JSON.stringify(data)}'`
 response.send(responseMessage)

})