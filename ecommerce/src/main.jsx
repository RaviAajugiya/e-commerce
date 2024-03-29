import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Products from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";
import { Provider } from "react-redux";

import Register from "./pages/Register.jsx";
import Cart from "./pages/Cart.jsx";
import store from "./Redux/store.js";
import Temp from "./components/Temp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="productdetail" element={<ProductDetail />} />
      <Route path="products" element={<Products />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Login />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Temp/>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
