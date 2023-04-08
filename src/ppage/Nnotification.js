import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { RiSettings4Line } from "react-icons/ri";
import Notificationitem from '../component/Notificationitem';
import Rightcom from '../component/Rightcom';
import MoUserporfile from '../component/MoUserporfile';
import Motweet from '../component/Motweet';

export default function Nnotification() {
  return (
    <>
      <div className='bbody_container'>
        <div className='bbody_inner_container'>
            <div className='main_container'>
              <div className='left_main_container'>
                <div className='body_left_box'>
                    <div className='nl_container'>
                      <div className='nl_box'>
                        <div className='nl_header_box'>
                          <div className='nl_t_header_box nl_th_b'>
                            <div className='nl_mo_menu'>
                              <MoUserporfile/>
                            </div>
                            <div className='nl_t_header_title'>
                              <Link to=''>
                              <h3>Notifications</h3>
                              </Link>
                              
                            </div>
                            <div className='nl_t_header_btn'>
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
                          <div className='nl_b_header_box'>
                            <div className='nl_b_item nl_b_first'>
                              <Link to='' className='active'>
                                  <div className='nl_b_inner_item'>
                                    <span>All</span>
                                    <div className='nl_b_underline'></div>
                                  </div>
                              </Link>
                            </div>
                            <div className='nl_b_item nl_b_second'>
                              <Link to=''>
                              <div className='nl_b_inner_item'>
                                    <span>Verified</span>
                                    <div className='nl_b_underline nl_b_underline_none'></div>
                                  </div>
                             
                              </Link>
                            </div>
                            <div className='nl_b_item nl_b_third'>
                              <Link to=''>
                              <div className='nl_b_inner_item'>
                                    <span>Mentions</span>
                                    <div className='nl_b_underline nl_b_underline_none'></div>
                                  </div>
                          
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className='nl_body_box'>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                          <Notificationitem/>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className='right_main_container'>
                <div className='body_right_innercontainer'>
                  <div className='notification_right_box'>
                    <Rightcom/>
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
