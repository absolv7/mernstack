const notesController = {};

const Note = require('../models/Note');

notesController.getNotes = async (request, response) => {
    const notes = await Note.find();
    response.json(notes);
};

notesController.createNote = async (request, response) => {
    const { title, content, date, author } = request.body;
    const note = new Note({
        title,
        content,
        date,
        author
    });
    await note.save();
    response.json('New Note added');
};

notesController.getNote = async (request, response) => {
    const note = await Note.findById(request.params.id);
    response.json(note);
}

notesController.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    res.json('Note Deleted');
}

notesController.updateNote = async (request, response) => {
    const { title, content, duration, date, author } = request.body;
    await Note.findByIdAndUpdate(request.params.id, {
        title,
        content,
        duration,
        author
    });
    response.json('Note Updated');
}

module.exports = notesController;