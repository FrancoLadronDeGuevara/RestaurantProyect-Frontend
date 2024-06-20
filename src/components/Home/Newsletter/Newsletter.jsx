import {
  Box,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import { useNavigate } from "react-router-dom";

import DefaultButton from "../../DefaultButton/DefaultButton";

const Newsletter = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md">
      <Box
        sx={{ border: "thin solid gray", borderRadius: "10px", my: 5, p: 3 }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#333333",
            textAlign: "center",
            mb: 2,
            fontWeight: "bolder !important",
          }}
        >
          Suscríbete a nuestro newsletter
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "gray" }}>
          Recibe todas nuestras novedades, promociones, descuentos, ofertas
          especiales y mucho más...
        </Typography>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: 40,
            my: 4,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Tu email"
            inputProps={{ maxLength: 30 }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton disabled>
            <ForwardToInboxOutlinedIcon />
          </IconButton>
        </Paper>
        <DefaultButton
          buttonText="Suscribete"
          onclick={() => {
            navigate("/notfound");
          }}
          styles={{ marginLeft: "auto" }}
        />
      </Box>
    </Container>
  );
};

export default Newsletter;
