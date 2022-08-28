import * as Styled from "./AppPagination.styles";
import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

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

export default function AppPagination({ page, setPage, pageNumber }) {
  const handleChange = (page) => {
    if (page) {
      setPage(Number(page));
    }
    window.scroll(0, 0);
  };
  return (
    <HideOnScroll >
      <Styled.Pagination>
        <Pagination
          count={pageNumber}
          onChange={(e) => handleChange(e.target.textContent)}
          boundaryCount={1}
          siblingCount={1}
          hidePrevButton
          hideNextButton
        />
      </Styled.Pagination>
    </HideOnScroll>
  );
}
