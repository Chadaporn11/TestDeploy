// require('dotenv').config();

// // Server
// const express = require('express');
// const cors = require('cors');
// const app = express();
// app.use(cors());
// const server = require('http').createServer(app);

// // Config
// const port = process.env.SERVER_PORT;
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
// }

// server.listen(port, () => {
//     console.log(`Server running at localhost:${port}`);
// });

const express = require('express');
const { google } = require('googleapis')
require('dotenv').config()
const app = express();

const scopes = "https://www.googleapis.com/auth/analytics.readonly";

const jwt = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes
);

const view_id = "352577750";

// async function getViews() {
//     try {
//         await jwt.authorize();

//         const response = await google.analytics("v3").data.ga.get({
//             auth: jwt,
//             ids: "ga:" + view_id,
//             "start-date": "30daysAgo",
//             "end-date": "today",
//             metrics: "ga:pageviews",
//         });

//         console.log(response);

//     } catch (err) {
//         console.log(err);
//     }
// };
// getViews();

async function getRealTime() {
    try {
        await jwt.authorize();

        const response = await google.analytics("v4").data.realtime.get({
            auth: jwt,
            ids: "ga:" + view_id,
            "start-date": "2023-02-07",
            "end-date": "today",
            metrics: "rt:activeUsers",
        });

        console.log(response);

    } catch (err) {
        console.log(err);
    }
};
getRealTime()

// async function getTopPosts() {
//     try {
//         await jwt.authorize();

//         const response = await google.analytics("v3").data.ga.get({
//             auth: jwt,
//             ids: "ga:" + view_id,
//             "start-date": "2019-01-01",
//             "end-date": "today",
//             dimensions: "ga:pagePath,ga:pageTitle",
//             metrics: "ga:pageviews",
//             sort: "-ga:pageviews",
//             "max-results": "10",
//             filters: "ga:medium==organic",
//         });

//         console.log(response);
//     } catch (err) {
//         console.log(err);
//     }
// };
// getTopPosts()
app.listen(5000, () => {
    console.log('Run Server 500 Success...');
})