const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

const authorRoutes = require('./routes/authorRoutes');
const genreRoutes = require('./routes/genreRoutes');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Book Management API');
});

app.use('/authors', authorRoutes);
app.use('/genres', genreRoutes);
app.use('/books', bookRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
