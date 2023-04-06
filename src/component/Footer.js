import React from 'react'
import Logincom from './Logincom'

export default function Footer() {
  return (
    <>
     <div className='footer_section'>
        <div className='footer_container'>
         <div className='container_wrapper'>
            <div className='left_container footer_left_container'>
            </div>
            <div className='right_container footer_right_container'>
                <div className='body_container'>
                    <div className='body_left_container footer_body_left_container'>
                        <div className='body_left_box footer_left'>
                            <div className='footer_left_text_box'>
                                <h1> Don’t miss what’s happening</h1>
                                <h4>People on Twitter are the first to know.</h4>
                            </div>
                            <div className='footer_left_link_box'>
                               <div className='footer_left_link_inner_box'>
                                  <div className='footer_right_link_wrapperbox'>
                                      <Logincom/>
                                  </div>
                               </div>
                             
                            </div>
                        </div>    
                    </div>
                   <div className='body_right_container footer_right' >
                     <div className='body_right_innercontainer'>
                        <div className='footer_right_link_box'>
                            <div className='footer_right_link_wrapperbox'>
                                <Logincom/>
                            </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
       </div> 
    </div>
    </>
  )
}
