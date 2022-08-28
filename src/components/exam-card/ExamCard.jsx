import { Routes, Route, Link, Outlet } from "react-router-dom";
import dateFormat from "dateformat";
import * as Styled from "./ExamCard.styles";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReportIcon from "@mui/icons-material/Report";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Stack from "@mui/material/Stack";
import ImageIcon from "@mui/icons-material/Image";
import AppPagination from "../pagination/AppPagination";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExamsAsync, downloadFileAsync } from "../../services/ApiService";
import Search from "../search/Search";

export default function ExamCard() {
  const dispatch = useDispatch();
  const exams = useSelector((state) => state.api.items);
  const totalPage = useSelector((state) => state.api.totalPage);
  const status = useSelector((state) => state.api.status);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(totalPage);

  const handleDownload = (id) => {
    /* dispatch(downloadFileAsync({url,fname}))  */
    dispatch(downloadFileAsync(id));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(getExamsAsync(page));
    }
    setNumberOfPages(totalPage);
  }, [dispatch, status, page, totalPage]);

  useEffect(() => {
    dispatch(getExamsAsync(page));
  }, [dispatch, page]);

  return (
    <>
      <Outlet />
      <Styled.Exams>
        <Search />
        {exams.length > 0 ? (
          <>
            {exams.map((item) => (
              <Styled.ExamItem key={item?.id}>
                <Styled.ExamFileInfo>
                  <Styled.LeftSide>
                    <Styled.Span>
                      <ReportIcon />
                    </Styled.Span>
                    <Styled.Span>
                      <CalendarMonthIcon />
                      {dateFormat(item?.upload_date, "dd/mm/yyyy")}
                    </Styled.Span>
                  </Styled.LeftSide>
                  <Styled.RightSide>
                    <Styled.Span>
                      {item.file_type === "pdf" ? (
                        <PictureAsPdfIcon variant="outlined" color="white" />
                      ) : (
                        <ImageIcon variant="outlined" color="white" />
                      )}
                    </Styled.Span>
                    <Styled.Span>
                      <VisibilityIcon variant="outlined" color="white" />
                      {item?.download_count}
                    </Styled.Span>
                  </Styled.RightSide>
                </Styled.ExamFileInfo>
                <Styled.ExamButton
                  variant="contained"
                  endIcon={
                    <FileDownloadIcon variant="filled" fontSize="large" />
                  }
                  fontSize="large"
                  onClick={() => handleDownload(item?.id)}
                />
                <img src={item?.img_url} alt="note" />
                <Styled.ExamItemContent>
                  <Styled.StyledChip
                    icon={<SchoolIcon />}
                    label={item?.department_name}
                    variant="outlined"
                  />
                  <Styled.StyledChip
                    icon={<LibraryBooksIcon />}
                    label={item?.lecture_name}
                    variant="outlined"
                  />
                </Styled.ExamItemContent>
              </Styled.ExamItem>
            ))}
          </>
        ) : (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="info">
              <AlertTitle>Uyarı</AlertTitle>
              Aradığınız anahtar kelimelere uygun bir veri bulunamadı.
            </Alert>
          </Stack>
        )}
        {totalPage > 1 && (
          <AppPagination
            page={page}
            setPage={setPage}
            pageNumber={numberOfPages}
          />
        )}
      </Styled.Exams>
    </>
  );
}
