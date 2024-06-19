const { Author, Book } = require('../models');

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll({ include: Book });
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id, { include: Book });
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      await author.update(req.body);
      res.json(author);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      await author.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor
};
