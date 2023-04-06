import React from 'react'
import { Link } from 'react-router-dom'
import { RiSettings4Line,RiSettings5Fill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Search from './Search';
import Trend from './Trend';
import Footer from './Footer';
import Signinmeth from './Signinmeth';
export default function Logbody() {
  return (
    <>
      <div className='body_container'>
        <div className='body_left_container'>
          <div className='body_left_box'>
            <div className='log_body_header'>
              <div className='log_body_header_search'>
                <Search/>
              </div>
              <div className='log_body_header_setting'>
                <button>
                  <Link to=''>
                    <i><RiSettings4Line/></i>
                  </Link>
                </button>
              </div>
            </div>
            <div className='log_trend_box'>
              <div className='log_trend_innerbox'>
                <Trend/>
              
              </div>
            </div>
          </div>   
        </div>
        <div className='body_right_container'>
          <div className='body_right_innercontainer'>
            <div className='log_signin_meth_section'>
               <div className='log_signin_meth_box'>
                <div className='log_signin_meth_api'>
                    <Signinmeth />
                </div>
                <div className='log_signin_info_box'>
                  <div className='signapi_botton_info'>
                    <p><Link to=''>Terms of Service</Link> 
                    <Link to=''>Privacy Policye</Link> 
                    <Link to=''>Cookie Policy</Link> 
                    <Link to=''>Accessibility</Link> 
                    <Link to=''>Ads info</Link> 
                    <Link to=''>More <i><BsThreeDots/></i></Link> 
                  </p>
                    <p className='twiteer_lince'>© 2023 Twitter, Inc.</p>
                  </div>
                </div>
               </div>
            </div>
           
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}
