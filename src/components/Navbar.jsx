import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { SearchBar } from "./";
import Toggle from "./Toggle";
import { useState } from "react";
const Navbar = ({ setColor }) => {
  const [active, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!active);
    setColor(!active);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: active ? "#000" : "#fff",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={35} />
        <Typography
          variant="body1"
          sx={{
            color: active ? "white" : "#000",
            marginLeft: "5px",
            fontSize: "20px",
            fontWeight: "bold",
            display: { xl: "block", xs: "none" }
          }}
        >
          YouTube Clone
        </Typography>
      </Link>
      <Stack direction="row" alignItems="center">
        <Toggle handleToggle={handleToggle} />
        <SearchBar />
      </Stack>
    </Stack>
  );
};

export default Navbar;
