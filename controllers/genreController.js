const { Genre, Book } = require('../models');

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll({ include: Book });
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id, { include: Book });
    if (genre) {
      res.json(genre);
    } else {
      res.status(404).json({ error: 'Genre not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body);
    res.status(201).json(genre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id);
    if (genre) {
      await genre.update(req.body);
      res.json(genre);
    } else {
      res.status(404).json({ error: 'Genre not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByPk(req.params.id);
    if (genre) {
      await genre.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Genre not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre
};
