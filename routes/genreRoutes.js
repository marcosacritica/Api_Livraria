const express = require('express');
const router = express.Router();
const { Genre } = require('../models');

// Get all genres
router.get('/', async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch genres' });
  }
});

// Add other routes for genres as needed

module.exports = router;
