# USED BOOKSTORE

The **Used Bookstore** is a full stack application designed to manage an online store for used books. It includes a mobile app that runs on both Android and iOS devices, two web applications - one for administrative purposes to add, remove, and edit products, and the other for e-commerce to browse and purchase products. Lastly, there is an API that provides data for both the web and mobile applications.

<h2 align="center">Used Bookstore | Full Stack Application</h2>

<h3 align="center">
  <a href="#information_source-about">About</a> &nbsp;|&nbsp;
  <a href="#computer-applications">Applications</a> &nbsp;|&nbsp;
  <a href="#bookmark-minimum-requirements">Requirements</a> &nbsp;|&nbsp;
  <a href="#page_facing_up-technologies-used">Technologies</a> &nbsp;|&nbsp;
  <a href="#package-how-to-download-and-run-the-project">Download and Run</a> &nbsp;|&nbsp; 
  <a href="#rocket-developed-by-mateus-anderle-da-silva-get-in-touch">Get in touch</a>
</h3>

---

<div align="center" >
<img src="https://github.com/MateusAnderle/bookstore-full-stack-project/assets/100309091/f152f7db-32fb-4a12-90be-85c0a525787c" width="300">
</div>

---

## :information_source: About

This project was created to enhance my skills in the JavaScript ecosystem, working with technologies like Next.js, React Native, and Node.js. The system is a CRUD that includes the ability to create, edit, delete, and read products in both web and mobile applications.

Below, all the applications that make up this project are separated, detailing their functionalities and showcasing their interfaces.

## :computer: Applications

<h3 align="center">Mobile - React Native</h3>

<p>The mobile app features a simple and accessible interface with intuitive navigation. Users can browse through book categories, view product details, and add or remove products from their cart. To complete a purchase, users need to register within the application, and the registration form is straightforward and quick to fill out. Once registered, users can finalize their purchase by entering delivery information.

After completing a purchase, users can view their purchase history by accessing the user area. In this section, they can also log out of their account.</p>

<h3 align="center">Home navigation</h3>
<div align="center" >
  <img src="https://i.imgur.com/60YbwUt.png" width=250 /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/MTbGvPn.png" width=250 /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/tUkFhiN.png" width=250 />
</div>

<h3 align="center">Product details</h3>
<div align="center" >
  <img src="https://i.imgur.com/aThnsuy.png" width=250 /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/Kqky5Fx.png" width=250 /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/p6YYzXo.png" width=250 />
</div>

<h3 align="center">Search and Cart</h3>
<div align="center" >
  <img src="https://i.imgur.com/Ct4uu5D.png" width=250 /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/rUKXgVs.png" width=250 />
</div>

<h3 align="center">Login and Registration</h3>
<div align="center" >
  <img src="https://i.imgur.com/LCP4RtM.png" width=250 /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/P4EilzM.png" width=250 /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/sFf8Ve6.png" width=250 />
</div>

<h3 align="center">Checkout and Logged-In Area</h3>
<div align="center" >
  <img src="https://i.imgur.com/66ViwZI.png" width=250 /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/UszUGJU.png" width=250 /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/Rj4RnFS.png" width=250 />
</div>

---

<h3 align="center">ECOMMERCE - Next.js</h3>

<p>The e-commerce platform features a simple and intuitive interface. Similar to the mobile application, users can browse through book categories, view product details, and add or remove products from their cart. To complete a purchase, users need to register within the application, and the registration form is straightforward and quick to fill out. Once registered, users can finalize their purchase by entering delivery information.

After completing a purchase, users can view their purchase history by accessing the user area. In this section, they can also log out of their account.</p>

<h3 align="center">Home navigation</h3>
<div align="center" >
  <img src="https://i.imgur.com/PdGG8Ds.png" width=48% /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/igDZtvC.png" width=48% />
</div>

<h3 align="center">Product details</h3>
<div align="center" >
  <img src="https://i.imgur.com/Jyx92Q5.png" width=48% /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/PqGmhyE.png" width=48% />
</div>

<h3 align="center">Search and Cart</h3>
<div align="center" >
  <img src="https://i.imgur.com/8bgtdNa.png" width=48% /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/qWWHjhP.png" width=48% />
</div>

<h3 align="center">Login and Registration</h3>
<div align="center" >
  <img src="https://i.imgur.com/gFqvJ64.png" width=48% /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/DImeThA.png" width=48% />
</div>

<h3 align="center">Checkout and Logged-In Area</h3>
<div align="center" >
  <img src="https://i.imgur.com/iapAqgw.png" width=48% /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/zGZ9zFN.png" width=48% />
</div>

---

<h3 align="center">ADMINISTRATIVE - Next.js</h3>

