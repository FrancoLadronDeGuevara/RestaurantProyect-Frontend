import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {Paper} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../../redux/actions/userActions";
import Loader from "../../Loader/Loader";

function createData(firstname, lastname, email, active, role) {
  return { firstname, lastname, email, active, role };
}

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const rows =
    users &&
    users.map((user) =>
      createData(
        user.firstname,
        user.lastname,
        user.email,
        user.active,
        user.role
      )
    );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <TableContainer component={Paper} sx={{ overflowX: "auto", my: 2}}>
            <Table aria-label="collapsible table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Usuario</TableCell>
                  <TableCell align="left">
                    Email
                  </TableCell>
                  <TableCell align="left">
                    Activo
                  </TableCell>
                  <TableCell align="left">
                    Rol
                  </TableCell>
                  <TableCell align="center">
                    Acciones
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.firstname} {row.lastname}
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.active ? "Si" : "No"}</TableCell>
                    <TableCell align="left">{row.role == "admin" ? "Admin" : "Usuario"}</TableCell>
                    <TableCell align="center">
                      <Button>Ed</Button>
                      <Button>EL</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
};

export default Users;
