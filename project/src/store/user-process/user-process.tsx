import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../const';
import {UserProcess} from '../../const';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  },
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },

    loadDataLogin: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {requireAuthorization, loadDataLogin} = userProcess.actions;
