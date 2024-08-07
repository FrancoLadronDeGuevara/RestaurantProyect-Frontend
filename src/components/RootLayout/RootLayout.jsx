import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const RootLayout = ({ children }) => {
  const location = useLocation();
  const { loading } = useSelector((state) => state.product);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
