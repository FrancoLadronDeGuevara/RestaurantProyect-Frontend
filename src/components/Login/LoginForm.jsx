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
import {  getUser, loginUser } from "../../redux/actions/userActions.js";
import { autoCloseAlert } from "../../utils/alerts.js";

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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || emailError)
      return alert("Por favor, rellena el formulario correctamente");

    await dispatch(loginUser({ email, password }))
    .then(() => {
      autoCloseAlert("Bienvenido", "success");
      navigate("/");
      dispatch(getUser())
    })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100dvh - 85px - 65px)",
        }}
      >
        <Box
          className="login"
          sx={{
            paddingTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "primary.main" }}>
            <LoginIcon />
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
              <button className="login-button" type="submit">
                Ingresar
              </button>
            </Box>
            <Box>
              <Typography className="link-to">
                No tienes una cuenta?
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "blue",
                    fontWeight: "bolder",
                    marginLeft: 10,
                  }}
                >
                  Regístrate
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
