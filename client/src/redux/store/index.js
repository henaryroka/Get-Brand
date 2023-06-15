import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import UserSlice from '../reducers/userSlice'



const reducer = combineReducers({
  user: UserSlice,
  
});

const store = configureStore({
  reducer
 
});

export default store;
