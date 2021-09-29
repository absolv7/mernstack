const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost/merndatabase';

mongoose.connect(URI, {});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});