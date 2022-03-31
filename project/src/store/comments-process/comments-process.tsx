import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {CommentsProcess} from '../../const';

const initialState: CommentsProcess = {
  comments: [],
  comment: '',
  rating: 0,
  isDataLoaded: false,
  error: '',
};

export const commentsProcess = createSlice({
  name: NameSpace.comments,
  initialState,
  reducers: {
    loadCommentsSuccess: (state, action) => {
      state.comments = action.payload;
      state.isDataLoaded = false;
    },
    loadCommentsRequest: (state) => {
      state.isDataLoaded = true;
    },

    postCommentSuccess: (state, action) => {
      state.comments = action.payload;
      // state.comments = state.comments.push(action.payload);
    },
    postCommentRequest: (state, action) => {
      state.error = action.payload;
    },

    loadError: (state, action) => {
      state.error = action.payload;
      state.isDataLoaded = false;
    },
  },
});

export const {loadCommentsSuccess, loadCommentsRequest} = commentsProcess.actions;
