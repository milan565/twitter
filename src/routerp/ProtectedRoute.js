import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { twiAuth } from '../firebase/firebaseConfigure';
import { add_Login_user } from '../redux/loginUserSli';


export default function ProtectedRoute({children}) {
   let dispathch=useDispatch();
   let[user,setUser]=useState({});
   useEffect(()=>{
   let authfun=onAuthStateChanged(twiAuth,(user)=>{
      setUser(user);
      // dispathch(add_Login_user(user))
   })
   // return ()=>{
   //    authfun();
   // }
   authfun();
   },[])
  
   if(!user){
      return<Navigate to='/'/>
   }
  
   return children
}
