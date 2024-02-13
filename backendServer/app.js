// Include all needed modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

// Mongo database url
const url = "mongodb+srv://miunStudentAnton:studentCloud@dt190g.lpdi2.mongodb.net/NHMP"

// Mongo database connection
mongoose.connect(url, { useNewUrlParser: true });

// Create an Express application
const app = express();

app.use(cors()); // CORS-enabled for all origins!

app.use(express.json())

app.use(express.urlencoded({extended: true}))
// Tell express to use express.static, a built-in middleware in Express,
// that serves static files (like images, html, css, js) located in the 
// specified folder (in our case the folder public).
app.use(express.static(path.join(__dirname, 'public')));

// Define the port the server will accept connections on
const port = process.env.PORT || 3000;
      
// Start the server
app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});

const clothes = require("./routes/clothes");
const cars = require("./routes/cars");
const gear = require("./routes/gear");
const users = require("./routes/users");


app.use('/api/cars', cars);
app.use('/api/clothes', clothes);
app.use('/api/gear', gear);
app.use('/api/users', users);