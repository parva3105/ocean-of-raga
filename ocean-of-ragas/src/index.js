import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
// import HomePage from './pages/HomePage';
// import IndexPage from './pages/IndexPage';
import reportWebVitals from './reportWebVitals';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
//import Header from './ComponentsIndex/Header/Header';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <IndexPage />,
//   },
//   {
//     path : "/home",
//     element : <HomePage />,
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Header />
    <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
