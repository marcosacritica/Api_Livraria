const express = require('express');
const router = express.Router();
const { Book } = require('../models');

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// Add other routes for books as needed

module.exports = router;
