import React from 'react'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

export default function Logo(props) {
  
  return (
    <>
     <div className='logo_container'>
         <div className='logo_box '>
         <Link to={props?.path}>
           <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' alt='logo image' fluid responsive />
           </Link>   
          </div>
          </div>
    </>
  )
}
