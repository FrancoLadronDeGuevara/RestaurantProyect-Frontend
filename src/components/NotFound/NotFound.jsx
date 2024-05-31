import { Box, Container, Typography } from "@mui/material";
import notFoundImage from "../../assets/images/notfound.webp";
import DefaultButton from "../DefaultButton/DefaultButton";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundImage: `url(${notFoundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(5px)",
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={notFoundImage}
        sx={{
          width: { xs: 300, sm: 400, md: 500, lg: 600},
          height: { xs: 300, sm: 400, md: 500, lg: 600 },
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 2,
          position: "relative",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          zIndex: 3,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: "white", fontWeight: "bold !important", my: 2, fontSize: "clamp(3rem, 8dvw, 5rem)" }}
        >
          404
        </Typography>
        <Typography sx={{ color: "white", my: 2, fontSize: "clamp(1rem, 2.5dvw, 1.5rem)" }}>
          Error... No se encontró lo que estabas buscando
        </Typography>
        <DefaultButton
          buttonText="Volver al inicio"
          onclick={() => navigate("/")}
        />
      </Box>
    </Container>
  );
};

export default NotFound;
