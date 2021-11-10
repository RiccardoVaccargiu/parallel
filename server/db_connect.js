const mysql = require('mysql')

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database: 'jobs_sorter'
})

  db.connect((err) => {
    if(err){
        throw err
    }
    else{
        console.log("db connect: SUCCESS")
    }
  })

module.exports = db