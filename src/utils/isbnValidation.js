export default function isISBNvalid(isbn) {
  const arrISBN = isbn.toString().split('');

  let isValid;

  if (arrISBN.length !== 13) {
    throw new Error('the ISBN is not 13 digits');
  } else {
    const arr12Nr = arrISBN.slice(0, 12);

    let total = 0;

    for (let i = 0; i < arr12Nr.length; i++) {
      if (i % 2 === 0) {
        total += Number(arr12Nr[i]) * 1;
      } else {
        total += Number(arr12Nr[i]) * 3;
      }
    }

    let reminder = total % 10;

    let checkNr;
    if (reminder === 0) checkNr = 0;
    else checkNr = 10 - reminder;

    isValid = checkNr === Number(arrISBN[12]) ? true : false;
  }
  return isValid;
}
