import "./Banner.css";

import { Container, Box, Typography } from "@mui/material";

import bannerRestaurant from "../../../assets/images/banner-restaurant.jpg";

const Banner = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundImage: `url(${bannerRestaurant})`,
        height: '100dvh',
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Box
        sx={{
          px: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "fit-content",
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%)",
        }}
      >
        {/* <Typography variant="h1" className="title-banner">Boricua Vibes</Typography>
        <Typography variant="h2" className="subtitle-banner">&quot;Tu lugar para disfrutar y comer a la vez...&quot;</Typography> */}
      </Box>
    </Container>
  );
};

export default Banner;
