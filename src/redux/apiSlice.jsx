import { createSlice } from "@reduxjs/toolkit";
import {
  getDepartmentsAsync,
  getExamsAsync,
  getLecturesAsync,
  searchAsync,
  sendNoteAsync,
} from "../services/ApiService";

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    items: [],
    status: "idle",
    totalPage: 1,
    tab: "home",
    message: null,
    departments: [],
    lectures: [],
  },
  reducers: {
    clearMessage: (state, action) => {
      state.message = null;
    },
  },
  extraReducers: {
    //getExams
    [getExamsAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [getExamsAsync.fulfilled]: (state, action) => {
      state.items = action.payload.data;
      state.totalPage = action.payload.total_page;
      state.currentPage = action.payload.current_page;
      state.status = "succeeded";
      state.tab = "home";
    },
    [getExamsAsync.reducer]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    //search
    [searchAsync.pending]: (state, action) => {
      state.status = "loading";
    },
    [searchAsync.fulfilled]: (state, action) => {
      state.items = action.payload.data;
      state.totalPage = 1;
      state.status = "succeeded";
      state.tab = "search";
    },
    [searchAsync.reducer]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    //sendnote
    [sendNoteAsync.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.message = action.payload.message;
    },
    [sendNoteAsync.reducer]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    //getDepartments
    [getDepartmentsAsync.fulfilled]: (state, action) => {
      state.departments = action.payload;
    },
    //getLectures
    [getLecturesAsync.fulfilled]: (state, action) => {
      state.lectures = action.payload;
    },
  },
});
export const { clearMessage } = apiSlice.actions;
export default apiSlice.reducer;
