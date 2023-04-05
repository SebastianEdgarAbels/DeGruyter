import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="/">Impressum</a>
        {' | '}
        <a href="/">Cookies</a>
        {' | '}
        <a href="../views/Contact">Contact</a>
      </div>
    </div>
  );
}
