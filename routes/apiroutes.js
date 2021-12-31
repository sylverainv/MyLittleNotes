// Dependencies
const router = require('express').Router();

const saveData = require('../db/saveData');

// GET request
app.get('/api/notes', function (req, res) {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST request
app.post('/api/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// POST request
app.post('/api/notes', (req, res) => {
    saveData
        .saveNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});
// Bonus - DELETE request
app.delete('/api/notes/:id', function (req, res) {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});


module.exports = router;
