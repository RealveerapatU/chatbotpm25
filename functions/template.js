const text = [
  {
    type: "text",
    text: "สวัสดีครับ",
  },
];

const textinput = (input) => [
  {
    type: "text",
    text: input,
  },
];
const textConfirm = [
  {
    type: "text",
    text: "à¸¢à¸·à¸™à¸¢à¸±à¸™à¸à¸²à¸£à¹€à¸‚à¹‰à¸²à¸£à¹ˆà¸§à¸¡à¸à¸´à¸ˆà¸à¸£à¸£à¸¡à¸‚à¸­à¸‡à¸ªà¸²à¸‚à¸²à¸§à¸´à¸Šà¸²à¸™à¸§à¸±à¸•à¸à¸£à¸£à¸¡à¸”à¸´à¸ˆà¸´à¸—à¸±à¸¥à¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µà¹à¸¥à¹‰à¸§",
  },
];

const sticker = [
  {
    type: "sticker",
    packageId: "446",
    stickerId: "1988",
  },
];

const image = [
  {
    type: "image",
    originalContentUrl:
      "https://developers.line.biz/media/services/messaging-api-thumb0.png",
    previewImageUrl:
      "https://developers.line.biz/media/services/messaging-api-thumb0.png",
  },
];

const flex = [
  {
    type: "bubble",
    hero: {
      type: "image",
      url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
      action: {
        type: "uri",
        uri: "http://linecorp.com/",
      },
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "Brown Cafe",
          weight: "bold",
          size: "xl",
        },
        {
          type: "box",
          layout: "baseline",
          margin: "md",
          contents: [
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png",
            },
            {
              type: "icon",
              size: "sm",
              url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png",
            },
            {
              type: "text",
              text: "4.0",
              size: "sm",
              color: "#999999",
              margin: "md",
              flex: 0,
            },
          ],
        },
        {
          type: "box",
          layout: "vertical",
          margin: "lg",
          spacing: "sm",
          contents: [
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "Place",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 1,
                },
                {
                  type: "text",
                  text: "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5,
                },
              ],
            },
            {
              type: "box",
              layout: "baseline",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "Time",
                  color: "#aaaaaa",
                  size: "sm",
                  flex: 1,
                },
                {
                  type: "text",
                  text: "10:00 - 23:00",
                  wrap: true,
                  color: "#666666",
                  size: "sm",
                  flex: 5,
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "link",
          height: "sm",
          action: {
            type: "uri",
            label: "CALL",
            uri: "https://linecorp.com",
          },
        },
        {
          type: "button",
          style: "link",
          height: "sm",
          action: {
            type: "uri",
            label: "WEBSITE",
            uri: "https://linecorp.com",
          },
        },
        {
          type: "box",
          layout: "vertical",
          contents: [],
          margin: "sm",
        },
      ],
      flex: 0,
    },
  },
];

const enter = (profile) => ({
  type: "flex",
  altText: "LINE Beacon!",
  contents: {
    type: "bubble",
    hero: {
      type: "image",
      url: `${profile.pictureUrl}`,
      size: "full",
      aspectRatio: "20:13",
      aspectMode: "cover",
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "à¸ªà¸²à¸‚à¸²à¸§à¸´à¸Šà¸²à¸™à¸§à¸±à¸•à¸à¸£à¸£à¸¡à¸”à¸´à¸ˆà¸´à¸—à¸±à¸¥à¹€à¸—à¸„à¹‚à¸™à¹‚à¸¥à¸¢à¸µ",
          weight: "bold",
          size: "md",
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: `à¸¢à¸´à¸™à¸”à¸µà¸•à¹‰à¸­à¸™à¸£à¸±à¸šà¸„à¸¸à¸“ ${profile.displayName}!`,
              size: "md",
              align: "center",
            },
            {
              type: "text",
              text: "à¸à¸”à¸›à¸¸à¹ˆà¸¡à¹€à¸žà¸·à¹ˆà¸­à¸¢à¸·à¸™à¸¢à¸±à¸™à¸à¸²à¸£à¹€à¸‚à¹‰à¸²à¸£à¹ˆà¸§à¸¡à¸à¸´à¸ˆà¸à¸£à¸£à¸¡",
              size: "md",
              align: "center",
            },
          ],
        },
      ],
    },
    footer: {
      type: "box",
      layout: "vertical",
      spacing: "sm",
      contents: [
        {
          type: "button",
          style: "link",
          height: "sm",
          action: {
            type: "postback",
            label: "à¸¢à¸·à¸™à¸¢à¸±à¸™",
            data: "confirm",
          },
        },
      ],
      flex: 0,
    },
  },
});

module.exports = { text, sticker, image, flex, enter, textConfirm, textinput };