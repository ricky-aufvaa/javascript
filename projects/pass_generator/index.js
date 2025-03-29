const express= require("express")
const cors= require("cors")
const app = express()
app.use(cors())
port = 3000

function make_password(){
    number = [0,1,2,3,4,5,6,7,8,9]
    charac= ["!","@","#","$"]
    password = []
    for(i=0;i<12;i++){
        password.push(number[Math.floor(Math.random()*(9+1))])
        password.push(charac[Math.floor(Math.random()*(2+1))])
    }
    return password
}

app.get('/generate',(req,res)=>{
    password  =make_password() 
    pass = password.join('')
    console.log(pass)
    body = {
        "password":pass
    }
    res.send(body)
})

app.listen(port,()=>{
    console.log("http:localhost:3000")
})