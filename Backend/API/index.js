const router = require('express').Router();
const {createNewNote, updateDb} = require("../../Utils/common");
const { v4: uuidv4 } = require('uuid');
const notes = require("../../Develop/db/db.json");


router.get("/notes", (req, res) => {
    let response = notes;
    res.json(response);
  });

  router.post("/notes", ({body}, res) => {
    body.id = uuidv4();
   console.log( body)
    const newNote = createNewNote(body,notes);
    res.json(newNote);
  });  

  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    updateDb(params, notes);
    res.redirect('');
  });

  module.exports = router;
