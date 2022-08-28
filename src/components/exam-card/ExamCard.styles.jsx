import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import Chip from "@mui/material/Chip";

export const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "#fff",
  span: {
    fontWeight: "500",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    ":not(:last-child)": {
      marginRight: "10px",
    },
  },
}));

export const ExamButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "#fff",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: "1",
  height: "50px",
  color: "#333333",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    top: "unset",
    bottom: "0",
    zIndex: "1",
  },
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

export const Exams = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    "&:last-child": {
      marginBottom: "60px",
    },
  },
}));

export const ExamItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.32)",
  width: "100%",
  height: "100%",
  borderRadius: "6px",
  position: "relative",
  img: {
    borderRadius: "6px",
    width: "100%",
    height: "500px",
    objectFit: "cover",
  },
  "&:not(:last-child)": {
    marginBottom: "15px",
  },
  "&:hover > button": {
    display: "inline-flex",
  },
  "&:hover > div": {
    marginBottom: "30px",
    transition: "margin 0.3s",
  },
}));

export const ExamItemContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: "0",
  padding: "16px",
  backgroundColor: "rgba(0,0,0,0.16)",
  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  width: "100%",
  height: "100px",
  flexFlow: "wrap",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    flexDirection: "column",
    flexFlow: "column",
    height: "150px",
    marginBottom: "30px",
  },
}));

export const ExamFileInfo = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  backgroundColor: "rgba(0,0,0,0.16)",
  padding: "16px",
  top: "0",
  left: "0",
  width: "100%",
  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  justifyContent: "space-between",
}));

export const Span = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "#fff",
  textOverflow: "ellipsis",
  "&:not(:last-child)": {
    marginRight: "10px",
  },
  ".MuiSvgIcon-root:last-child": {
    marginRight: "10px",
  },
}));

export const RightSide = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const LeftSide = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
