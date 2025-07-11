import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Shop from "./components/Shop.jsx";
import Weblog from "./components/Weblog.jsx";
import About from "./components/about.jsx";
import ContentUS from "./components/content-us.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProductDetail from "./components/ProductDetail.jsx";
import Ozviyat from "./components/ozviyat.jsx";
import SabadKharid from "./components/SabadKharid.jsx";
const router = createBrowserRouter([
   {
      path: "/",
      Component: App,
   },
   {
      path: "/shop",
      Component: Shop,
   },
   { path: '/shop/:id', Component: ProductDetail },
   {
      path: "/blog",
      Component: Weblog,
   },
   {
      path: "/about",
      Component: About,
   },
   {
      path: "/content",
      Component: ContentUS,
   },
   {
      path: "/my-account",
      Component: Ozviyat ,
   },
   {
      path: "/cart",
      Component: SabadKharid ,
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);


/*

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Weblog from './components/Weblog';
import ContentUS from './components/ContentUS';

const router = createBrowserRouter([
  { path: '/shop', element: <Shop /> },
  { path: '/shop/:id', element: <ProductDetail /> },
  { path: '/about', element: <About /> },
  { path: '/blog', element: <Weblog /> },
  { path: '/content', element: <ContentUS /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


*/