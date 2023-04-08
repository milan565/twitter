import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

import Logo from './Logo'
import Menu from './Menu'
import { BsThreeDots } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';
import { twiAuth } from '../firebase/firebaseConfigure';
import {  signOut } from "firebase/auth";
import { useSelector } from 'react-redux'

export default function Header() {
  let navigate=useNavigate();
  let{logUser}=useSelector((state)=>state.loginUserManager);
 
  let handelLogOUt=async()=>{
    try{
      await signOut(twiAuth);
      navigate('/');
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <>
      <div className='header_container'>
        <div className='header_box'>
          <div className='header_innerbox'>
            <div className='top_header_content'>

                <Logo path='/home'/>
                <div className='menu_container'>
                    <Menu/>

                </div>
            </div>
            <div className='bottom_header_content'>
              <div className='header_userbtn_box'>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <div className='button_left'>
                        <div className='user_profile'>
                         
                          <img src={(logUser?.photoURL)?(logUser?.photoURL):(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRakKZ5OBynaqHLdHKWENtBoXs73kckpuDWXN_07M5XqU1XBE3lGhBRxdxx2QxjFrm8o&usqp=CAU`)}/>
                        </div>
                        <div className='user_info'>
                          <h4>{logUser?.displayName}</h4>
                          <h6>@{logUser?.email?.split("@").splice(0,1)}</h6>
                        </div>
                      </div>
                      <div className='button_right'>
                        <i><BsThreeDots/></i>
                      </div>
                  </Dropdown.Toggle>
                    
                  <Dropdown.Menu drop='up-centered'>
                    <div className='header_account_mbox'>
                      <div className='header_account_item header_account_f_item'>
            
                          <Link to=''>
                            <span>Add an existing account</span>
                            </Link>
                        
                      </div>
                      <div className='header_account_item'>
                        
                        <Link to='' onClick={handelLogOUt}>
                          <span>Log out <span>@{logUser?.email?.split("@").splice(0,1)}</span></span>
                          </Link>
          
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
