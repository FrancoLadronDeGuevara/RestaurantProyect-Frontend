import { Box, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DefaultButton from "../DefaultButton/DefaultButton";

const ProductCard = ({productImage, productName, productPrice, productDescription}) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 450,
        border: "thin solid gray",
        display: "flex",
        flexDirection: "column",
        p: 1,
      }}
    >
      <Box component="img" src={productImage} sx={{ width: 200, mx: "auto" }} />
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "400 !important", color: "#333333" }}
        >
          {productName}
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold !important", color: "#ffc139", my: 1 }}
        >
          {productPrice}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray" }}>
          {productDescription}
        </Typography>
      </Box>
      <DefaultButton
        buttonText="Agregar al carrito"
        styles={{ width: 200, alignSelf: "center" }}
        icon={<ShoppingCartOutlinedIcon sx={{ fontSize: 16, mr: 1 }}/>}
      />
    </Box>
  );
};

export default ProductCard;
