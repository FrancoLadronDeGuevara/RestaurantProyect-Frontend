import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const UserOrders = () => {
  const { userOrders } = useSelector((state) => state.order);

  console.log(userOrders);

  return (
    <Container disableGutters maxWidth="xl">
      <Typography variant="h3" sx={{ textAlign: "center", color: "#333333" }}>
        Pedidos
      </Typography>
      {userOrders.length == 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Typography variant="h5" sx={{ textAlign: "center", color: "#333333", fontStyle: "italic" }}>
          Todavía no tienes pedidos realizados
        </Typography>
        </Box>
      ) : (
        <Box></Box>
      )}
    </Container>
  );
};

export default UserOrders;
