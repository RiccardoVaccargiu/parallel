const mysql = require('mysql')

const connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root"
})

connection.connect(function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("db connect: SUCCESS")
    }
})