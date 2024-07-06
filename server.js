const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');


// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoints to serve the HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Endpoints for APIs
app.post('/getnotes', (req, res) => {
  const { userToken } = req.body;
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.post('/login', (req, res) => {
  const { userToken } = req.body;
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.post('/signup', (req, res) => {
  const { userToken } = req.body;
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.post('/addnote', (req, res) => {
  const { userToken } = req.body;
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.post('/deletenote', (req, res) => {
  const { userToken } = req.body;
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Start the server
const port = process.env.port|| 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
