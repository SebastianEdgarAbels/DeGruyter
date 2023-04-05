import React from 'react';
import './Content.css';
import isISBNvalid from '../utils/isbnValidation';
import romanize from '../utils/roman';

export default function Content({ book, reformISBN, setBook }) {
  return (
    <>
      {!book ? (
        <div></div>
      ) : book && isISBNvalid(book.isbn) ? (
        <div className="isbn-content-wrapper">
          <button className="back-button" onClick={() => setBook()}>
            &lt; back
          </button>
          <div>
            <img src={`../../images/${book.isbn}.jpg`} alt={book.title} />
          </div>
          <div>
            <p>{book.title}</p>
            <p>ISBN: {reformISBN(book.isbn)}</p>
            <p>Appendix: {romanize(Number(book.appendixPage))}</p>
          </div>
        </div>
      ) : (
        <div className="isbn-content-wrapper">
          <button className="back-button" onClick={() => setBook()}>
            &lt; back
          </button>
          <div>
            <img src="../../images/default.jpg" alt="default" />
          </div>
          <div>
            <p>Error</p>
            <p>The ISBN isn't valid</p>
          </div>
        </div>
      )}
    </>
  );
}
