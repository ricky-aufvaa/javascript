const express = require('express')

let app = express()

function handleRequests(req,res){
    res.send("hello world")
}

app.get('/',handleRequests)

port = 3000

function started(){
    console.log('example app listening on port '+ port)
}
app.listen(port,started)