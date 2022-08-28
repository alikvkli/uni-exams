import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch } from "react-redux";
import { clearMessage } from "../../redux/apiSlice";
export default function Notification({ message }) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    open: true,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
    dispatch(clearMessage());
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      message={message}
    />
  );
}
