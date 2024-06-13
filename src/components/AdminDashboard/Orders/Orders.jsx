import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getOrders } from "../../../redux/actions/orderActions";
import Loader from "../../Loader/Loader";
import ItemOrder from "./ItemOrder";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <>
      {loading && <Loader />}
      {orders.length > 0 ? (
        <Container>
          <TableContainer component={Paper} sx={{ overflowX: "auto", my: 2 }}>
            <Table aria-label="collapsible table" size="small">
              <TableHead sx={{ backgroundColor: "#333333" }}>
                <TableRow>
                  <TableCell align="left" sx={{ color: "#ffc139" }}>
                    Cliente
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#ffc139" }}>
                    Fecha
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#ffc139" }}>
                    Estado
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#ffc139" }}>
                    Total
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#ffc139" }}>
                    Detalles
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <ItemOrder key={order._id} order={order} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      ) : (
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontStyle: "italic", mt: 4 }}>
            No hay pedidos
          </Typography>
        </Container>
      )}
    </>
  );
};

export default Orders;
