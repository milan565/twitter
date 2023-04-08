import React from 'react'
import Signinmeth from '../component/Signinmeth'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
import { BsThreeDots } from "react-icons/bs";
export default function Ssetting() {
  return (
    <>
        <div className='bbody_container'>
        <div className='bbody_inner_container'>
            <div className='main_container'>
              <div className='left_main_container'>
                <div className='body_left_box'>
                    <div className='sett_l_con'>
                   
                      <div className='mess_l_box'>
                        <img src='https://cdn.pixabay.com/photo/2019/02/21/01/58/under-construction-4010445_1280.jpg' alt='contruction message'/>
                        <h1> Under Construction</h1>
                      </div>
                    
                    </div>
                </div>
              </div>
              <div className='right_main_container'>
                <div className='body_right_innercontainer'>
                    <div className='sett_r_con'>
                        <div className='seet_r_box'>
                            <Signinmeth/>
                        </div>
                        <div className='seet_r_info'>
                            
                                <div className='body_right_alllink_conatainer'>
                                    <div className='body_right_alllink_wrapper'>
                                        <Link to=''>Terms of Service</Link>
                                        <Link to=''>Privacy Policy</Link>
                                        <Link to=''>Cookie Policy</Link>
                                        <Link to=''>Accessibility</Link>
                                        <Link to=''>Ads info</Link>
                                        <Link to=''>More<span><BsThreeDots/></span></Link>
                                    </div>
                                <div className='body_right_fotter'>
                                    <p>© 2023 Twitter, Inc.</p>
                                </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
