import { Container, Paper, Tab, Tabs } from "@mui/material";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const itemsList = [
  {
    value: 0,
    name: "Usuarios",
    path: "users",
    icon: <ManageAccountsOutlinedIcon />,
  },
  {
    value: 1,
    name: "Productos",
    path: "products",
    icon: <RestaurantOutlinedIcon />,
  },
  {
    value: 2,
    name: "Pedidos",
    path: "orders",
    icon: <LocalShippingOutlinedIcon />,
  },
];

const AdminDashboard = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (location.pathname === "/admin/users") {
      setValue(0);
    } else if (location.pathname === "/admin/products") {
      setValue(1);
    } else if (location.pathname === "/admin/orders") {
      setValue(2);
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      disableGutters
      maxWidth="md"
      component={Paper}
      sx={{
        position: "sticky",
        top: { xs: 55, sm: 65 },
        backgroundColor: "white",
        zIndex: 2,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#ffc139",
            height: "4px",
          },
        }}
      >
        {itemsList.map((item, index) => (
          <Tab
            key={index}
            icon={
              <span
                style={{ color: value === item.value ? "#ffc139" : "#333333" }}
              >
                {item.icon}
              </span>
            }
            label={
              <span
                style={{ color: value === item.value ? "#ffc139" : "#333333" }}
              >
                {item.name}
              </span>
            }
            component={Link}
            to={item.path}
          />
        ))}
      </Tabs>
    </Container>
  );
};

export default AdminDashboard;
