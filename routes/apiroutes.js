const express = require('express').Router();
const fs = require('fs')


// get all notes
router.get('/api/notes', (_req,res) => {
    saveNotes()
    .then(notes => res.json(notes))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/api/notes',(req,res)=>{
    saveNotes(req.body).then(_notes => res.json({message:"success"}))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
 
});
export default router;
