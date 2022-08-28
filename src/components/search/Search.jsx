import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import { useDispatch } from "react-redux";
import { searchAsync } from "../../services/ApiService";
import * as Styled from "./Search.styles";
import { getExamsAsync } from "../../services/ApiService";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const tab = useSelector((state) => state.api.tab);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setSearchText(e);
    if (e.length >= 3) {
      dispatch(searchAsync(e));
    } else if (e.length === 0) {
      dispatch(getExamsAsync(1));
    }
  };

  useEffect(() => {}, [tab]);

  const handleRemoveFilter = () => {
    dispatch(getExamsAsync(1));
    setSearchText("");
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
        style={{ marginBottom: "15px", position: "relative" }}
      >
        <TextField
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
          fullWidth
          label="Sınav sorusu, not ara..."
          id="fullWidth"
          autoComplete="off"
        />
      </Box>

      {tab == "search" && (
        <HideOnScroll>
          <Styled.StyledFab onClick={() => handleRemoveFilter()}>
            <DeleteSweepOutlinedIcon />
          </Styled.StyledFab>
        </HideOnScroll>
      )}
    </>
  );
}
