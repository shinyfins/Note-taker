//Must install dependancies first npm install or npm i express. Before that do npm init -y

const PORT = process.env.PORT || 3001;

//requires the packages to work!
const fs = require("fs");
const path = require("path");
//must require database so that we can get the notes people wrote
const notes = require("./db/db.json");
const express = require("express");
//This initiates the server
const app = express();

//use this to check the port is on the correct port number 
//use back ticks to console log! 
app.listen(PORT, () => {
    console.log(`notes app now on port ${PORT}!😋🔥🤷‍♀️`);
})