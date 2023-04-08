import React from 'react'
import Rightcom from '../component/Rightcom'

export default function Llist() {
  return (
    <>
       <div className='bbody_container'>
        <div className='bbody_inner_container'>
            <div className='main_container'>
              <div className='left_main_container'>
                <div className='body_left_box'>
                  <div className='list_l_con'>
                  <div className='mess_l_box'>
                        <img src='https://cdn.pixabay.com/photo/2019/02/21/01/58/under-construction-4010445_1280.jpg' alt='contruction profile'/>
                        <h1> Under Construction</h1>
                      </div>
                  </div>
                </div>
              </div>
              <div className='right_main_container'>
                <div className='body_right_innercontainer'>
                  <div className='list_r_con'>
                    <Rightcom/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>  
    </>
  )
}
