import app from './app';
import sequelize from './config/database';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log('Connected to PostgreSQL');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

startServer();
