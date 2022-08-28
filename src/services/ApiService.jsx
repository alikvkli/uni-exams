import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import fileDownload from "js-file-download";

export const getDepartmentsAsync = createAsyncThunk(
  "api/getDepartmentsAsync",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/getDepartments`
    );
    return res.data;
  }
);

export const getLecturesAsync = createAsyncThunk("api/getLecturesAsync", async(id) => {
  const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/getLectures/${id}`);
  return res.data;
})

export const getExamsAsync = createAsyncThunk(
  "api/getExamsAsync",
  async (page) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/getExams/${page}`
    );
    return res.data;
  }
);

export const searchAsync = createAsyncThunk("api/searchAsync", async (item) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/search`,
    { search: item }
  );
  return res.data;
});

export const sendNoteAsync = createAsyncThunk("api/sendNoteAsync", async(item) => {
  const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/uploadfile`,item,item.name)
  return res.data;
})

/* export const downloadFileAsync = createAsyncThunk("api/downloadFileAsync", async({url, fname}) => {
  const res = await axios.get(`${url}`, {responseType: 'blob'});
  fileDownload(res.data, fname)
}) */

export const downloadFileAsync = createAsyncThunk("api/downloadFileAsync", async(id) => {
  const res = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/downloadFile`, {id:id});
  const img = await axios.get(res.data.imgUrl, {responseType: 'blob'});
  fileDownload(img.data, res.data.filename);
})