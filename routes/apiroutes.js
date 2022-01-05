// Dependencies
const router = require('express').Router();
const path = require("path");
const fs = require("fs");
const notes = require("./db/db.json")
const saveData = require('../db/saveData');

const app = express();
const PORT = 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// GET request
app.get('/api/notes', function (req, res) {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST request
app.post('/api/notes', (req, res) => {
    const addNote = req.body;

    console.log(addNote);
  
    notes.push(addNote);
  
    res.json(addNote);
});


// Bonus - DELETE request
app.delete('/notes/:id', function (req, res) {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});


module.exports = router();
