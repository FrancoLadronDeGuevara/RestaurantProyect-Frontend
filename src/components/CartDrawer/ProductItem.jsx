import { Box, Divider, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Link } from "react-router-dom";

const ProductItem = ({ product, closeCart }) => {
  const handleIncreaseProduct = () => {};

  const handleDecreaseProduct = () => {};

  return (
    <>
      <Box
        sx={{
          width: 250,
          height: 100,
          display: "flex",
          alignItems: "center",
          px: 0.5,
          ":hover": { backgroundColor: "#f2f2f2" },
        }}
      >
        <Box
          component="img"
          src={product.product.image}
          sx={{ width: 80, height: 80 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/product/${product.product._id}`}
            onClick={closeCart}
          >
            <Typography
              sx={{ fontWeight: "bolder !important", color: "#333333" }}
            >
              {product.product.name}
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#ffc139", fontWeight: "bolder !important" }}
            >
              $ {product.product.price}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
              <RemoveCircleIcon
                onClick={handleDecreaseProduct}
                sx={{ fontSize: 20, color: "#ffc139", cursor: "pointer" }}
              />
              <Typography
                variant="h7"
                sx={{ mx: 1, fontWeight: "bolder !important" }}
              >
                x {product.quantity}
              </Typography>
              <AddCircleIcon
                onClick={handleIncreaseProduct}
                sx={{ fontSize: 20, color: "#ffc139", cursor: "pointer" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mr: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: "#333333" }}>
              Subtotal:
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#333333", fontWeight: "bolder !important" }}
            >
              $ {product.product.price * product.quantity}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{ backgroundColor: "#f2f2f2" }}
      />
    </>
  );
};

export default ProductItem;
