const mongoose = require("mongoose");


// Create author Schema 
const AuthorSchema = mongoose.Schema({
    id: Number,
    name: String,
    books: [String]
});

const AuthorModel = mongoose.model("author", AuthorSchema);

module.exports = AuthorModel;