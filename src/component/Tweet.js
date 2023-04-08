import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Userprofile from './Userprofile'
import { BsChevronDown,BsCardImage ,BsListUl,BsEmojiSmile} from "react-icons/bs";
import { RiEarthFill } from "react-icons/ri";
import { AiOutlineFileGif,AiOutlineClose } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { ref,uploadBytes ,getDownloadURL  } from "firebase/storage";
import { twiStore ,twiColl} from '../firebase/firebaseConfigure';
import { useSelector ,useDispatch} from 'react-redux';
import { addDoc } from "firebase/firestore"; 

import {  PostThuck } from '../redux/postSlice'


export default function Tweet() {
  
  let dispatch=useDispatch();
  let {logUser}=useSelector((state)=>state.loginUserManager);
  let tweetimage=useRef(null);
  let[post,setPost]=useState('');
  let [shareImage,setShareImage]=useState('');
  let handelPostImage=(e)=>{
    let image=e.target.files[0];
   
    e.preventDefault();
    if(!image){
      alert('please choose a image');
      return 
    }
    setShareImage(image)
  }
  let removeShareImage=()=>{
    tweetimage.current.value="";
     setShareImage("");
  }
  let handelTweetDetails=async(url,name)=>{
    
    try{
     await addDoc(twiColl,
      {
        userEmail:logUser.email,
        userName:logUser.displayName,
        userImage:logUser.photoURL,
        postDescription:post,
        postUrl:url,
        postName:name,
        date:new Date()
      });
      setPost("");
      setShareImage("");
      tweetimage.current.value="";
      dispatch(PostThuck());
  
    }catch(err){
      console.log(err);
    }
    }
  let handelTweet=async()=>{
   
    try{
       if(shareImage){
        let storeRef=ref(twiStore,`${shareImage.name}`);
        await uploadBytes(storeRef,shareImage);
        let donwURL=await getDownloadURL(storeRef);
        handelTweetDetails(donwURL,shareImage.name);
       }
    }catch(err){
      console.log(err);
    }
  }
  


  return (
    <>
     <div className='com_tweet_container'>
      <div className='com_tweet_box'>
        <div className='com_left_tweetbox'>
          <Link to=''>
           <Userprofile/>
          </Link>
        
        </div>
        <div className='com_right_tweetbox'>
          <div className='com_right_tweetbox_wrapper'>
            <div className='com_right_tweetbox_inwra'>
                <div className='com_tweet_header'>
                  <button ><span>Everyone</span><i><BsChevronDown/></i></button>
                </div>
                <div className='com_tweet_input'>
                <textarea id="tweet_title" name="tweet_title" placeholder="What's happening? "  value={post} onChange={(e)=>setPost(e.target.value)} />
                </div>
                {(shareImage)?(
                <div className='tweet_image_review_box'>
                  <div className='tweet_image_review_imagebox'>
                    <div className='tweet_image_review_imagewr'>
                      <img src={(shareImage)?(URL.createObjectURL(shareImage)):null} img-fluid/>
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
                        <Button variant="secondary"  onClick={removeShareImage}>
                       
                        <i><AiOutlineClose/></i> 
                        
                        </Button>
                    
                   </OverlayTrigger>
                      
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
            <div className='com_tweet_reply_status'>
              <button>
                
                  <i><RiEarthFill/></i><span>Everyone can reply</span>
                
              </button>
            </div>
          </div>
          <div className='com_tweet_moreoption'>
            <div className='com_tweet_moreoption_wrapper'>
              <div className='com_tweet_moreoption_left'>
                <div className='com_tweet_moreoption_input'>
                <input type="file" id="tweetimage" name="tweetimage" hidden accept='image/png, image/gif, image/jpeg ' onChange={handelPostImage} ref={tweetimage}/>
             
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
                        <label htmlFor="tweetimage">
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
                <button className={(post?.length>0||shareImage)?('tweet_btn_active'):null} onClick={handelTweet} disabled={(post?.length>0||shareImage)?false:true}><span>Tweet</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}
