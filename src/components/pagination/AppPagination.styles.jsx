import { styled } from "@mui/material/styles";

export const Pagination = styled("div")(({ theme }) => ({
  position: "fixed",
  zIndex:"1",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "#1976d2",
  height:"50px",
  display:"flex",
  alignItems:"center",
  justifyContent: "center",
  borderTopLeftRadius:"6px",
  borderTopRightRadius:"6px",
  "li button": {
    color:"#fff"
  }
}));
