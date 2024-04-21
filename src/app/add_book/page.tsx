'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';
import { Book } from '../types/book';
import useTranslation from 'next-translate/useTranslation';

const validate = (values: Book) => {

  let errors: FormikErrors<Book> = {};

  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length < 2) {
    errors.title = 'Must be more than 2 characters';
  }

  if (!values.author) {
    errors.author = 'Required';
  } else if (values.author.length < 2) {
    errors.author = 'Must be more than 2 characters';
  }

  if (!values.price) {
    errors.price = 'Required';
  } else if (typeof values.price !== 'number') {
    errors.price = 'Invalid price';
  }

  return errors;
};

const AddBookPage = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      price: 0
    },
    validate,
    onSubmit: async values => {
      // Add new book
      // Here you can send a request to your backend to save the new book
      // For demonstration purposes, let's assume we have a function to add the book locally
      try {
        const response = await fetch('/api/add-book', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
      } catch (error) {
        console.error('Error:', error);
      }
      router.push('/');
    },
  });

  const { errors, touched } = formik;


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-100 to-transparent pt-0">
      
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold mb-4">{t('add-new-book')}</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              {t('title')}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {touched.title && errors.title && <div>{errors.title}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
            {t('author')}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="author"
              type="text"
              placeholder="Author"
              onChange={formik.handleChange}
              value={formik.values.author}
            />
            {touched.author && errors.author && <div>{errors.author}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            {t('price')}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              placeholder="Price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            {touched.price && errors.price && <div>{errors.price}</div>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {t('add-book')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookPage;