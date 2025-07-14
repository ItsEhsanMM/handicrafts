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
import Checkout from "./components/Checkout.jsx";
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
