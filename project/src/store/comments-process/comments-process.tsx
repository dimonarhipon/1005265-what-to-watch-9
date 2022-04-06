import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {CommentsProcess} from '../../const';

const initialState: CommentsProcess = {
  comments: [],
  isDataLoaded: false,
  error: '',
};

export const commentsProcess = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {
    loadCommentsSuccess: (state, action) => {
      state.comments = action.payload;
      state.isDataLoaded = false;
    },
    loadCommentsRequest: (state) => {
      state.isDataLoaded = true;
    },

    postCommentSuccess: (state) => {
      state.isDataLoaded = false;
    },
    postCommentRequest: (state) => {
      state.isDataLoaded = true;
    },

    loadError: (state, action) => {
      state.error = action.payload;
      state.isDataLoaded = false;
    },
  },
});

export const {loadCommentsSuccess, loadCommentsRequest, postCommentSuccess, postCommentRequest} = commentsProcess.actions;
