import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";


export const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: "20px",
  zIndex: "1",
  backgroundColor:"#1976d2",
  color:"#fff",
  "&:hover > *":{
    color:"#333333!important"
  }
}));

