//requirement for our project

// we are a book management company 

// Books = ISBN , title , pub-date , language , num-pages , author[] , category[]

// Authors = id, name , books[]

// Publication = id , name , books[]

// We have to design and code an API over this .

// 1. BOOKS
// we need an API :-
// To get all the books - done
// To get specific books on isbn- done
// To get a list of books based on category- done
// To get a list of books based on languages- done 

// 2. AUTHORS 
// We need an API :- 
// To get all the authors - done
// To get a list of author based on book- done
// To get a specific author based on id- done m

// 3. PUBLICATIONS
// We need an API :-
// To get all the publications- done
// To get a specific publication based on id-done mine
// To get a list of publications based on a book- mine
// To get a list of publications based on name 

//#############POST REQUEST##############

// 1. add new book - Done
// 2. add new author 
// 3. add new publication

//##################PUT##################

//Update book details if author is changed- update or add new publications

//#################DELETE################
// 1. Delete a book
// 2. Delete a author from book
// 3. Delete author from book and related book from author

// Schema - Blueprint of how data has to be constructed 
// MongoDB is schema-less
// Mongoose has Schema 
// Mongoose - Validation , relationship with other data 
// Model - document model of MongoDB
// Schema - Model - use time