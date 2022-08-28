import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Styled from "./SendNote.styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  getDepartmentsAsync,
  getLecturesAsync,
  sendNoteAsync,
} from "../../services/ApiService";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Chip from "@mui/material/Chip";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useNavigate } from "react-router-dom";

export default function SendNote() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState([]);
  const [department, setDepartment] = useState("");
  const [lecture, setLecture] = useState("");
  const departments = useSelector((state) => state.api.departments);
  const lectures = useSelector((state) => state.api.lectures);
  const status = useSelector((state) => state.api.status);
  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFormSubmit = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("lecture", lecture);
    formData.append("department", department);
    dispatch(sendNoteAsync(formData));
    if (status === "succeeded") {
      setDepartment("");
      setLecture("");
      setSelectedFile([]);
    }
  };

  useEffect(() => {
    dispatch(getDepartmentsAsync());
    if (department) {
      dispatch(getLecturesAsync(department));
    }
  }, [department, lecture]);

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleLectureChange = (event) => {
    setLecture(event.target.value);
  };

  useEffect(() => {
    console.log(selectedFile.name);
  }, [selectedFile]);

  return (
    <Styled.SendNoteContainer style={{ marginTop: "100px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bölüm</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Bölüm"
          onChange={handleDepartmentChange}
        >
          {departments?.map((item) => (
            <MenuItem key={item?.id} value={item?.id}>
              {item?.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {department && (
        <FormControl fullWidth style={{ marginTop: "20px" }}>
          <InputLabel id="demo-simple-select-label">Ders</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lecture}
            label="Ders"
            onChange={handleLectureChange}
          >
            {lectures?.map((item) => (
              <MenuItem key={item?.id} value={item?.id}>
                {item?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {selectedFile?.name && (
        <Chip
          style={{ marginTop: "20px", width: "100%", height: "40px" }}
          icon={<UploadFileIcon />}
          label={selectedFile?.name}
          variant="outlined"
        />
      )}
      <Styled.ButtonContainer>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          size="large"
        >
          <input
            hidden
            accept="*"
            type="file"
            name="file"
            onChange={(e) => handleImageChange(e)}
          />
          <PhotoCamera style={{ fontSize: "48px" }} />
        </IconButton>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => handleFormSubmit()}
          disabled={department && lecture && selectedFile?.name ? false : true}
        >
          Gönder
        </Button>
      </Styled.ButtonContainer>
    </Styled.SendNoteContainer>
  );
}
