import {
  Avatar,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  FormControl,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleError } from "../../utils/handleInputError.js";
import { useDispatch } from "react-redux";
import { getUser, loginUser } from "../../redux/actions/userActions.js";
import { autoCloseAlert } from "../../utils/alerts.js";

import backgroundImage from "../../assets/images/notfound.webp";
import DefaultButton from "../DefaultButton/DefaultButton.jsx";
import Loader from "../Loader/Loader.jsx";

const confIcon = {
  position: "absolute",
  right: 10,
  top: 30,
  cursor: "pointer",
};

const strongEmailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password || emailError) {
      setIsLoading(false);
      return autoCloseAlert(
        "Por favor, rellena el formulario correctamente",
        "error"
      );
    }

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        autoCloseAlert("BIENVENIDO", "success");
        navigate("/");
        dispatch(getUser());
      })
      .catch((error) => {
        autoCloseAlert(error.message, "error");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(5px)",
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#f2f2f2",
            borderRadius: 2,
            color: "gray",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "#ffc139" }}>
            <LoginIcon sx={{ color: "#333333" }} />
          </Avatar>
          <Typography className="link-to" variant="h5">
            Iniciar Sesión
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={(e) =>
                handleError(e, setEmail, setEmailError, strongEmailRegex)
              }
              value={email}
              error={emailError}
              color={emailError ? "" : "success"}
              helperText={emailError ? "Email inválido" : ""}
            />
            <FormControl fullWidth required variant="outlined">
              <TextField
                id="password"
                margin="normal"
                required
                fullWidth
                value={password}
                type={showPassword ? "text" : "password"}
                label="Contraseña"
                name="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <VisibilityOff
                  sx={confIcon}
                  onClick={handleClickShowPassword}
                />
              ) : (
                <Visibility sx={confIcon} onClick={handleClickShowPassword} />
              )}
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DefaultButton
                buttonText="Iniciar Sesion"
                onclick={handleSubmit}
                styles={{ margin: "1rem 0" }}
              />
            </Box>
            <Box>
              <Typography>
                No tienes una cuenta?
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "#ffc139",
                    fontWeight: "bolder",
                    marginLeft: 10,
                  }}
                >
                  Regístrate aquí
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginForm;
