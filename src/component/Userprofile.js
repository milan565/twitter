import React from 'react'
import { useSelector } from 'react-redux'

export default function Userprofile() {
let {logUser}=useSelector((state)=>state.loginUserManager);
  return (
    <>
     <div className='com_userprofile_container'>
        <div className='com_userprofile_box'>
          <img src={(logUser?.photoURL)?(logUser.photoURL):(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRakKZ5OBynaqHLdHKWENtBoXs73kckpuDWXN_07M5XqU1XBE3lGhBRxdxx2QxjFrm8o&usqp=CAU`)} />
        </div>
     </div>
    </>
  )
}
