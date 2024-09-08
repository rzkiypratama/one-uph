import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

// Koneksi ke Heroku Postgres
const client = new Client({
  connectionString: process.env.HEROKU_POSTGRES_URL as string, // Pastikan Heroku Postgres URL ada di .env.local
});

client.connect();

// API handler dengan TypeScript
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName }: { firstName: string; lastName: string } = req.body;

    try {
      // Query untuk memasukkan data ke Postgres
      const queryText = 'INSERT INTO users (first_name, last_name) VALUES ($1, $2)';
      const values = [firstName, lastName];

      await client.query(queryText, values);

      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: 'Error updating profile', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
