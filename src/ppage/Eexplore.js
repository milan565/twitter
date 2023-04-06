import React, { useState } from 'react'
import Search from '../component/Search'
import { Link } from 'react-router-dom'
import { RiSettings4Line,RiSettings5Fill } from "react-icons/ri";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Trend from '../component/Trend';
import { BsThreeDots } from "react-icons/bs";
import Signinmeth from '../component/Signinmeth';
import Followcon from '../component/Followcon';
import MoUserporfile from '../component/MoUserporfile';
import Motweet from '../component/Motweet';


export default function Eexplore() {
  let[explo,setExplo]=useState(true);
  return (
    <>
        <div className='bbody_container'>
        <div className='bbody_inner_container'>
            <div className='main_container'>
              <div className='left_main_container'>
                <div className='body_left_box'>
                   <div className='explore_container_left'>
                     <div className='explore_left_header'>
                       <div className='explore_left_header_box'>
                        <div className='mobile_header'>
                          <MoUserporfile/>
                        </div>
                         <div className='explore_search'>
                         <Search/>
                         </div>
                         <div className='explore_left_header_seeting'>
                            <OverlayTrigger
                                    placement='bottom'
                                    delay={{ show: 700, hide: 0 }}
                                    overlay={
                                        <Tooltip id={`tooltip`} variant='secondary'>
                                        Setting
                                        </Tooltip>
                                    }
                                    >
                                    <Button variant="secondary" className='cmt_btn post_icon'>
                                      <Link to=''>
                                      <i><RiSettings4Line/></i>
                                    </Link>
                                    </Button>
                                 </OverlayTrigger>
                       
                         </div>
                       </div>
                      
                     </div>
                     <div className='explore_left_main'>
                      <div className='explore_left_trendbox'>
                        <div className='explore_left_trendbox_innerbox'>
                          <Trend/>
                        </div>
                      </div>
                     </div>
                   </div>
                </div>
              </div>
              <div className='right_main_container'>
                <div className='body_right_innercontainer'>
                   <div className='explore_container_right'>
                      <div className='explore_right_box'>
                        {(explo)?(<div className='explore_follow_box'>
                          <div className='body_right_treand_container '>
                          <div className='body_right_trendbox'>
                          <Followcon/>
                          </div>
                          </div>
                        </div>):(
                          <div className='explore_login_box'>
                             <div className='log_signin_meth_api'>
                              <Signinmeth />
                              </div>
                          </div>
                        )}
                        
                        
                        <div className='explore_more_info'>
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
            </div>
        </div>
        <Motweet/>
      </div>
    </>
  )
}
