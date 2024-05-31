import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";

const Categories = () => {
  const { products } = useSelector((state) => state.product);
  return (
    <Container>
      {products.map((product) => (
        <ProductCard
          key={product._id}
          productImage={product.image}
          productName={product.name}
          productPrice={product.price}
          productDescription={product.description}
        />
      ))}
    </Container>
  );
};

export default Categories;
