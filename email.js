// const FormData = require('form-data');
// const Mailgun = require('mailgun.js');

// const mailgun = new Mailgun(FormData);

// const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY || '87a1701210728b1cbef54975c0f58006-4f207195-91c8d2a8' });

// mg.messages.create('sandbox5260d368e46e424ea580450781456a2d.mailgun.org', {
//   from: "yooo<kamokamophilippe12@gmail.com>",
//   to: ["kamokamophilippe13@gmail.com"],
//   subject: "Hello",
//   text: "Testing some Mailgun awesomness!",
//   html: "<h1>Testing some Mailgun awesomness!</h1>"
// })
//   .then(msg => console.log(msg)) // logs response data
//   .catch(err => console.error(err)); // logs any error

// // const { TextArea } = Input;
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('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');

// // const [form] = Form.useForm();
// const onComplete = (fields) => {
//     const message = {
//         to: 'jaryd@harvestprofit.com',
//         from: fields.email,
//         subject: fields.subject,
//         html: `
//         <p><strong>Name:</strong> ${fields.name}</p>
//         <p>${fields.message}</p>`
//     }
//     console.log('jnhfdxghjhgyftdgyh');;
//     sgMail
//         .send(message)
//         .then(() => {
//             console.log('Email sent!');
//         })
//         .catch((err) => {
//             console.log('error', err);
//             console.log(err.response.body)
//         })
// }
// onComplete({ name: 'PFF', message: 'message', email: 'kamokamophilippe13@gmail.com', subject: 'break' });



// const date = new Date();
// const dat = new Date('2022-07-17T01:51:15.553Z');
// const diff = Math.abs(date - dat);
//         console.log(diff);
// console.log(date.toString());
// console.log(date.getMonth()+3);
// console.log(date.getFullYear());
// console.log(date.getHours());


// function getDayDiff(startDate, endDate) {
//   const msInDay = 24 * 60 * 60 * 1000;

//   return Math.round(
//     Math.abs(endDate - startDate) / msInDay
//   );
// }

// // 👇️ 10
// console.log("days",
//   getDayDiff(new Date(), new Date('2021-01-27'))
// );

const startDate = new Date();
const endDate = new Date('2021-01-27');
const msInDay = 24 * 60 * 60 * 1000;
const math = Math.round(
  Math.abs(endDate - startDate) / msInDay );
console.log("dayessss",math);