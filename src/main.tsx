import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import Shop from "./components/Shop.js";
import Weblog from "./components/Weblog.js";
import About from "./components/about.js";
import ContentUS from "./components/content-us.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProductDetail from "./components/ProductDetail.js";
import Ozviyat from "./components/ozviyat.js";
import Checkout from "./components/Checkout.js";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />, // ✅ Apply layout to all children
      children: [
         { index: true, element: <App /> },
         { path: "shop", element: <Shop /> },
         { path: "shop/:id", element: <ProductDetail /> },
         { path: "blog", element: <Weblog /> },
         { path: "about", element: <About /> },
         { path: "content", element: <ContentUS /> },
         { path: "my-account", element: <Ozviyat /> },
         { path: "checkout", element: <Checkout /> },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
