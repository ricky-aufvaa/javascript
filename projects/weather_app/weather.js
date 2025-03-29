//weather app which will allow the user to enter any place and the app will fetch the current weather of that place.
//post - body {"place": place_name}

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json())
url = "http://localhost:3000"

function current_weather(place){
    f"https://api.openweathermap.org/data/2.5/weather?q={place}&appid={API key}"
}

app.post('/place',(req,res)=>{
    const place = req.body.place
    console.log(place)
    current_weather = fetch_weather(place)
    res.json(current_weather)
    })

app.listen(port,()=>{
    console.log("listening on port : "+url)
})