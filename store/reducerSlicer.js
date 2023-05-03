import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  RegisterData: {},
  authLoading: true,
  templetData: null
};

const reducerSlicer = createSlice({
  name: 'reducerSlicer',
  initialState,
  reducers: {
    setRegisterData: (state, action) => {
      state.RegisterData = action?.payload
    },
    setAuthLoader: (state, action) => {
      state.authLoading = action?.payload
    },
    setTempletData: (state, action) => {
      state.templetData = action?.payload
    },
    setResetAllSates: (state, action) => {
      state.RegisterData = action?.payload
      state.authLoading = action?.payload
      state.templetData = action?.payload
    },
  },

});

export const {
  setRegisterData,
  setResetAllSates,
  setTempletData,
  setAuthLoader, } = reducerSlicer.actions;
export default reducerSlicer.reducer;
