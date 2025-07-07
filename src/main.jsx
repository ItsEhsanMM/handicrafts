import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Shop from "./components/Shop.jsx";
import Weblog from "./components/Weblog.jsx";
import About from "./components/about.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
   {
      path: "/",
      Component: App,
   },
   {
      path: "/shop",
      Component: Shop,
   },
   {
      path: "/blog",
      Component: Weblog,
   },
   {
      path: "/about",
      Component: About,
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
