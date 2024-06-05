import { Box, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DefaultButton from "../DefaultButton/DefaultButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { manageCartProduct } from "../../redux/actions/cartActions";
import { useEffect, useState } from "react";
import { customAlert } from "../../utils/alerts";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { userCart } = useSelector((state) => state.cart);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const isProductInCart = userCart.some(
      (item) => item.product._id === product._id
    );
    setIsInCart(isProductInCart);
  }, [userCart, product]);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      if (isInCart) {
        customAlert("¿Deseas remover este producto del carrito?", () => {
          dispatch(manageCartProduct({ id: product._id }));
        });
      } else {
        dispatch(manageCartProduct({ id: product._id }));
      }
    }
  };

  return (
    <Box
      sx={{
        width: 300,
        border: "thin solid gray",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        p: 1,
      }}
    >
      <Box
        component="img"
        src={product.image}
        sx={{ width: 200, mx: "auto" }}
      />
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "500 !important", color: "#333333" }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold !important", color: "#ffc139", my: 1 }}
        >
          $ {product.price}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray" }}>
          {product.description}
        </Typography>
      </Box>
      <DefaultButton
        buttonText={isInCart ? "Remover del carrito" : "Agregar al carrito"}
        onclick={handleAddToCart}
        className={isInCart ? "default-button-reverse" : "default-button"}
        styles={{ width: 200, alignSelf: "center" }}
        icon={
          isInCart ? null : (
            <ShoppingCartOutlinedIcon sx={{ fontSize: 16, mr: 1 }} />
          )
        }
      />
    </Box>
  );
};

export default ProductCard;
