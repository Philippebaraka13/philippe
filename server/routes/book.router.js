const express = require('express');
const router = express.Router();
const pool = require('./pool/pool.js');


const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});


router.get('/', (req,res) =>{
    const queryText =`SELECT * FROM "books" ORDER BY "title" ASC;`
    pool.query(queryText)
    .then( result =>{
        res.send(result.rows);
    })
    .catch(error => {
        console.log('Error', error);
        res.sendStatus(500)
    })
});
// add users
// router.post('/', (req,res) =>{
//     console.log(req.body);
//     const inserUserquery = 
// })

router.post('/', (req, res) =>{
    console.log(req.body);

    const insertBookquery =`INSERT INTO "books ("title", "description", "date") VALUES ($1, $2, $3) RETURNING "id";`
    pool.query(insertBookquery, [req.body.title, req.body.description, req.body.date])
    .then(result =>{
        console.log('new book Id:', result[0].id);
        const createBookId = result.rows[0].id

        const insertInvitation =`INSERT INTO "invitation" ("user_id", "book_id") VALUES ($1, $2);`
        pool.query(insertInvitation, [createBookId, req.body.book_id])
        .then(result =>{
            res.sendStatus(201);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500)
        })
    }).catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
})

module.exports = router;
