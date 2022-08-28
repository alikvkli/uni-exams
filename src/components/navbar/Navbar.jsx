import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import * as Styled from "./Navbar.styles";

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dumlupınar Universitesi
          </Typography>
          <Styled.Search>
            <Styled.SearchIconWrapper>
              <SearchIcon />
            </Styled.SearchIconWrapper>
            <Styled.StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Styled.Search>
          <Styled.DesktopButton color="inherit">Giriş yap</Styled.DesktopButton>
          <Styled.DesktopButton color="inherit">Kayıt ol</Styled.DesktopButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
