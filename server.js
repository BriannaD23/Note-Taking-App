const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded());
const port = 3000

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" })

//Endpoints to server the HTML
app.get('/', (req, res) => {
  res.sendFile("public/index.html", {root:__dirname})
})


app.get('/login', (req, res) => {
  res.sendFile('public/login.html', {root:__dirname})
})

app.get('/signup', (req, res) => {
  res.sendFile('public/signup.html', {root:__dirname})
})

// Endpoints for APIs
app.post('/getnotes', (req, res) => {
  const {userToken } = req.body
  res.sendFile('public/signup.html', {root:__dirname})
})

app.post('/login', (req, res) => {
  const {userToken} = req.body
  res.sendFile('public/signup.html', {root:__dirname})
})

app.post('/signup', (req, res) => {
  const {userToken} = req.body
  res.sendFile('public/signup.html', {root:__dirname})
})

app.post('/addnote', (req, res) => {
  const {userToken} = req.body
  res.sendFile('public/signup.html', {root:__dirname})
})

app.post('/deletenote', (req, res) => {
  const {userToken} = req.body
  res.sendFile('public/signup.html', {root:__dirname})
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost${3000}`)
})