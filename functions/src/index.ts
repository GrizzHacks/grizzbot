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
  try {
    functions.logger.info("Recieved slash command: joinqueue", {structuredData: true})
    // Parse and save the incoming Slack data
    const slackData = request.body
    console.log(slackData)
  
    const channelID = slackData.channel_id
    const channelName = slackData.channel_name //use to retrieve sponsor Firebase doc
    const userID = slackData.user_id
    const userName = slackData.user_name
    const command = slackData.command

    //Retrieve Firebase data for this channel
    const snapshot = await admin.firestore().doc(`queue/${channelName}`).get()
    const fbData = snapshot.data()
    console.log(fbData)

    //Construct users array
    const userArray = fbData?.users
    if (userArray.includes(userID)) {

        //send response to Slack as JSON
        const responseMessage:string = `Please be patient! You are already in the queue!\n
        Recieved /joinqueue command with Slack data:\n 
        channelID: ${channelID}\n
        channelName: ${channelName}\n
        userID: ${userID}\n
        userName: ${userName}\n
        command: ${command}\n
        Firebase data:\n
        ${JSON.stringify(fbData)}`
        response.send(responseMessage)
    } else {
        try {
          //add new userID to the queue
          userArray.push(userID)
          //update users array in Firebase
          await admin.firestore().doc(`queue/${channelName}`).update({
            users: userArray
          })
          //Respond to Slack
          response.send(`You have been successfully added to the queue!\n ${userArray}`)
            
        } catch (error) {
          //Handle error
          console.log(error)
          response.status(500).send(error)
        }
    }
  } catch (error) {
     //Handle error
     console.log(error)
     response.status(500).send(error)
  }

})


// Cloud Function: advanceQueue
// --------------------------
export const slashAdvanceQueue = functions.https.onRequest(async (request, response) => {
  try {
    functions.logger.info("Recieved slash command: advancequeue", {structuredData: true})
    const slackData = request.body
    console.log(slackData)
  
    //get channel name and sponsor key
    const channelName:string = slackData.channel_name //use to retrieve sponsor Firebase doc
    const enteredSponsorKey:string = slackData.text.trim()

    //Retrieve Firebase data for this channel
    const snapshot = await admin.firestore().doc(`queue/${channelName}`).get()
    const fbData = snapshot.data()
    console.log(fbData)

    const sponsorKey:string = fbData?.sponsorKey //get the actual sponsor key
    if (enteredSponsorKey === sponsorKey) {

      //Get users array and advance the queue
      const userArray = fbData?.users

      // if the queue is empty or null, do not attempt to process
      if (!userArray || !userArray.length) {
            response.send(`advancequeue: The ${channelName} queue is empty!`)
        }

      //Advance the queue and update the Firebase users array
      userArray.shift()
      await admin.firestore().doc(`queue/${channelName}`).update({
        users: userArray
      })

      response.send(`advancequeue: Successfully advanced the ${channelName} queue!\nA new user will join the call soon! `)
    } else {
      response.send("advancequeue: Invalid sponsor key, try again!")
    }

    
  } catch (error) {
     //Handle error
     console.log(error)
     response.status(500).send(error)
  }

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

// Cloud Function: showQueue
// --------------------------
export const slashShowQueue = functions.https.onRequest((request, response) => {
  functions.logger.info("Recieved slash command: showQueue", {structuredData: true})
  const data = request.body
  console.log(data)

 //send response as JSON
 const responseMessage:string = `Recieved /showqueue command with args: '${JSON.stringify(data)}'`
 response.send(responseMessage)

})