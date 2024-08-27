
let express = require('express');
let router = express.Router();
 
const book = require('../controllers/controller.js');

router.post('/api/book/create', book.create);
router.get('/api/book/all', book.retrieveAllBook);
router.get('/api/book/onebyid/:id', book.getBookById);
router.put('/api/book/update/:id', book.updateById);
router.delete('/api/book/delete/:id', book.deleteById);

module.exports = router;