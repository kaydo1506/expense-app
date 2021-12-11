// Express is a fantastic tool for creating web server with node
const path = require('path');
// import express using 'require' which is the node method of importing something
const express = require('express');
const app = express();
// express.js is going to serve up everything in pur public directory
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// starting up the server
app.listen(port, () => {
    console.log('Server is up!');
});
