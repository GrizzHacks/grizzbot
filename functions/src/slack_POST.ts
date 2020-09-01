import * as functions from 'firebase-functions';


// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const slackPOST = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
  response.send({
      key: "value",
      key2: "value2"
  });

});


