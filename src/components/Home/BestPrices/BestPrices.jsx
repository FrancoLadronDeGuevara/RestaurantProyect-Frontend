import { Box, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";

import presentationImage from "../../../assets/images/presentation.webp";

const iconStyle = {
  fontSize: "clamp(1.5rem, 4vw, 2rem)",
  color: "#ffc139",
};

const iconTextStyle = {
  fontSize: "12px",
  color: "#333333",
  fontWeight: "400 !important",
  width: 40,
  textAlign: "center",
};

const BestPrices = () => {
  return (
    <Grid maxWidth="xl" container sx={{ p: { xs: 2, sm: 4 }, mx: "auto" }}>
      <Grid item xs={12} sm={12} md={6}>
        <Box component="img" src={presentationImage} sx={{ width: "100%" }} />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            fontWeight: "400 !important",
            color: "#333333",
            mt: 5,
          }}
        >
          EL MEJOR PRECIO SIEMPRE
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <StarIcon sx={iconStyle} />
          <StarIcon sx={iconStyle} />
          <StarIcon sx={iconStyle} />
          <StarIcon sx={iconStyle} />
          <StarIcon sx={iconStyle} />
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{ color: "gray", my: 2, lineHeight: 2.5 }}
          >
            El lugar perfecto para disfrutar de la vida y la deliciosa comida
            con tus amigos. ¡Nuestra familia ha estado en el negocio de
            restaurantes durante mucho tiempo! Hoy en día, podemos presumir con
            orgullo de nuestra reputación como un restaurante bien conocido en
            nuestra área. Somos famosos por nuestra fabulosa cocina auténtica,
            un chef profesional y un personal dedicado.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            mt: { xs: 4, lg: 10 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LunchDiningOutlinedIcon
              sx={{ color: "#333333", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            />
            <Typography variant="h5" sx={iconTextStyle}>
              BUENA COMIDA
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <DeliveryDiningOutlinedIcon
              sx={{ color: "#333333", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            />
            <Typography variant="h5" sx={iconTextStyle}>
              DELIVERY RÁPIDO
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SavingsOutlinedIcon
              sx={{ color: "#333333", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            />
            <Typography variant="h5" sx={iconTextStyle}>
              BUENOS PRECIOS
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BestPrices;
