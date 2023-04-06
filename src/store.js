import { configureStore } from "@reduxjs/toolkit";
import loginUserSli from "./redux/loginUserSli";
import PostSlice from "./redux/postSlice";


let store=configureStore({
    reducer:{
        loginUserManager:loginUserSli,
        postManager:PostSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
    
})
export default store;