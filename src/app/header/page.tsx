'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Header() {
  //let init =typeof window !== 'undefined' && window.localStorage.getItem('lang');
  //const [lang, setLang] = useState(init ? init: 'en');
  const { t } = useTranslation("common");

  /* const changeLanguage = (locale: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/\/[a-z]{2}\//, `/${locale}/`);
    window.location.href = newPath;
  }; */

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-violet-500 w-full flex flex-row justify-between items-center h-24 px-8 absolute top-0">
      <a href="/" className=" text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
      <div>
        <Link href="/" locale="en">
          <h2 className="bg-clip-text text-white font-semibold">{t('english')}</h2>
        </Link>
        <Link href="/" locale="fr">
          <h2 className="bg-clip-text text-white font-semibold">{t('french')}</h2>
        </Link>
      </div>
      {/* <select value={lang as string} onChange={(e) => {
          setLang(e.target.value);
          typeof window !== 'undefined' && window.localStorage.setItem('lang', e.target.value)
          changeLanguage(e.target.value);
        }} className=" bg-gradient-to-r from-pink-500 to-violet-400 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ms-4 my-6 display-none" name="Language" id="lang">
          <option value="en">{t('english')}</option>
          <option value="fr">{t('french')}</option>
        </select> */}  </nav>
  )
}
