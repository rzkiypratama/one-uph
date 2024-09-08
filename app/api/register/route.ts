import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'pg';

// Koneksi ke Heroku Postgres
const client = new Client({
  connectionString: process.env.HEROKU_POSTGRES_URL as string, // Mendapatkan URL Postgres dari environment
});

client.connect(); // Memulai koneksi

// Handler untuk POST request
export async function POST(req: NextRequest) {
  const { firstName, lastName } = await req.json(); // Mendapatkan data dari body

  try {
    // Query untuk memasukkan data ke dalam tabel users
    const queryText = 'INSERT INTO users (first_name, last_name) VALUES ($1, $2)';
    const values = [firstName, lastName];

    // Menjalankan query di Postgres
    await client.query(queryText, values);

    // Response sukses
    return NextResponse.json({ message: 'Profile updated successfully' });
  } catch (error: any) {
    console.error('Error executing query:', error);
    return NextResponse.json({ message: 'Error updating profile', error: error.message }, { status: 500 });
  }
}

// Kamu bisa tambahkan handler GET, PUT, DELETE jika dibutuhkan
