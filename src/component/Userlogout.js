import React from 'react'
import { useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { twiAuth } from '../firebase/firebaseConfigure';

export default function Userlogout(props) {
    let navigate=useNavigate();
    let setMoShow=props.setMoShow;
    let setShow=props.setShow;
    let handelCancel=()=>{
        setMoShow(false);
        setShow(false)
    }
    let handelLogOut=async()=>{
        try{
            await signOut(twiAuth);
            navigate('/');
          }catch(err){
            console.log(err);
          }
    }
  return (
    <>
    <div className='u_logout_container'>
        <div className='u_logout_box'>
            <div className='u_logout_header'>
                <img src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png' alt='tweeter logo'/>
            </div>
            <div className='u_logout_body'>
                <h3>Log out of Twitter?</h3>
                <p>You can always log back in at any time. If you just want to switch accounts, you can do that by adding an existing account. </p>
            </div>
            <div className='u_logout_link'>
                <div className='logout_ok_box'>
                <button onClick={handelLogOut}><span>Log out</span></button>
                </div>
                <div className='logout_cancel_box'>
                <button onClick={handelCancel}><span>Cancel</span></button>
                </div>
                
               
            </div>
        </div>
    </div>
    </>
  )
}
