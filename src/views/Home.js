import React, { useState } from 'react';

import SidePanel from '../components/SidePanel';
import './Home.css';
import Footer from '../components/Footer';
import Content from '../components/Content';

export const Home = () => {
  const [book, setBook] = useState();

  const isbnDetails = (event) => {
    setBook(event);
  };

  const reformISBN = (isbn) => {
    let arrTest = isbn.split('');
    arrTest.splice(3, 0, '-');
    arrTest.splice(5, 0, '-');
    arrTest.splice(11, 0, '-');
    arrTest.splice(15, 0, '-');
    return arrTest.join('');
  };

  return (
    <div className="container">
      <div className="header">
        <h1>De Gruyter ISBN Search</h1>
      </div>
      <SidePanel isbnDetails={isbnDetails} reformISBN={reformISBN} />
      <Content book={book} setBook={setBook} reformISBN={reformISBN} />
      <Footer />
    </div>
  );
};
