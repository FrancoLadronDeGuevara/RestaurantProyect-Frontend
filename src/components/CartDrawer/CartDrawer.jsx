import { Box, Drawer, List, ListItem, Typography } from "@mui/material";

const CartDrawer = ({ openCart, closeCart, userCart }) => {
  return (
    <>
      <Drawer open={openCart} onClose={closeCart} anchor="right">
        <Box sx={{ width: 250 }} role="presentation" onClick={closeCart}>
          {userCart.length == 0 ? (
            <Typography variant="h6" sx={{ textAlign: "center", fontStyle: "italic", mt: 2}}>No hay productos en el carrito</Typography>
          ) : (
            userCart.map((product) => (
              <List key={product._id}>
                <ListItem>{product.name}</ListItem>
              </List>
            ))
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default CartDrawer;
