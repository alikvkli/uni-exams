import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import * as Styled from "./Navbar.styles";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/" style={{color:"unset",flexGrow:"1",textDecoration:"unset"}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dumlupınar Universitesi
            </Typography>
          </NavLink>
          <NavLink to="/not-gonder" style={{ color: "unset" }}>
            <IconButton aria-label="Not gönder" color="inherit">
              <AddCircleIcon />
            </IconButton>
          </NavLink>
          <Styled.DesktopButton color="inherit">Giriş yap</Styled.DesktopButton>
          <Styled.DesktopButton color="inherit">Kayıt ol</Styled.DesktopButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
