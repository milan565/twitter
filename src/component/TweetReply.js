import React, { useState,useRef } from 'react'
import TweetUser from './TweetUser'
import { useSelector } from 'react-redux';
import { Link,NavLink } from 'react-router-dom';
import { BsCardImage ,BsListUl,BsEmojiSmile} from "react-icons/bs";

import { AiOutlineFileGif,AiOutlineClose } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function TweetReply(props) {
  let postImgRef=useRef(null);
  let postId=props.postId;
  let [postCom,setPostCom]=useState("");
  let [postComImage,setPostComImage]=useState(null);
  let {logUser}=useSelector((state)=>state.loginUserManager);
  let {allPost}=useSelector((state)=>state.postManager);
  let [post]=allPost.filter((item)=>item.id===postId);

  let handelComImage=(e)=>{
    let image=e.target.files[0];
   
    e.preventDefault();
    if(!image){
      alert('please choose a image');
      return 
    }
    setPostComImage(image)
  }
  let handelComment=()=>{

  }
  let removeComImage=()=>{
    setPostComImage("");
    postImgRef.current.value='';
  }

  return (
    <>
     <div className='tweet_reply_container'>
        <div className='tweet_reply_box'>
          <div className='tw_re_com_container tw_re_owner_content'>
            <div className='tw_re_com_left tw_re_left_container'>
              <div className='tw_re_com_profilebox tw_re_com_owerprofile'>
                <TweetUser profile={post.userImage}/>
              </div>
              <div className='tw_re_com_linebox'></div>
            </div>
            <div className='tw_re_com_right tw_re_right_container'>
              <div className='tw_re_post_info'>
                <div className='tw_re_post_usrinfo'>
                  <h3>{post.userName}</h3>
                  <h4>@{post?.userEmail.split("@").splice(0,1)}</h4>
                </div>
                <div className='tw_re_post_des'>
                  <p>{post.postDescription}</p>
                </div>
                <div className='tw_re_post_user_email'>
                  <Link to=''>Replying to<span>@{post?.userEmail.split("@").splice(0,1)}</span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='tw_re_com_container tw_re_user_content'>
             <div className='tw_re_com_left tw_re_left_container'>
                <div className='tw_re_com_profilebox'>
                <TweetUser profile={logUser.photoURL}/>
             </div>
             </div>
            <div className='tw_re_com_right tw_re_right_container'>
              <dic className='tw_re_input_container'>
                <div className='tw_re_input_top'>
                  <div className='tw_re_input_topbox'>
                    <div className='com_tweet_input'>
                    <textarea id="tweet_title" name="tweet_title" placeholder="Tweet your reply " autoFocus value={postCom} onChange={(e)=>setPostCom(e.target.value)}/>
                    </div>
                  </div>
                  {(postComImage)?(
                  <div className='tweet_image_review_box'>
                  <div className='tweet_image_review_imagebox'>
                    <div className='tweet_image_review_imagewr'>
                      <img src={(postComImage)?(URL.createObjectURL(postComImage)):null} img-fluid alt='tweet post'/>
                      <div className='tweet_image_review_close'>
                      <OverlayTrigger
                        placement='bottom'
                        delay={{ show: 700, hide: 0 }}
                        overlay={
                          <Tooltip id={`tooltip`} variant='secondary'>
                            close
                          </Tooltip>
                        }
                      > 
                        <Button variant="secondary"  onClick={removeComImage}>
                       
                        <i><AiOutlineClose/></i> 
                        
                        </Button>
                    
                   </OverlayTrigger>
                        {/* <button onClick={removeShareImage}>
                          <i><AiOutlineClose/></i>
                        </button> */}
                      </div>
                    </div>
                    
                  </div>
                  <div className='tweet_image_review_link '>
                    <div className='tweet_image_tag tweet_image_showlink'>
                      <Link to=''><i><MdOutlinePersonOutline/></i><span>Tag people</span></Link>
                    </div>
                    <div className='tweet_image_description tweet_image_showlink'>
                    <Link to=''><i><RiFileListLine/></i><span>Add description</span></Link>
                    </div>
                  </div>
                </div>):null}
                </div>
                <div className='tw_re_input_bottom com_tweet_moreoption'>
                   <div className='com_tweet_moreoption_wrapper'>
                    <div className='com_tweet_moreoption_left'>
                      <div className='com_tweet_moreoption_input'>
                      <input type="file" id="commentimage" name="commentimage" hidden accept='image/png, image/gif, image/jpeg ' onChange={handelComImage} ref={postImgRef} />
                  
                        <OverlayTrigger
                              placement='bottom'
                              delay={{ show: 700, hide: 0 }}
                              overlay={
                                <Tooltip id={`tooltip`} variant='secondary'>
                                  media
                                </Tooltip>
                              }
                            > 
                              <Button variant="secondary" className='cmt_btn post_icon'>
                              <label htmlFor="commentimage">
                              <i><BsCardImage/></i> 
                              </label>  
                              </Button>
                          
                        </OverlayTrigger>
                        
                      </div>
                      <div className='com_tweet_moreoption_icon'>
                          <OverlayTrigger
                              placement='bottom'
                              delay={{ show: 700, hide: 0 }}
                              overlay={
                                <Tooltip id={`tooltip`} variant='secondary'>
                                  GIF
                                </Tooltip>
                              }
                            >
                              <Button variant="secondary" className='cmt_btn post_icon'>
                                <NavLink to=''><i><AiOutlineFileGif/></i></NavLink>
                                <span></span>
                              </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                              placement='bottom'
                              delay={{ show: 700, hide: 0 }}
                              overlay={
                                <Tooltip id={`tooltip`} variant='secondary'>
                                  poll
                                </Tooltip>
                              }
                            >
                              <Button variant="secondary" className='cmt_btn post_icon'>
                              <NavLink to=''><i><BsListUl/></i></NavLink>
                                <span></span>
                              </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                              placement='bottom'
                              delay={{ show: 700, hide: 0 }}
                              overlay={
                                <Tooltip id={`tooltip`} variant='secondary'>
                                  Emoji
                                </Tooltip>
                              }
                            >
                              <Button variant="secondary" className='cmt_btn post_icon'>
                              <NavLink to=''><i><BsEmojiSmile/></i></NavLink>
                                <span></span>
                              </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                              placement='bottom'
                              delay={{ show: 700, hide: 0 }}
                              overlay={
                                <Tooltip id={`tooltip`} variant='secondary'>
                                  Schedule
                                </Tooltip>
                              }
                            >
                              <Button variant="secondary" className='cmt_btn post_icon'>
                              <NavLink to=''><i><BiCalendarEvent/></i></NavLink>
                                <span></span>
                              </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                              placement='bottom'
                              delay={{ show: 700, hide: 0 }}
                              overlay={
                                <Tooltip id={`tooltip`} variant='secondary'>
                                  Schedule
                                </Tooltip>
                              }
                            >
                              <Button variant="secondary" className='cmt_btn post_icon' disabled>
                              <i><HiOutlineLocationMarker/></i>
                                <span></span>
                              </Button>
                          </OverlayTrigger>
                      
                      </div>
                    </div>
                    <div className='com_tweet_moreoption_right'>
                      <button className={(postCom?.length>0||postComImage)?('tweet_btn_active'):null} onClick={handelComment} disabled={(postCom?.length>0||postComImage)?false:true}><span>Reply</span></button>
                    </div>
                  </div>
                </div>
              </dic>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}
