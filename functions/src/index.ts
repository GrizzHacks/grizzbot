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
function sendLinkMessage( channelID: string, channelName: string, userID: string, userName:string, link: string) {
    console.log(userID)

    // Call the chat.postMessage method using the WebClient API
    bot.chat.postEphemeral({
      // The token you used to initialize your app
      token: SLACK_BOT_TOKEN,
      channel: channelID,
      user: userID,
      link_names: true,
      text: `${channelName} queue link: ${link}`,
      attachments: [],
      // You could also use a blocks[] array to send richer content
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `Hey, @${userName}, you're up! Click the link below to join the ${channelName} meeting! 🐻`
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `${link}`
          }
        }
      ]
    })
    .then(() => {
      console.log(`Link sent: Ephemeral message to ${userID} successfully posted to ${channelID}!`)
    })
    .catch((err) => {
      console.log(err)
    })
    
}

// ============ Google Cloud Functions ================

// Cloud Function: grizzbotMessageScheduler 
// --------------------------
export const grizzbotMessageScheduler = functions.https.onRequest(async (request, response) => {
  functions.logger.info("Recieved request to grizzbotMessageScheduler", {structuredData: true})
  const data = request.body
  console.log(data)

  
 //GrizzBot Message Scheduling Starts Here:
  try {

// //Test message
// const scheduledTime = new Date()
// scheduledTime.setDate(scheduledTime.getDate()  )
// scheduledTime.setHours(5, 45, 0)
// await bot.chat.scheduleMessage({
//   token: SLACK_BOT_TOKEN,
//   channel: 'general',
//   link_names: true,
//   text: 'Keep going hackers! You\'re doing great! :grizzhacks:',
//   post_at: (scheduledTime.getTime() / 1000).toString()
// })



    //send response
    response.status(200).send("GrizzBot has successfully scheduled your messages! 🐻\nDon't open this webpage again or you'll get duplicates!")
  }
  catch (error) {
    console.error(error);
    response.status(200).send("GrizzBot encountered an error scheduling your messages!")
  }

 
})


// Cloud Function: buttonClickHandler (currently does nothing)
// --------------------------
// Any interactions with Slack shortcuts, modals, or interactive components 
// (such as buttons, select menus, and datepickers) will be sent to this route
export const buttonClickHandler = functions.https.onRequest((request, response) => {
  functions.logger.info("Recieved request to buttonClickHandler", {structuredData: true})
  const data = request.body
  console.log(data)

 //send response
 response.status(200)
})



// Cloud Function: joinQueue
// --------------------------
export const slashJoinQueue = functions.https.onRequest(async (request, response) => {
  try {
    functions.logger.info("Recieved slash command: joinqueue", {structuredData: true})
    // Parse and save the incoming Slack data
    const slackData = request.body
    console.log(slackData)
  
    // const channelID = slackData.channel_id
    const channelName = slackData.channel_name //use to retrieve sponsor Firebase doc
    const userID = slackData.user_id
    const userName = slackData.user_name
    const userMap = {userID, userName} //store each user as a map with their ID and username

    //Retrieve Firebase data for this channel
    const snapshot = await admin.firestore().doc(`queue/${channelName}`).get()
    const fbData = snapshot.data()
    console.log(fbData)

    //Get copy of Firebase users array
    const userArray = fbData?.users

    //If the user is already in the queue, don't add them again
    let foundDuplicate:boolean = false
    userArray.forEach((currUser:any) => {
      if (currUser.userID === userMap.userID){
        foundDuplicate = true
      }
    })

    if (foundDuplicate === false) {
        //If the user is not already present, continue and add user to Firebase
        try {
          //add new user to the end of user array and update Firebase
          userArray.push(userMap)
          await admin.firestore().doc(`queue/${channelName}`).update({
            users: userArray
          })

          response.send(`${userName}, you have been successfully added to the ${channelName} queue! 🐻`)
        } catch (error) {
          //Handle error
          console.log(error)
          response.status(200).send("GrizzBot is having trouble adding you to the queue - please try again 🐻")
        }
      
    } else {
       //send response to Slack as JSON
       const responseMessage:string = `Hang in there, ${userName}, you are already in the queue! 🐻`
       response.send(responseMessage)
    }


  } catch (error) {
     //Handle error
     console.log(error)
     response.status(200).send("GrizzBot is not trained to work in this channel 🐻")
  }

})


