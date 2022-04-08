import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, CommentsProcess, CommentPostStatus} from '../../const';

const initialState: CommentsProcess = {
  comments: [],
  isDataLoaded: false,
  commentPostStatus: CommentPostStatus.Unknown,
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
    loadError: (state, action) => {
      state.error = action.payload;
      state.isDataLoaded = false;
    },

    postCommentSuccess: (state) => {
      state.isDataLoaded = false;
      state.commentPostStatus = CommentPostStatus.Success;
    },
    postCommentRequest: (state) => {
      state.isDataLoaded = true;
      state.commentPostStatus = CommentPostStatus.Unknown;
    },
    postCommentError: (state, action) => {
      state.isDataLoaded = false;
      state.error = action.payload;
      state.commentPostStatus = CommentPostStatus.Error;
    },
  },
});

export const {loadCommentsSuccess, loadCommentsRequest, postCommentSuccess, postCommentRequest, postCommentError} = commentsProcess.actions;
