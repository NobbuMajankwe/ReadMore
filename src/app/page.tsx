// pages/index.tsx
'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Book } from './types/book';
import booksData from './data/books.json';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
const [books, setBooks] = useState([] as Book[]);
const router = useRouter();
const {t} = useTranslation();

useEffect(() => {
  // Simulate fetching data from books.json
  setBooks(booksData);
}, []);

const handleAddNewBook = () => {
  router.push('/add_book');
};

return (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-100 to-transparent pt-0">

  <div className="container mx-auto px-4  mt-16	">
    <h1 className="text-5xl text-center font-sans font-semibold my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
     {t('welcome-title')}
     </h1>
    <div className="flex items-center justify-between">
      <h4 className="text-2xl font-semibold my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{t('subtitle')}</h4>
      <button
        onClick={handleAddNewBook}
        className="my-8 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        {t('add-new-book')}
      </button>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 overflow-y-scroll h-full max-h-96  ">
      {books.map((book, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
          <p className="text-gray-600 mb-2">{t('author')}: {book.author}</p>
          <p className="text-gray-600 font-semibold">{t('price')}: ${book.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  </div>
  </div>
)
}