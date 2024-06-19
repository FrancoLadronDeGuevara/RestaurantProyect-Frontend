import { useSelector } from "react-redux";
import burger from "../../../assets/icons/burger.svg";
import pizza from "../../../assets/icons/pizza.svg";
import pasta from "../../../assets/icons/pasta.svg";
import drink from "../../../assets/icons/drink.svg";
import soup from "../../../assets/icons/soup.svg";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import ProductCard from "../../ProductCard/ProductCard";

const categories = [
  {
    name: "Hamburguesas",
    icon: burger,
  },
  {
    name: "Pizzas",
    icon: pizza,
  },
  {
    name: "Pastas",
    icon: pasta,
  },
  {
    name: "Bebidas",
    icon: drink,
  },
  {
    name: "Sopas",
    icon: soup,
  },
];

const ProductsCategories = () => {
  const { products } = useSelector((state) => state.product);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <Container maxWidth="xl" sx={{minHeight: 600, my: 5}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
          mb: 3,
        }}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 75,
              cursor: "pointer",
              transition: "all .2s ease-in-out",
              ":hover": { transform: "translateY(-5px)", color: "#ffc139" },
              flexGrow: 1,
              color: selectedCategory === category.name ? "#ffc139" : "#333333",
            }}
            onClick={() => setSelectedCategory(category.name)}
          >
            <Box
              component="img"
              src={category.icon}
              sx={{
                width: 60,
                m: 1,
              }}
              alt={category.name}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bolder !important",
                color: "inherit",
              }}
            >
              {category.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <Typography variant="h6" color="text.secondary">
            No hay productos en esta categoría.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ProductsCategories;
