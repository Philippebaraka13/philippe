require("dotenv").config();

var cron = require('node-cron');
// calculate the deadline with the current date in days 
const startDate = new Date();
console.log(startDate)
const endDate = new Date('2022-08-30');
const msInDay = 24 * 60 * 60 * 1000;
const math = Math.round(
  Math.abs(startDate - endDate) / msInDay );
console.log("dayessss",math);
// if the days are more than 90(3months) send this message 
if(math === 90) {
// schedule will fire At 09:00 in every 3rd month (0 9 * * MON)
    cron.schedule('* * * * *', () => {
        const sendGridMail = require("@sendgrid/mail");
        sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
        const message = {
            to: "kamokamophilippe13@gmail.com",
            from: "philippebaraka13@gmail.com",
            subject: "hello",
            text: "Test message",
            html:[dsdnsd],
        };
        sendGridMail.send(message)
        .then(() => {
            console.log("Email sent")
        })
        .catch((error) => {
            console.log(error);
        })
    });
    // if deadline is egal to 30 days send this at 9 am (0 9 * * MON)
} else if(math == 30){
    cron.schedule('* * * * *', () => {
        const sendGridMail = require("@sendgrid/mail");
        sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
        const message = {
            to: "kamokamophilippe13@gmail.com",
            from: "philippebaraka13@gmail.com",
            subject: "hello",
            text: "Test message",
            html: "<strong>Message sent.</strong>",
        };
        sendGridMail.send(message)
        .then(() => {
            console.log("Email sent")
        })
        .catch((error) => {
            console.log(error);
        })
    });
   
    // deadline is due sent this at 9am ((0 9 * * MON))
} else if (math === 1){
    cron.schedule('* * * * *', () => {
        const sendGridMail = require("@sendgrid/mail");
        sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
        const message = {
            to: "kamokamophilippe13@gmail.com",
            from: "philippebaraka13@gmail.com",
            subject: "hello",
            text: "Test message",
            html:[sdmsmsd],
        };
        sendGridMail.send(message)
        .then(() => {
            console.log("Email sent")
        })
        .catch((error) => {
            console.log(error);
        })
    });

} else {
    console.log("not send yet")
}

//to send multi emails just add a , and add others email 
// const message = {
//     to: "kamokamophilippe13@gmail.com",
//     from: "philippebaraka13@gmail.com",
//     subject: "hello",
//     text: "Test message",
//     html: "<strong>Message sent.</strong>",
// };


// sendGridMail.send(message)
    // .then(() => {
    //     console.log("Email sent")
    // })
    // .catch((error) => {
    //     console.log(error);
    // })
