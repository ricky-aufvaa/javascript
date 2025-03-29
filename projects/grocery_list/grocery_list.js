const express = require("express")
const path = require("path")
const fs  = require("fs")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
const cors = require("cors")
app.use(cors())


const list = []
// list = [{item: item1, due_date: date},{item:item2, due_date: date2}]
json_path= path.join(__dirname,"grocery_list.json")
data  =JSON.parse(fs.readFileSync(json_path))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/list',(req,res)=>{
    res.json(data)
})   //list all the items in the grocery list

app.get('/list/:name',(req,res)=>{
    const item = data.find(u=>u.item === req.params.name) 
    console.log(item)
    res.json(item)
})

//post - 1. take the data from the client in the form of body
// 2. store it into the grocerylist.json
app.post('/list',(req,res)=>{
    const new_item = {
        "item": req.body.item,
        "due_date": req.body.due_date
    }
    list.push(new_item)
    list_content = JSON.stringify(list)
    fs.writeFileSync("grocery_list.json", list_content);
    console.log(list)
    res.json(list)

    // fs.wr
}) //adds items to the grocery list



app.put('/list/:item',(req,res)=>{ //update the item in the list
//find the item, then updatae the item
    const item_index = data.findIndex(a=>a.item ===req.params.item)
    const new_data = {
        "item" : req.body.item,
        "due_date": req.body.due_date
    }
    data[item_index] = new_data
    new_list = JSON.stringify(data)
    fs.writeFileSync('grocery_list.json',new_list)
    res.json(data)
    
})

app.delete('/list')   //delete an item from the list


app.listen(3000, ()=>{
    console.log("port is : "+'3000')
})