
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {  getDocs } from "firebase/firestore";
import { twiColl} from '../firebase/firebaseConfigure';

let initial={
    allPost:[]
}
let PostSlice=createSlice({
    name:'postManager',
    initialState:initial,
    reducers:{
      // addPost:(state,action)=>{
      //  state.allPost=action.payload;
      // }
      },
     extraReducers:(builder)=>{
      builder.addCase(PostThuck.fulfilled,(state,actions)=>{
        
        state.allPost=actions.payload
      })
     }
     
    
})
export default PostSlice.reducer;
export let {addPost}=PostSlice.actions;

export let PostThuck=createAsyncThunk('post/fetch',async()=>{
  let postList=[];
          try{
              let fetchPost=await getDocs(twiColl);
              fetchPost.forEach((doc)=>{
                postList.push({id:doc.id,...doc.data()})
              })
              
              return postList;
          }catch(err){
              console.log(err);
          }
})

