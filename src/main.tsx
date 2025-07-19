import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import App from "./App";
import Shop from "./components/Shop";
import ProductDetail from "./components/ProductDetail";
import Weblog from "./components/Weblog";
import About from "./components/about";
import ContentUS from "./components/content-us";
import Checkout from "./components/Checkout";

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
         { path: "checkout", element: <Checkout /> },
      ],
   },
]);

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
