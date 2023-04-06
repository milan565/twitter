import React, { useRef, useState } from 'react'
import Search from '../component/Search'
import Followcon from '../component/Followcon'
import Trend from '../component/Trend'
import { Link } from 'react-router-dom'
import { BsThreeDots } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BiArrowBack } from "react-icons/bi";
import Userprofilecom from '../component/Userprofilecom'
import { useSelector } from 'react-redux'
import Tweetpost from '../component/Tweetpost'

export default function Pprofile() {
  let proref=useRef(null);
  let {allPost}=useSelector((state)=>state.postManager);
  let{logUser}=useSelector((state)=>state.loginUserManager);
  let userPost=allPost.filter((post)=>post.userEmail===logUser.email);
  let [rightPos,setRightPos]=useState(false);
  let scrollFun=()=>{
    if(proref?.current?.clientHeight-window.scrollY<=720){
      setRightPos(true)
    }
    else{
      setRightPos(false)
    }
  }
  window.addEventListener('scroll',scrollFun);
  
  return (
    <>
       <div className='bbody_container'>
        <div className='bbody_inner_container'>
            <div className='main_container'>
              <div className='left_main_container'>
                <div className='body_left_box'>
                    <div className='profile_l_con'>
                      <div className='profile_l_box'>
                        <div className='profile_l_header'>
                          <div className='profile_l_h_ib'>
                            <div className='p_l_h_inner_ib'>
                            <OverlayTrigger
                                    placement='bottom'
                                    delay={{ show: 700, hide: 0 }}
                                    overlay={
                                        <Tooltip id={`tooltip`} variant='secondary'>
                                        Back
                                        </Tooltip>
                                    }
                                    >
                                    <Button variant="secondary" className='cmt_btn post_icon'>
                                      <Link to='/home'>
                                      <i><BiArrowBack/></i>
                                    </Link>
                                    </Button>
                                 </OverlayTrigger>
                            </div>
                          </div>
                          <div className='profile_l_h_ub'>
                            <Link to=''>
                              <div className='profile_l_h_userinfo'>
                                <h3>{logUser.displayName}</h3>
                                <p>{userPost?.length}<span>Tweet</span></p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className='profile_l_user_pb'>
                          <div className='p_l_user_p_box'>
                            <Userprofilecom/>
                          </div>
                        </div>
                        <div className='profile_l_user_op'>
                          <Link to=''>
                            <div className='l_user_link'>
                              <div className='l_user_link_text'><span>Tweets</span></div>
                              <div className='l_user_link_un'></div>
                            </div>
                             </Link>
                          <Link to=''>
                             <div className='l_user_link'>
                              <div className='l_user_link_text'><span className='deactive'>Replies</span></div>
                              <div className='l_user_link_un deact' ></div>
                            </div>
                          </Link>
                          <Link to=''>
                            <div className='l_user_link'>
                              <div className='l_user_link_text'><span className='deactive'>Media</span></div>
                              <div className='l_user_link_un deact'></div>
                            </div>
                          </Link>
                          <Link to=''>
                          <div className='l_user_link'>
                              <div className='l_user_link_text'><span className='deactive'>Likes</span></div>
                              <div className='l_user_link_un deact'></div>
                            </div>
                          </Link>
                        </div>
                         <div className='profile_l_user_post'>
                        {
                          userPost.map((post)=>{
                            return(
                              <Tweetpost post={post} key={post.id}/>
                            )
                          })
                        }
                          </div> 
                      </div>
                    </div>
                </div>
              </div>
              <div className='right_main_container'>
                <div className='body_right_innercontainer'>
                <div className='profile_r_con'>
                  <div className='profile_r_header'>
                    <Search/>
                  </div>
                  <div className='profile_r_wrapper' ref={proref} style={
                    (rightPos)?{position:"sticky",top:-(proref?.current?.clientHeight-720)}:null}>
                    <div className='profile_r_follow_box'>
                      <div className='profile_r_f_inbox'>
                        <Followcon title='You might like'/>
                      </div>
                    </div>
                    <div className='profile_r_trend_box'>
                      <div className='profile_r_trend_ibox'>
                        <Trend/>
                      </div>
                    </div>
                    <div className='profile_r_info_box'>
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
      </div>  
    </>
  )
}



