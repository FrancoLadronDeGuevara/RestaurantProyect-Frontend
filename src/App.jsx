import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout/RootLayout";
import NotFound from "./pages/NotFound.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import Users from "./components/AdminDashboard/Users/Users.jsx";
import Products from "./components/AdminDashboard/Products/Products.jsx";
import Orders from "./components/AdminDashboard/Orders/Orders.jsx";
import FilterCategoriesPage from "./pages/FilterCategoriesPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import UserOrdersPage from "./pages/UserOrdersPage.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "./redux/actions/productActions.js";
import { getUser } from "./redux/actions/userActions.js";
import { getUserCart } from "./redux/actions/cartActions.js";
import { getUserOrders } from "./redux/actions/orderActions.js";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllProducts());
    if (isAuthenticated && !loading) {
      dispatch(getUserCart());
      dispatch(getUserOrders())
    }
  }, [isAuthenticated, dispatch]);

  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin/*" element={<AdminPage />}>
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="/categories" element={<FilterCategoriesPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/user-orders" element={<UserOrdersPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
