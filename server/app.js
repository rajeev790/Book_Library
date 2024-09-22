const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const sequelize = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/recommendations', recommendationRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');
    await sequelize.sync(); // Ensure database schema is in sync
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

startServer();
