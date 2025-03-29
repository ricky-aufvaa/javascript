const express = require("express")
const cors= require("cors")
const bodyParser = require("body-parser")
const app = express()
const path = require("path")
app.use(cors())
app.use(bodyParser())
const  port = 3000

path_to_quiz = path.join(__dirname,"quiz.html") 
path_to_home = path.join(__dirname,"home.html") 
console.log(path_to_home)

app.get('/',(req,res)=>{
    res.sendFile(path_to_home)
})


app.get('/quiz',(req,res)=>{
    res.sendFile(path_to_quiz)
})

app.post('/quiz',(req,res)=>{
    //extract value of the answer
    let answer = req.body(answer)
    verify_answer()
})








app.listen(port,()=>{
    console.log("http://localhost:"+port)
})
