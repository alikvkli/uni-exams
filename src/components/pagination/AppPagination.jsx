import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function AppPagination({setPage,pageNumber}) {
    const handleChange = (page) =>{
        console.log(page);
        setPage(page)
        window.scroll(0,0);
    }
  return (
    <Pagination
      count={pageNumber}
      onChange={(e)=> handleChange(e.target.textContent)}
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
    />
  );
}
