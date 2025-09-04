const express = require('express');
const multer = require('multer');
const Book = require('../models/bookSchema');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null,` ${Date.now()} + ${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

router.post('/create', upload.single('pdf'), async (req, res) => {
    const { image, title, author, description, price, link} = req.body;
    const pdf = req.file ? req.file.path : null;

    try{
        const newBook = new Book({
            image, title, author, description, price, pdf, link
        });
        await newBook.save();
        res.status(201).json({ message: 'Book created successfully', book: newBook });
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

router.get('/all', async (req, res) => {
    try{
        const books = await Book.find();
        res.json(books);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const book = await Book.findById(id);
        if(!book){
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});



module.exports = router;
