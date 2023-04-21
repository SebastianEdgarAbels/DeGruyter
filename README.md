This was the assignment

1. In publishing industry every book has an internationalized number which uniquely defines itself. It is called the ISBN number. There are multiple versions of ISBN number formatting and validation. In this example we will use only 13 digit ISBNs. In the repository you will find an input json that defines a set of books isbn, titles and appendix page numbers. Also, static cover images for the related books. There are sketches which were created by UX team to shape your task that you can see in [Figma](https://www.figma.com/file/PBayyt1zClI5M60MhIieu1/Test-for-Frontend-Dev?node-id=0-1). The following tasks should be fulfilled:

- Write an ISBN validator function, that resolves if the ISBN given is valid or not. For example: for an Input "9780300267662", the Output should be the boolean "true". For an Input "978030026766**3**", the Output should be the boolean "false". For 13 digit ISBN remainder calculation you can refer to [ISBN Information](https://isbn-information.com/check-digit-for-the-13-digit-isbn.html).
- Write a Roman numeral converter function, that converts integer numbers into Roman numerals. For example: for an Input "34", the Output should be "XXXIV".
- Create a web page aligned with the UX design that we provided, whose display a list with the ISBNs available in the file _books.json_.
- Each ISBN item in the list is clickable and should display the cover image whose file name matches with the respective ISBN, as well the book information (ISBN, title and the converted roman numeral of the appendix page numbers). If the ISBN isn’t valid, display the default image and an error message.

Please remember to use the page designs that we provided, and feel free to implement any other functionality that you deem important.

2. What is the output of the code in the image below? Why setTimeout isn’t working? Change the code to print each value after the specified setTimeout interval (e.g. 1000ms).
function timer(i) {
    setTimeout(function () {
    }, 1000);
  }

  for (let i = 0; i < 10; i++) {
    timer(i);
  }

![JS sync async context](js_sync_async_test.png)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# DeGruyter
