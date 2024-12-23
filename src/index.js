// ספריה מובנת לצורך בדיקה של ביצועי מערכת 
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import "./styles.css";

// Components
import Products from "./components/products";
import Cart from "./components/cart";
import EditProduct from "./components/editProduct";
import AddProducts from './components/addProduct';
import Pay from './components/pay';
import Ordernow from './components/ordernow';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/ordernow" element={<Ordernow />} />
      <Route path="/EditProduct" element={<EditProduct />} />
      <Route path="/addProduct" element={<AddProducts />} />
    </>
  )
);
//<RouterProvider router={router} />
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
