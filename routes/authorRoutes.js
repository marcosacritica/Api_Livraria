const express = require('express');
const router = express.Router();
const { Author } = require('../models');

// Get all authors
router.get('/', async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch authors' });
  }
});

// Add other routes for authors as needed

module.exports = router;
