import { Box, Button, List, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "thin solid #000",
  boxShadow: 24,
  p: 3,
  borderRadius: 2,
};

const ModalOrderDetails = ({ open, handleClose, userOrder }) => {

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <CloseIcon
          onClick={handleClose}
          sx={{ position: "absolute", top: 10, right: 10, cursor: "pointer" }}
        />

        <Typography
          variant="h6"
          textAlign="center"
        >{`Detalles del pedido N° ${userOrder._id.slice(18, 24)}`}</Typography>

        <Typography variant="h6" sx={{ fontWeight: "bolder !important" }}>
          Productos:
        </Typography>
        <List sx={{ overflowY: "auto", maxHeight: 200 }}>
          {userOrder.products.map((product) => (
            <Typography key={product._id} variant="subtitle1">
              {product.product.name} ({product.quantity}) ${" "}
              {product.product.price * product.quantity}
            </Typography>
          ))}
        </List>

        <Typography variant="h6" sx={{ fontWeight: "bolder !important" }}>
          Dirección:
        </Typography>
        <Typography variant="subtitle1">
          Calle/Piso: {userOrder.userAddress.address}
        </Typography>
        <Typography variant="subtitle1">
          Ciudad: {userOrder.userAddress.city}
        </Typography>
        <Typography variant="subtitle1">
          CP: {userOrder.userAddress.zipCode}
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{ mt: 2 }}
          fullWidth
          disabled={userOrder.status === "CANCELADO" || userOrder.status === "ENTREGADO"}
        >
          <Link
            to={`https://wa.me/543815367724?text=Hola%20me%20gustaria%20cancelar%20la%20orden%20N°%20${userOrder._id.slice(
              18,
              24
            )}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
            onClick={handleClose}
          >
            <Typography sx={{ fontWeight: "bolder !important" }}>
              Cancelar orden
            </Typography>
          </Link>
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalOrderDetails;
