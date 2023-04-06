import React, { useState } from 'react'
import { NavLink  } from 'react-router-dom'

export default function Menuitem(props) {
    let [activeState,setActiveState]=useState(false)
    let title=props.title;
    let NormalIcon=props.normalIcon;
    let BoldIcon=props.boldIcon;
  return (
    <>
     <div className='menu_item'>
    <NavLink  to={title.toLowerCase()} className={({isActive})=>isActive?(setActiveState(true)):setActiveState(false)}>
        <div className='navlink_wrapper'>
            <div className='menuitem_iconbox'>
                <span>{(activeState)?(<BoldIcon/>):(<NormalIcon/>)} </span>
            </div>
            <div className='menuitem_contentbox'>
                <h2 className={`${(activeState)?("navitem_active"):null}`}>{title}</h2>
            </div>
     </div>
    </NavLink>    
    </div> 
    </>
  )
}
