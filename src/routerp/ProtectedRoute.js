import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

import { Navigate, useNavigate } from 'react-router-dom';
import { twiAuth } from '../firebase/firebaseConfigure';



export default function ProtectedRoute({children}) {
 
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
