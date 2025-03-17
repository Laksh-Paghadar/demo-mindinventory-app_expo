import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResourcesList } from '@src/services/models/resourcesList';

type ResourceListData = {
  resource: ResourcesList | null;
};

const initialState: ResourceListData = {
  resource: null,
};

export const resourceDataSlice = createSlice({
  initialState,
  name: 'resourceData',
  reducers: {
    setResourceData: (state, { payload }: PayloadAction<ResourcesList>) => {
      state.resource = payload;
    },
  },
});

export const {
  actions: { setResourceData },
  name: resourceListDataName,
  reducer: resourceListData,
} = resourceDataSlice;
