const mongoose = require('mongoose');

const connection = mongoose.createConnection(
    `mongodb+srv://myuser:pass1234@cluster0.9jlks9a.mongodb.net/ToDoDB?appName=Cluster0`
)
.on('open', () => { console.log("MongoDB Connected"); })
.on('error', (err) => { console.log("MongoDB Connection error", err); });

module.exports = connection;