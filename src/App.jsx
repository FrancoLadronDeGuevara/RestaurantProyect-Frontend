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
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllProducts());
    if (isAuthenticated && !loading) {
      dispatch(getUserCart());
      dispatch(getUserOrders());
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
          <Route path="/categories" element={<FilterCategoriesPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route
            path="/admin/*"
            element={
              <AdminRoutes>
                <AdminPage />
              </AdminRoutes>
            }
          >
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route
            path="/checkout"
            element={
              <ProtectedRoutes>
                <CheckoutPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/user-orders"
            element={
              <ProtectedRoutes>
                <UserOrdersPage />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
