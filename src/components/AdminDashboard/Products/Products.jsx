import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../redux/actions/productActions";
import Loader from "../../Loader/Loader";

function createData(_id, name, description, price, category, image) {
  return { _id, name, description, price, category, image };
}

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  console.log(products);

  const rows =
    products &&
    products.map((product) =>
      createData(
        product._id,
        product.name,
        product.description,
        product.price,
        product.category,
        product.image
      )
    );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffc139",
                my: 2,
                color: "#333333",
              }}
            >
              CREAR PRODUCTO
              <AddBoxOutlinedIcon sx={{ml: 1}}/>
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ overflowX: "auto", my: 2 }}>
            <Table aria-label="collapsible table" size="small">
              <TableHead sx={{ backgroundColor: "#333333" }}>
                <TableRow>
                  <TableCell sx={{ color: "#ffc139" }}>Nombre</TableCell>
                  <TableCell align="left" sx={{ color: "#ffc139" }}>
                    Descripción
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#ffc139" }}>
                    Precio
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#ffc139" }}>
                    Categoría
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#ffc139" }}>
                    Imagen
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#ffc139" }}>
                    Editar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="left">
                      <Chip label={`$ ${row.price}`} color="success" />
                    </TableCell>
                    <TableCell align="center">{row.category}</TableCell>
                    <TableCell align="center">
                      <img
                        src={row.image}
                        alt={row.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => {
                          setSelectedProduct(row);
                          setOpenModal(true);
                        }}
                        variant="contained"
                        size="small"
                        sx={{
                          mr: { xs: 0, sm: 1 },
                          backgroundColor: "#333333",
                        }}
                      >
                        <ModeEditOutlineOutlinedIcon
                          sx={{ color: "#ffc139" }}
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* {openModal && (
            <ModalEditProduct
              open={openModal}
              user={selectedProduct}
              handleClose={() => setOpenModal(false)}
            />
          )} */}
        </Container>
      )}
    </>
  );
};

export default Products;
