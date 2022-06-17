//Must install dependancies first npm install or npm i express. Before that do npm init -y

const PORT = process.env.PORT || 3003;

//requires the packages to work!
const fs = require("fs");
const path = require("path");
//must require database so that we can get the notes people wrote
const notes = require("./db/db.json");
const express = require("express");
//This initiates the server
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//ROUTES////

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req,res) => {
    res.json(notes.slice(1));
});


///END OF ROUTES HERE//////

function createNewNote(body, notesArray) {
    const newNote = body;

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
}

app.post('/api/notes', (req, res) => {
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

//use this to check the port is on the correct port number 
//use back ticks to console log! 
app.listen(PORT, () => {
    console.log(`notes app now on port ${PORT}!😋🔥🤷‍♀️`);
})