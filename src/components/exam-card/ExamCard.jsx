import * as Styled from "./ExamCard.styles";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ImageIcon from "@mui/icons-material/Image";

import AppPagination from "../pagination/AppPagination";
import { useEffect, useState } from "react";

export default function ExamCard() {
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(10);
  useEffect(() => {
    //fetchdata
    console.log("sayfa değişti");
  }, [page]);
  const data = [
    {
      id: 1,
      imgUrl: "https://i.hizliresim.com/kj30ixu.jpg",
      department: "Elektrik-Elektronik Mühendisliği",
      lecture: "Enerji Dağıtım Sistemleri",
      fileType: "pdf",
      downloadCount: 200,
    },
    {
      id: 2,
      imgUrl: "https://i.hizliresim.com/kbeuu1o.jpg",
      department: "Elektrik-Elektronik Mühendisliği",
      lecture: "Uygulamalı Güç Elektroniği",
      downloadCount: 320,
      fileType: "jpeg",
    },
    {
      id: 3,
      imgUrl: "https://i.hizliresim.com/rhc0ecd.jpg",
      department: "Elektrik-Elektronik Mühendisliği",
      lecture: "Uygulamalı Güç Elektroniği",
      downloadCount: 400,
      fileType: "jpeg",
    },
  ];

  return (
    <Styled.Exams>
      {data.map((item) => (
        <Styled.ExamItem key={item.id}>
          <Styled.ExamFileInfo>
            <span>
              {item.fileType === "pdf" ? (
                <PictureAsPdfIcon variant="outlined" color="white" />
              ) : (
                <ImageIcon variant="outlined" color="white" />
              )}
            </span>
            <span>
              <VisibilityIcon variant="outlined" color="white" /> 123
            </span>
          </Styled.ExamFileInfo>
          <Styled.ExamButton
            variant="contained"
            endIcon={<FileDownloadIcon fontSize="large" />}
            fontSize="large"
          />
          <img src={item.imgUrl} alt="note" />
          <Styled.ExamItemContent>
            <Styled.StyledChip
              icon={<SchoolIcon />}
              label={item.department}
              variant="outlined"
            />
            <Styled.StyledChip
              icon={<LibraryBooksIcon />}
              label={item.lecture}
              variant="outlined"
            />
          </Styled.ExamItemContent>
        </Styled.ExamItem>
      ))}
      <AppPagination setPage={setPage} pageNumber={numberOfPages} />
    </Styled.Exams>
  );
}