<p>In the administrative panel, you can list all registered products, as well as add new products, edit, and delete them as needed. Within the registration form, there are various fields to provide comprehensive information and enhance the presentation of the product on both the WEB and MOBILE interfaces. These fields will also be used as search filters on these platforms later.</p>

<h3 align="center">Homepage and Product Registration</h3>
<div align="center" >
  <img src="https://i.imgur.com/1twFq1f.png" width=48% /> &nbsp;&nbsp;
  <img src="https://i.imgur.com/9Tkl82v.png" width=48% />
</div>

---

<h3 align="center">API - Node.js</h3>

<p>The API developed in this project was built using Node.js and Prisma, and it is capable of providing seamless interactions with both the e-commerce and admin interfaces, as well as the mobile app.

With this API, users can register an account and use it to log into the applications. They can create new products, as well as edit or remove them from the database. The API also handles listing, sorting, and filtering of all registered products, considering all the text fields within the products for filtering purposes.</p>

&nbsp;

## :bookmark: Minimum Requirements

- #### MOBILE
  - Android Studio or Xcode
  - iOS or Android simulator
  - Mobile device (optional)
  - Expo(desktop)
  - Expo Go(Mobile) opcional.
  - Node.js
  - React-Native
  - NPM or Yarn

&nbsp;

- #### WEB and ADMIN
  - Node.js
  - NPM

&nbsp;

- #### API
  - Node.js
  - Docker
  - NPM

## :page_facing_up: Technologies Used

This project was developed using the following technologies

- #### MOBILE
  - [Android Studio](https://developer.android.com/studio)
  - [XCODE](https://developer.apple.com/xcode/)
  - [Expo](https://expo.dev/)
  - [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [NodeJS](https://nodejs.org/en/)
  - [React](https://react.dev/)
  - [React-Native](https://reactnative.dev/)
  - [React Navigation](https://reactnavigation.org/)
  - [Async Storage](https://react-native-async-storage.github.io/async-storage/docs/usage/)
  - [React Query](https://tanstack.com/query/v3/)
  - [Axios](https://axios-http.com/)
  - [Date-fns](https://date-fns.org/)
  - [React Hook Form](https://www.react-hook-form.com/)
  - [React-native-get-random-values](https://github.com/LinusU/react-native-get-random-values#readme)
  - [Styled Components](https://styled-components.com/)
  - [UUID](https://github.com/uuidjs/uuid)
  - [TypeScript](https://www.typescriptlang.org/)
  - [YARN](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

&nbsp;

- #### WEB (Ecommerce and Admin)

  - [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [NodeJS](https://nodejs.org/en/)
  - [Next.JS](https://nextjs.org/)
  - [React](https://react.dev/)
  - [React Query](https://tanstack.com/query/v3/)
  - [Axios](https://axios-http.com/)
  - [Stitches](https://stitches.dev/)
  - [Eslint](https://eslint.org/)
  - [Phosphor-react](https://phosphoricons.com/)
  - [React Hook Form](https://www.react-hook-form.com/)
  - [React-loader-spinner](https://mhnpd.github.io/react-loader-spinner/)
  - [React-toastify](https://fkhadra.github.io/react-toastify/introduction/)
  - [YUP](https://github.com/jquense/yup)
  - [TypeScript](https://www.typescriptlang.org/)
  - [NPM](https://www.npmjs.com/)

&nbsp;

- #### API
  - [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [NodeJS](https://nodejs.org/en/)
  - [Nodemon](https://nodemon.io/)
  - [Prisma](https://www.prisma.io/)
  - [Cors](https://github.com/expressjs/cors#readme)
  - [Dotenv](https://github.com/motdotla/dotenv#readme)
  - [Express](https://expressjs.com/)
  - [Docker](https://www.docker.com/)

&nbsp;

## :package: How to Download and Run the Project

#### To access each project and view the instructions for running each of them, please visit the links below:

- #### [React Native - Mobile](https://github.com/MateusAnderle/bookstore-full-stack-project/tree/main/used-bookstore-react-native)
- #### [Next.JS - Ecommerce](https://github.com/MateusAnderle/bookstore-full-stack-project/tree/main/used-bookstore-nextjs)
- #### [Next.JS - Admin](https://github.com/MateusAnderle/bookstore-full-stack-project/tree/main/used-bookstore-admin-nextjs)
- #### [Node - API](https://github.com/MateusAnderle/bookstore-full-stack-project/tree/main/used-bookstore-prisma)

## &nbsp;

### :rocket: Developed by Mateus Anderle da Silva [Get in touch!](https://www.linkedin.com/in/mateus-anderle-da-silva/)
