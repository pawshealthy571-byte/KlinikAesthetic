import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10
});
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? false }));
app.use(express.json());
app.get('/api/health', async (_req, res) => {
  try {
    const [rows] = await db.query('SELECT CURRENT_TIMESTAMP AS database_time');
    res.json({ status: 'ok', database: 'connected', databaseTime: rows[0].database_time });
  } catch (error) {
    console.error('Health check failed:', error.message);
    res.status(503).json({ status: 'error', database: 'unavailable' });
  }
});
const port = Number(process.env.PORT || 3000);
app.listen(port, '0.0.0.0', () => console.log(`API listening on ${port}`));
