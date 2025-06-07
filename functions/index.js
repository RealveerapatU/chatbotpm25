const express = require("express");
const cors = require("cors");
const axios = require("axios");

const template = require("./template");
const util = require("./util");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/webhook", async (req, res) => {
  console.log("Webhook Body:", req.body);

  if (!req.body.events) {
    return res.status(200).send("Request from Browser");
  }

  const event = req.body.events[0];
  if (!event) {
    return res.status(200).send("Request from LINE OA Manager");
  }

  try {
    if (event.type === "message") {
      switch (event.message.type) {
        case "text":
          if (event.message.text === "Hello") {
            await util.reply(event.replyToken, template.text);
          } else {
            await util.postToDialogflow(req);
          }
          break;
        case "sticker":
          await util.reply(event.replyToken, template.sticker);
          break;
        case "image":
          await util.reply(event.replyToken, template.image);
          break;
      }
    } else if (event.type === "beacon") {
      const userId = event.source.userId;
      const profile = await util.getUserProfile(userId);

      switch (event.beacon.type) {
        case "enter":
          const msg = template.enter(profile);
          await util.reply(event.replyToken, [msg]);
          break;
        case "banner":
          await util.reply(event.replyToken, template.text);
          break;
        case "stay":
          await util.reply(event.replyToken, template.textinput("stay"));
          break;
      }
    } else if (event.type === "postback") {
      if (event.postback.data === "confirm") {
        const userId = event.source.userId;
        const profile = await util.getUserProfile(userId);
        await util.updateStatus(profile);
        await util.reply(event.replyToken, template.textConfirm);
      }
    } else {
      await util.reply(event.replyToken, template.flex);
    }

    res.status(200).send("OK");
  } catch (error) {
    console.error("Error handling event:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/linkUserMenu", async (req, res) => {
  console.log("LinkUserMenu Body:", req.body);

  if (!req.body) {
    return res.status(200).send("Request from Browser");
  }

  try {
    const { userId, richmenuId } = req.body;
    await util.richMenuLink(userId, richmenuId);
    res.status(200).send("Rich menu linked");
  } catch (error) {
    console.error("Error linking menu:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Preflight CORS for /linkUserMenu
app.options("/linkUserMenu", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
  res.status(204).send("");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
