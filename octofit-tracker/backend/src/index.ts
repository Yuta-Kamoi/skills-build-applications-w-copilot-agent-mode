import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './routes/userRoutes';

const app = express();
app.use(express.json());

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit';
const port = Number(process.env.PORT || 8000);

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected to', mongoUri);
    app.listen(port, () => {
      console.log(`Backend server listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker backend running.' });
});

app.use('/api/users', userRouter);
