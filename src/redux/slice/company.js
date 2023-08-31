import { combineReducers, createSlice } from "@reduxjs/toolkit";

const companyProductSlice = createSlice({
  name: 'company',
  initialState: {
    data: null,
  },
  reducers: {
    addCompany(state, action) {
      state.data = action.payload
      // console.log(state.data)
    }
  }
});

export default combineReducers({
  companyProductSlice: companyProductSlice.reducer
});

export const { addCompany } = companyProductSlice.actions;