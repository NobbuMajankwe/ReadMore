// pages/api/add-book.ts
'use server'
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

// Function to read the books.json file
const readBooksFromFile = () => {
  const filePath = path.join(process.cwd(), 'src/app/data/books.json');
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents);
};

// Function to write the books data to the books.json file
const writeBooksToFile = (data: any) => {
  const filePath = path.join(process.cwd(), 'src/app/data/books.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { title, author, price } = req.body;

      // Read existing books data from books.json
      const books = readBooksFromFile();

      // Add the new book to the books array
      const newBook = { title, author, price };
      books.push(newBook);

      // Write the updated books data back to the file
      writeBooksToFile(books);

      res.status(200).json({ message: 'Book added successfully', newBook });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
