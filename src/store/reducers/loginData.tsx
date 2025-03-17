import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResult } from '@src/services/models/login';

type LoginData = {
  loginRes: LoginResult | null;
};

const initialState: LoginData = {
  loginRes: null,
};

export const loginSlice = createSlice({
  initialState,
  name: 'login',
  reducers: {
    setLoginResponse: (state, { payload }: PayloadAction<LoginResult>) => {
      state.loginRes = payload;
    },
  },
});

export const {
  actions: { setLoginResponse },
  reducer: loginData,
} = loginSlice;
