// src/server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
