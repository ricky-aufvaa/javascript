// will be trying various request and response types
// request types - query params, headers,body
// response types - status code , html,text, json

// request types
const bodyParser = require("body-parser")
const express = require("express")
app = express()
port = 3000

function get_name(name){
    message = "Hi "+name + ", welcome to my page"
    return message
}
app.use(bodyParser.json())

function handleRequest(req,res){
    // naam = req.query.name   //1. query params
    // naam = req.headers.name     //2. headers
    naam = req.body.name     //3. body 
    welcome = get_name(naam)
    res.send(welcome)

}

app.post('/',handleRequest)

// responses: - 

function handleResponse(req,res){
    
//   res.status(403)
//   res.send("hello")
    person = {
        name : "sarabjot",
        age : 24
    }
    res.json(person)
    
}
app.get('/responses',handleResponse)


function print_port(){
    console.log("server listening to "+ port)
}
app.listen(port,print_port)

