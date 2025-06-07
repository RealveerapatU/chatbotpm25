const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
require('dotenv').config();
const CHANNEL_ACCESS_TOKEN =process.env.CHANNEL_ACCESS_TOKEN;


const LINE_MESSAGING_API = "https://api.line.me/v2/bot";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
};

class Utils {
  async getUserProfile(userId) {
    try {
      const profile = await axios({
        method: "get",
        url: `${LINE_MESSAGING_API}/profile/${userId}`,
        headers: LINE_HEADER,
      });
      return profile.data;
    } catch (error) {
      functions.logger.error("Utils-getUserProfile", error.message);
      return null;
    }
  }

  async reply(token, payload) {
    try {
      await axios({
        method: "post",
        url: `${LINE_MESSAGING_API}/message/reply`,
        headers: LINE_HEADER,
        data: {
          replyToken: token,
          messages: payload,
        },
      });
      return true;
    } catch (error) {
      functions.logger.error("Utils-reply", error.message);
      return false;
    }
  }

  async postToDialogflow(request) {
    request.headers.host = "dialogflow.cloud.google.com";
    try {
      await axios({
        method: "post",
        //  url: `https://bots.dialogflow.com/line/e4b3b4d3-b1ab-42e4-967c-b107ccb05413/webhook`,
        url: `https://dialogflow.googleapis.com/v1/integrations/line/webhook/e4b3b4d3-b1ab-42e4-967c-b107ccb05413`,
        headers: request.headers,
        data: JSON.stringify(request.body),
      });
      return true;
    } catch (error) {
      functions.logger.error("Post-to-Dialogflow", error.message);
      return false;
    }
  }

  async richMenuLink(userId, richmenuId) {
    const RICH_MENU_ID = richmenuId;
    try {
      await axios({
        method: "post",
        url: `${LINE_MESSAGING_API}/user/${userId}/richmenu/${RICH_MENU_ID}`,
        headers: LINE_HEADER,
      });
      return true;
    } catch (error) {
      functions.logger.error("Utils-richMenuLink", error.message);
      return false;
    }
  }

  async updateStatus(profile) {
    const activityRef = admin
      .firestore()
      .collection("activitytransaction")
      .doc(`${profile.userId}`);
    try {
      const doc = await activityRef.get();
      if (doc.exists) {
        let data = doc.data();
        data.place[0].status = true;
        await activityRef.set(data);
      }
      return true;
    } catch (error) {
      functions.logger.error("Utils-updateStatus", error.message);
      return false;
    }
  }
}

module.exports = new Utils();