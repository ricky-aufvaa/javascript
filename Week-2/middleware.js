const express = require("express")
app = express()
port = 3000


function middleware1(req,res,next){
    counter = req.headers.counter
    if(counter>40){
        next()
    }
    else{
        res.send("error, counter is less than 4")
    }
}
app.use(middleware1)

function calculate(req,res){
    
    sum = 0
    for(i=1;i<=n;i++){
        sum+=i

    }
    return sum
}

function handleQuery(req,res){
    n = req.headers.counter 
    sum = calculate(n)
    console.log("the summ is "+ sum)
    res.send("this is the sum "+sum)
}

app.post('/sum', handleQuery)



function show_port(req,res){
    console.log("The server is listening to port "+ port)
}

app.listen(port, show_port)