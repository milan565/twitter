import { createSlice } from "@reduxjs/toolkit";
let initial={
    logUser:{}
};
let loginUserSli=createSlice({
    name:'loginUserManager',
    initialState:initial,
    reducers:{
     add_Login_user:(state,action)=>{
        // console.log(action.payload);
        state.logUser={...action.payload}
     }
    }
})

export default loginUserSli.reducer;
export let {add_Login_user}=loginUserSli.actions;
