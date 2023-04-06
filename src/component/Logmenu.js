import React,{useState} from 'react'
import { NavLink, useLocation  } from 'react-router-dom'
import { RiSettings4Line,RiSettings5Fill } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import { FiHash } from "react-icons/fi";


export default function Logmenu() {
    let location=useLocation();
    
  
  return (
    <>
     <div className='menu_container'>
        <div className='menu_box'>
            
        <div className='menu_item'>
            <NavLink  to='/' >
                <div className='navlink_wrapper'>
                    <div className='menuitem_iconbox'>
                        <span>{(location.pathname==='/')?(<FaHashtag/>):(<FiHash/>)} </span>
                    </div>
                    <div className='menuitem_contentbox'>
                        <h2 className={`${(location.pathname==='/')?("navitem_active"):null}`}>Explore</h2>
                    </div>
                 </div>
            </NavLink>    
        </div> 
        <div className='menu_item'>
            <NavLink  to='/setting' >
                <div className='navlink_wrapper'>
                    <div className='menuitem_iconbox'>
                        <span>{(location.pathname==='/setting')?(<RiSettings5Fill/>):(<RiSettings4Line/>)} </span>
                    </div>
                    <div className='menuitem_contentbox'>
                        <h2 className={`${(location.pathname==='/setting')?("navitem_active"):null}`}>Settings</h2>
                    </div>
                 </div>
            </NavLink>    
        </div> 
      
        </div>
     </div>
    </>
  )
}
