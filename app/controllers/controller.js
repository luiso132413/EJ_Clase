

const db = require('../config/db.config.js');
const Book = db.Book;

exports.create = (req, res) => {
    let book = {};

    try{
        // Building Song object from upoading request's body
        book.name_book = req.body.name_book;
        book.editorial = req.body.editorial;
        book.author = req.body.author;
        book.gender = req.body.gender;
        book.authorcontry = req.body.authorcontry;
        book.pages = req.body.pages;
        book.yearpublication = req.body.yearpublication;
        book.prices = parseFloat(req.body.prices);

    
        // Save to MySQL database
        Book.create(book).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Upload Successfully a Book with id = " + result.id_b,
                book: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.retrieveAllBook = (req, res) => {
    // find all Customer information from 
    Book.findAll()
        .then(bookInfos => {
            res.status(200).json({
                message: "Get all Books Infos Successfully!",
                book: bookInfos
            });
        })
        . catch(error => {
          // log on console
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        });
}

exports.getBookById = (req, res) => {
  // find all Customer information from 
  let bookId = req.params.id_b;
  Book.findByPk(bookId)
      .then(book => {
          res.status(200).json({
              message: " Successfully Get a Book with id = " + bookId,
              book: book
          });
      })
      . catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
}
 

exports.updateById = async (req, res) => {
    try{
        let bookId = req.params.id_b;
        let book = await Book.findByPk(bookId);
    
        if(!book){
            // return a response to client
            res.status(404).json({
                message: "Not Found for updating a book with id = " + bookId,
                book: "",
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                name_book: req.body.name,
                editorial: req.body.editorial,
                author: req.body.author,
                gender: req.body.gender,
                authorcontry: req.body.authorcontry,
                pages: req.body.pages,
                yearpublication: req.body.yearpublication,
                prices: parseFloat(req.body.prices)
            }
            let result = await Book.update(updatedObject, {returning: true, where: {id_b: bookId}});
            
            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Can not update a book with id = " + req.params.id_b,
                    error: "Can NOT Updated",
                });
            }

            res.status(200).json({
                message: "Update successfully a Book with id = " + bookId,
                book: updatedObject,
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Can not update a Book with id = " + req.params.id_b,
            error: error.message
        });
    }
}

exports.deleteById = async (req, res) => {
    try{
        let bookId = req.params.id_b;
        let book = await Book.findByPk(bookId);

        if(!book){
            res.status(404).json({
                message: "Does Not exist a Book with id = " + bookId,
                error: "404",
            });
        } else {
            await book.destroy();
            res.status(200).json({
                message: "Delete Successfully a Book with id = " + bookId,
                book: book,
            });
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a Book with id = " + req.params.id_b,
            error: error.message,
        });
    }
}