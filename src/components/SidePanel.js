import React, { useState } from 'react';
import books from '../resources/books.json';
import './SidePanel.css';

export default function SidePanel({ isbnDetails, reformISBN }) {
  const { books: allBooks } = books;
  const [isShowMore, setIsShowMore] = useState(false);
  const firstThreeBooks = allBooks.slice(0, 3);

  const showMore = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div className="sidepanel">
      <div className="sidepanel-mobile">
        {!isShowMore &&
          firstThreeBooks.map((book, i) => (
            <pre key={i}>
              <button onClick={() => isbnDetails(book)}>
                {reformISBN(book.isbn) + '   >'}
              </button>
            </pre>
          ))}
        {isShowMore &&
          allBooks.map((book, i) => (
            <pre key={i}>
              <button className="isbn-button" onClick={() => isbnDetails(book)}>
                {reformISBN(book.isbn) + '   >'}
              </button>
            </pre>
          ))}
        <>
          {!isShowMore ? (
            <button className="show-more" onClick={showMore}>
              show more...
            </button>
          ) : (
            <button className="show-more" onClick={showMore}>
              show less...
            </button>
          )}
        </>
      </div>
      <div className="sidepanel-desktop">
        {allBooks &&
          allBooks.map((book, i) => (
            <pre key={i}>
              <button onClick={() => isbnDetails(book)}>
                {reformISBN(book.isbn) + '   >'}
              </button>
            </pre>
          ))}
      </div>
    </div>
  );
}
