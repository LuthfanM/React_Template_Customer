// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { SV_GET_TOKEN } from '../utility/axios/pathApi';
import api from '../utility/axios/api';

export const getLogin = createAsyncThunk(SV_GET_TOKEN, async (payload) => {
  console.log("CALLED");
  let item = {
    clientId: "cloe-ext-login",
    username: "admin-cust",
    password: "123",
    grantType: "password",
    // ...payload
  }
  api.post(SV_GET_TOKEN, item)
  .then(response=>{
    console.log("nilai res"+JSON.stringify(response));
    return { 
      credential: response
    }
  }).catch(error=>{
    console.log("Error Happen When getLogin "+JSON.stringify(item));
  })
})

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: "",
    credential: {}
  },
  reducers: {
    handleToken: (state, action) => {
      state.token = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getLogin.fulfilled, (state, action) => {
        state.credential = action.payload.response
      })
  }
})

export const { handleToken } = loginSlice.actions

export default loginSlice.reducer
