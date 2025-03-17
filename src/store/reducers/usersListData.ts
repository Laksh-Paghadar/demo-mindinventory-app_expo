import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserListResult } from '@src/services';

type UsersListData = {
  users: UserListResult | null;
};

const initialState: UsersListData = {
  users: null,
};

export const usersDataSlice = createSlice({
  initialState,
  name: 'usersData',
  reducers: {
    resetUsersListData: () => initialState,
    setUsersListData: (state, { payload }: PayloadAction<UserListResult>) => {
      state.users = payload;
    },
  },
});

export const {
  actions: { resetUsersListData, setUsersListData },
  name: usersListDataName,
  reducer: usersListData,
} = usersDataSlice;