// Cloud Function: advanceQueue
// --------------------------
export const slashAdvanceQueue = functions.https.onRequest(async (request, response) => {
  try {
    functions.logger.info("Recieved slash command: advancequeue", {structuredData: true})
    const slackData = request.body
    console.log(slackData)
  
    //Parse Slack data
    const channelName:string = slackData.channel_name //use to retrieve sponsor Firebase doc
    const enteredSponsorKey:string = slackData.text.trim()
    const channelID = slackData.channel_id
     

    //Retrieve Firebase data for this channel
    const snapshot = await admin.firestore().doc(`queue/${channelName}`).get()
    const fbData = snapshot.data()
    console.log(fbData)

    const sponsorKey:string = fbData?.sponsorKey //get the actual sponsor key from Firebase
    if (enteredSponsorKey === sponsorKey) {

      //Get users array 
      const userArray = fbData?.users

      // if the queue is empty or null, do not attempt to process
      if (!userArray || !userArray.length) {
            response.send(`advancequeue: The ${channelName} queue is empty! 🐻`)
        }

      //Get the meeting link and send to user at front of queue
      const link = fbData?.link
      const nextUser = userArray[0]
      sendLinkMessage(channelID, channelName, nextUser.userID, nextUser.userName, link)

      //Advance the queue and update the Firebase users array
      userArray.shift()
      await admin.firestore().doc(`queue/${channelName}`).update({
        users: userArray
      })

      //Respond to the sponsor in Slack that the queue has been advanced!
      response.status(200).send(`advancequeue: Successfully advanced the ${channelName} queue!\nA new hacker should join the call soon! 🐻`)
    } else {
      response.send("advancequeue: Invalid sponsor key or wrong channel, try again! 🐻")
    }

    
  } catch (error) {
     //Handle error
     console.log(error)
     response.status(200).send("GrizzBot is not trained to work in this channel 🐻")
  }

})

// Cloud Function: showQueue
// --------------------------
export const slashShowQueue = functions.https.onRequest(async (request, response) => {
  try {
      functions.logger.info("Recieved slash command: showqueue", {structuredData: true})
      // Parse and save the incoming Slack data
      const slackData = request.body
      console.log(slackData)
    
      const channelName = slackData.channel_name //use to retrieve sponsor Firebase doc

      //Retrieve Firebase data for this channel
      const snapshot = await admin.firestore().doc(`queue/${channelName}`).get()
      const fbData = snapshot.data()
      console.log(fbData)

      //Construct users array
      const userArray = fbData?.users
      // if the queue is empty or null, do not attempt to process and return
      if (!userArray || !userArray.length) {
        response.send(`showqueue: The ${channelName} queue is empty! 🐻`)
      }

      //Construct queue status string and send response to Slack
      let responseMessage:string = `The current queue to meet with ${channelName}:\n`
      let i = 1
      userArray.forEach((currUser:any) => {
        responseMessage += `${i}. ${currUser.userName}\n`
        i++
      })
      response.send(responseMessage)
  
  } catch (error) {
     //Handle error
     console.log(error)
     response.status(200).send("GrizzBot is not trained to work in this channel 🐻")
  }

})


// Cloud Function: leaveQueue
// --------------------------
export const slashLeaveQueue = functions.https.onRequest(async (request, response) => {
  try {
    functions.logger.info("Recieved slash command: leavequeue", {structuredData: true})
    // Parse and save the incoming Slack data
    const slackData = request.body
    console.log(slackData)
  
    const channelName:string = slackData.channel_name //use to retrieve sponsor Firebase doc
    const userID:string = slackData.user_id
    const userName:string = slackData.user_name

    //Retrieve Firebase data for this channel
    const snapshot = await admin.firestore().doc(`queue/${channelName}`).get()
    const fbData = snapshot.data()
    console.log(fbData)

    //Construct users array
    const userArray = fbData?.users
    // if the queue is empty or null, do not attempt to process and return
    if (!userArray || !userArray.length) {
      response.send(`leavequeue: The ${channelName} queue is empty! 🐻`)
    }

    //Filter out and remove user from the queue and update Firebase
    const filteredUsers = userArray.filter((user: { userID: string }) => user.userID !== userID)
    await admin.firestore().doc(`queue/${channelName}`).update({
      users: filteredUsers
    })

    //Construct queue status string and send response to Slack
    let responseMessage:string = `leavequeue: ${userName}, you have left the ${channelName} queue 🐻`
    response.send(responseMessage)

} catch (error) {
   //Handle error
   console.log(error)
   response.status(200).send("GrizzBot is not trained to work in this channel 🐻")
}
})

