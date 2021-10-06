const mongoose = require("mongoose");


// Create book Schema 
const BookSchema = mongoose.Schema({
    ISBN: String,
    title: String,
    pubDate: String,
    language: String,
    numPage: Number,
    author: [Number],
    publications: [Number],
    category: [String]
});
//books= database name
const BookModel = mongoose.model("books", BookSchema);

module.exports = BookModel;  