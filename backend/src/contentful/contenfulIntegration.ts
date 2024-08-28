import express from 'express';
import { getEntries } from './contentfulAPI';

const app = express();

app.get('/spaces', async (req, res) => {
  try {
    const entries = await getEntries('yourContentType');
    res.json(entries);
  } catch (error) {
    console.error('Error fetching entries:', error); // Log error server-side
    res.status(500).json({ error: 'Internal server error' }); // Generic message to client
  }
});
