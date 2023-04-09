import React from 'react'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

export default function Logo(props) {
  
  return (
    <>
     <div className='logo_container'>
         <div className='logo_box '>
         <Link to={props?.path}>
           <Image src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png' alt='logo image' fluid responsive />
           </Link>   
          </div>
          </div>
    </>
  )
}
