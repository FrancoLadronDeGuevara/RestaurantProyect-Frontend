import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const FilterCategories = () => {
  const { products } = useSelector((state) => state.product);
  return (
    <Container sx={{display: "flex", flexWrap: "wrap", gap: 3}}>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </Container>
  );
};

export default FilterCategories;
