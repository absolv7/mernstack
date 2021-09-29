const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT ? process.env.PORT : 3000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/api/notes', require('./routes/notes.routes'));
app.use('/api/users', require('./routes/users.routes'));

module.exports = app;