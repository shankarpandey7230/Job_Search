import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/dbconfig.js';
const app = express();
dotenv.config({});

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'https//localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));
const PORT = process.env.PORT || 8000;

app.get('/home', (req, res) => {
  return res.status(200).json({
    message: 'from backend',
    success: true,
  });
});
app.listen(PORT, (req, res) => {
  connectDB();
  console.log(`Server is listening at port ${PORT}`);
});
