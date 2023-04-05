import React from 'react';

export default function TheSetTimeout() {
  function timer(i) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * (i + 1));
  }

  for (let i = 0; i < 10; i++) {
    timer(i);
  }

  return <div></div>;
}
