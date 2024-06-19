import { useSelector } from "react-redux";
import RegisterForm from "../components/Register/RegisterForm";
import { autoCloseAlert } from "../utils/alerts";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  if (!loading && isAuthenticated) {
    autoCloseAlert("Ya estas logueado", "warning");
    return <Navigate to="/" replace />;
  }
  return <RegisterForm />;
};

export default RegisterPage;
