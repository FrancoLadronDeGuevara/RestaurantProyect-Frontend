import { Navigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm.jsx";
import { autoCloseAlert } from "../utils/alerts.js";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  if (loading === false && isAuthenticated) {
    autoCloseAlert("Ya estas logueado", "warning");
    return <Navigate to="/" replace />;
  }

  return <LoginForm />;
};

export default LoginPage;
