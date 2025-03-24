/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
let path = require("path")
let fs = require("fs")
let express  = require("express")
let app = express()
port = 3000
const pathname= path.join(__dirname,".files/") 

function list_files(){
    dir = fs.readdirSync(pathname)
    return dir
}

function handle_file_request(req,res){
    list =list_files()
    console.log(list)
    res.send(list)
}

app.get('/files',handle_file_request)

// function give_content(filename){
//     filePath= path.join(pathname,filename)
//     content = fs.readFileSync(filePath, "utf8")
//     return content

// }
function give_content(filename,res){
    filePath= path.join(pathname,filename)
    fs.readFile(filePath, "utf8", (err, data)=> {
    if (err) {
        console.error("Error reading file:", err);
        res.status(500).send("Error reading file");
        return;
    }
    res.status(200).send(data);
});
}
function handle_particular_file(req,res){
    filename = req.params.filename
    // conso
    content = give_content(filename,res)
    console.log(content)
    res.send(content)
}

app.get('/file/:filename',handle_particular_file)

    
function print_port(){
    console.log("the server is listening on the port: "+ port)
}
app.listen(port,print_port)