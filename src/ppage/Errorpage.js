import React from 'react'
import Rightcom from '../component/Rightcom'

export default function Errorpage() {
  return (
    <>
      <div className='bbody_container'>
        <div className='bbody_inner_container'>
            <div className='main_container'> 
            <div className='left_main_container'>
              <div className='error_left_box'>
                <div className='error_in_box'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFLSitzsIWi-EZxOmYVxwJr6wPOL1vui1SLw&usqp=CAU' alt='error profile'/>
                    <h1>404</h1>
                    <p>Page not found</p>
                </div>
              </div>
            </div>
            <div className='right_main_container'>
              <div className='error_right_box'>
                <Rightcom/>
              </div>
            </div>
            </div>
         
        </div>
        
      </div>
    </>
  )
}
