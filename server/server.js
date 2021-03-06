const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const bookRouter = require('./routes/book.router')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/book', bookRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, ()  => {
    console.log('Listening on port: ', PORT);
});