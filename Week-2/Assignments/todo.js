/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
  const express = require('express');
  const bodyParser = require('body-parser');
  const fs = require("fs")
  const path = require('path')
  const cors= require('cors')
  const port = 3000
  
  const app = express();
  const dict = [] 
  const data = JSON.parse(fs.readFileSync('todo.txt'))
  app.use(bodyParser.json());
  app.use(cors())


app.get('/todos',(req,res)=>{
    res.send(data)
})


app.get('/todos/:id',(req,res)=>{
    const todo = data.find(u => u.id===Number(req.params.id))
    console.log(todo)
    res.send(todo)
})


app.post('/todos/',(req,res)=>{
    const ToDo = {
        id : Math.floor(Math.random()*1000),
        title : req.body.title,
        description: req.body.description
    }

    dict.push(ToDo)
    const jsonData = JSON.stringify(dict, null, 2); // Pretty print with indentation
    fs.appendFileSync('todo.txt',jsonData) 
    console.log(dict)
    res.json(dict)
})


app.put('/todos/:id',(req,res)=>{
    const targetindex = data.findIndex(u =>{
        return u.id === Number(req.params.id)
    })
    const new_data = {
        "id" : data[targetindex].id,
        "title" : req.body.title,
        "description": data[targetindex].description
    }

    data[targetindex] =new_data
    const jsonData = JSON.stringify(data,null,2)
    fs.appendFileSync('todo.txt',jsonData)
    console.log(data[targetindex])
    res.json(data)
    
})
app.delete('/todos/:id')

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(port, ()=>{
    console.log("listening to port: " + port)
})
  
  module.exports = app;