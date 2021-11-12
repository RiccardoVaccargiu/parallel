const express = require('express')
const cors = require('cors')
require('dotenv').config({path: '../.env'}) // dotenv: i need to define a path in order to make .env accessible from server
const jobRoutes = require('./api/job')

const app = express()
const port = process.env.ELECTRON_SERVER_PORT

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