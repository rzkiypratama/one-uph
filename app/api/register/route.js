// /pages/api/profile.js
import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.HEROKU_POSTGRES_URL, // Ganti dengan Heroku Postgres URL
});

client.connect();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName } = req.body;

    try {
      // Query to insert data into Postgres
      const queryText = 'INSERT INTO users (first_name, last_name) VALUES ($1, $2)';
      const values = [firstName, lastName];

      await client.query(queryText, values);

      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating profile', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
