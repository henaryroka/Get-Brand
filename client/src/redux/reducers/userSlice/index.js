import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token:''
};

//What is createSlice in Redux Toolkit?
//createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name. 

// In Redux-Toolkit, the createSlice method helps us create a slice of the redux-store.
const UserserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeToken:(state,actions)=>{
state.token = actions.payload.token
    },
}
});

export const { changeToken } = UserserSlice.actions;
export default UserserSlice.reducer;
