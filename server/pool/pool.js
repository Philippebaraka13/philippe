const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;

const pool = new Pool({
    database: 'book_story',
    host: 'localhost', 
    port: 5432,        
    max: 10,           
    idleTimeoutMillis: 30000 
});


pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;