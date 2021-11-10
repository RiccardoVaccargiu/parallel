const db = require('./db_connect')
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const jobRoutes = require('./api/job')

const app = express()
const port = 5000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(jobRoutes)


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// Avoid node to close on error
process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err);
});