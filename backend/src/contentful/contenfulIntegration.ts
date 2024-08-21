import express from 'express';
import { getEntries } from './contentfulAPI';

const app = express();

app.get('/spaces', async (req, res) => {
  try {
    const entries = await getEntries('yourContentType');
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
