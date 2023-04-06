import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import TweetUser from './TweetUser';
import { BsThreeDots,BsEmojiFrown,BsPersonPlus,BsChat } from "react-icons/bs";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { AiOutlineHeart,AiOutlineClose } from "react-icons/ai";
import { BiBarChart,BiVolumeMute,BiBlock,BiRepost,BiMessageRounded } from "react-icons/bi";
import { FiShare,FiBarChart2 } from "react-icons/fi";
import { RiFileListLine,RiFlag2Line,RiDeleteBin6Line,RiPushpin2Line,RiLink } from "react-icons/ri";
import { ImEmbed2 } from "react-icons/im";
import { RxPencil1 } from "react-icons/rx";
import { MdOutlineEmail,MdOutlineBookmarkAdd } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {  ref, deleteObject } from "firebase/storage";
import { twiStore,twiDB,twiColl } from '../firebase/firebaseConfigure';
import { doc, deleteDoc,getDocs } from "firebase/firestore";
import { addPost, PostThuck } from '../redux/postSlice';
import TweetReply from './TweetReply';

export default function Tweetpost(props) {
  let dispatch=useDispatch();
  const [show, setShow] = useState(false);
  const [comshow, setComShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelComShow=()=>{
    setComShow(true)
  }
  const handelComClose=()=>{
    setComShow(false)
  }
  let {logUser}=useSelector((state)=>state.loginUserManager);
 let{id,postDescription,postName,postUrl,userEmail,userImage,userName}=props.post;
 let handelDelete=async()=>{
  try{
    let storeRef=ref(twiStore,`${postName}`);
    await deleteObject(storeRef);
    await deleteDoc(doc(twiDB,'post',`${id}`));
    dispatch(PostThuck());
  }catch(err){
    console.log(err);
  }
 }


  return (
    <>
     <div className='com_post_container'>
        <div className='com_post_box'>
           <div className='com_post_wrapper'>
            <div className='com_post_user'>
              <div className='com_post_userprofile'>
                <Link>
                <TweetUser profile={userImage}/>
                </Link>
                
              </div>
            </div>
            <div className='com_post_content'>
                <div className='com_post_title_box'>
                    <div className='com_post_title_left'>
                        <div className='com_post_title_userinfo'>
                            <Link to='' className='user_name_link'><h4>{userName}</h4></Link> 
                           <Link to=''><span>@{userEmail.split("@").splice(0,1)}</span></Link> 
                            <span>9h</span>
                        </div>
                        <div className='com_post_title_postinfo'>
                            <p>{postDescription}</p>
                        </div>
                    </div>
                    <div className='com_post_title_right'>
                    <Dropdown>
                    <OverlayTrigger
                        overlay={<Tooltip className="tooltip" variant='secondary'>
                            more
                          </Tooltip>
                        }
                        placement='bottom'
                        delay={{ show: 700, hide: 0 }}
                      >
                        <Dropdown.Toggle variant="secondary" className='cmt_btn post_icon'>
                          <i><BsThreeDots/></i> 
                          <span></span>
                        </Dropdown.Toggle>
                      </OverlayTrigger>
                        
                        <Dropdown.Menu  align="end"  drop='down'>
                          <div className='tweeet_post_option_div'>
                            <div className='tweet_post_option_innerdiv'>
                              {
                                (logUser.email==userEmail)?(
                                  <div className='tweet_post_option_linkwrapper'>
                                  <Dropdown.Item to="" onClick={handleShow} className='delete_btn'><i><RiDeleteBin6Line/></i><span>Delete</span></Dropdown.Item>
                                  <Dropdown.Item to="" ><i><RiPushpin2Line/></i><span>Pin to your profile</span></Dropdown.Item>
                                  <Dropdown.Item to=""><i><RiFileListLine/></i><span>Add/remove @nypost from Lists</span></Dropdown.Item>
                                  <Dropdown.Item to="" ><i><BsChat/></i><span>Change who can reply</span></Dropdown.Item>
                                  <Dropdown.Item to="" ><i><ImEmbed2/></i><span>Embed Tweet</span></Dropdown.Item>
                                  <Dropdown.Item to="" ><i><FiBarChart2/></i><span>View Tweet analytics</span></Dropdown.Item>
                                </div>
                                ):(  
                                <div className='tweet_post_option_linkwrapper'>
                                   <Dropdown.Item to="" ><i><BsEmojiFrown/></i><span>Not interested in this Tweet</span></Dropdown.Item>
                                   <Dropdown.Item to="" ><i><BsPersonPlus/></i><span>Follow @nypost</span></Dropdown.Item>
                                   <Dropdown.Item to="" ><i><RiFileListLine/></i><span>Add/remove @nypost from Lists</span></Dropdown.Item>
                                   <Dropdown.Item to="" ><i><BiVolumeMute/></i><span>Mute @nypost</span></Dropdown.Item>
                                   <Dropdown.Item to="" ><i><BiBlock/></i><span>Block @nypost</span></Dropdown.Item>
                                   <Dropdown.Item to="" ><i><ImEmbed2/></i><span>Embed Twee</span></Dropdown.Item>
                                   <Dropdown.Item to="" ><i><RiFlag2Line/></i><span>Report Tweet</span></Dropdown.Item>
                                  </div> )
                                }
                            
                              
                           </div>
                          </div>  
                        </Dropdown.Menu>
                      </Dropdown>
                       
                    </div>
                </div>
                <div className='com_post_image_box'>
                  <div className='com_post_image_innderbox'>
                    <Image src={postUrl} fluid/>
                  </div>
                </div>
                <div className='com_post_status_box'>
                  <div className='com_post_status_moreoption'>
                    <div className='com_post_status_icon'>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={
                        <Tooltip className='tooltip' variant='secondary'>
                          Reply
                        </Tooltip>
                      }
                      delay={{ show: 700, hide: 0 }}
                    >
                      <Button variant="secondary" className='cmt_btn post_icon' onClick={handelComShow}>
                        <Link><i><BsChat/></i></Link>
                        <span>86</span>
                      </Button>
                    </OverlayTrigger>
                   
                    </div>
                    <div className='com_post_status_icon'>
                    <Dropdown  align="end">  
                    <OverlayTrigger
                      placement='bottom'
                      overlay={
                        <Tooltip className='tooltip' variant='secondary'>
                          Retweet
                        </Tooltip>
                      }
                      delay={{ show: 700, hide: 0 }}
                    >
                      <Dropdown.Toggle variant="secondary" className='retweet_btn post_icon'>
                        <Link><i><BiRepost/></i></Link>
                        <span>386</span>
                      </Dropdown.Toggle>
                    </OverlayTrigger>
                       <Dropdown.Menu   >
                        <Dropdown.Item to=""><i><BiRepost/></i><span>Retweet</span></Dropdown.Item>
                        <Dropdown.Item to=""><i><RxPencil1/></i><span>Quote Tweet</span></Dropdown.Item>
                       
                      </Dropdown.Menu>
                    </Dropdown>
                    </div>
                    <div className='com_post_status_icon'>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={
                        <Tooltip className='tooltip'  variant='secondary'>
                          Like
                        </Tooltip>
                      }
                      delay={{ show: 700, hide: 0 }}
                    >
                      <Button variant="secondary" className='like_btn post_icon'>
                        <Link><i><AiOutlineHeart/></i></Link>
                        <span>816</span>
                      </Button>
                    </OverlayTrigger>
                    </div>
                    <div className='com_post_status_icon com_post_see'>
                    <OverlayTrigger
                      placement='bottom'
                      overlay={
                        <Tooltip className='tooltip' variant='secondary'>
                          View
                        </Tooltip>
                      }
                      delay={{ show: 700, hide: 0 }}
                    >
                      <Button variant="secondary" className='cmt_btn post_icon'>
                        <Link><i><BiBarChart/></i></Link>
                        <span>86</span>
                      </Button>
                    </OverlayTrigger>
                    </div>
                    <div className='com_post_status_icon com_post_retw'>
                    <Dropdown  align="end">  
                    <OverlayTrigger
                      placement='bottom'
                      overlay={
                        <Tooltip className='tooltip'  variant='secondary'>
                          Share
                        </Tooltip>
                      }
                      delay={{ show: 700, hide: 0 }}
                    >
                      <Dropdown.Toggle variant="secondary" className='cmt_btn post_icon'>
                        <Link><i><FiShare/></i></Link>
                        <span></span>
                      </Dropdown.Toggle>
                    </OverlayTrigger>
                    <Dropdown.Menu   >
                        <Dropdown.Item to=""><i><RiLink/></i><span>Copy link to Tweet</span></Dropdown.Item>
                        <Dropdown.Item to=""><i><FiShare/></i><span>Share Tweet via...</span></Dropdown.Item>
                        <Dropdown.Item to=""><i><MdOutlineEmail/></i><span>Send via Direct Message</span></Dropdown.Item>
                        <Dropdown.Item to=""><i><MdOutlineBookmarkAdd/></i><span>Bookmark</span></Dropdown.Item>
                       
                      </Dropdown.Menu>
                    </Dropdown>
                    </div>
                  </div>
                </div>
            </div>
            </div> 
        </div>
     </div>
     <Modal size="sm" show={show} onHide={handleClose}  animation={false} centered >
       
        <Modal.Body>
          <div className='delete_modal_box'>
            <div className='delete_modal_innerbox'>
              <div className='delete_modal_top'>
              <h1>Delete Tweet?</h1>
              <p>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results. </p>
              </div>
             
              <div className='delete_modal_bottom'>
              <div className='delete_modal_yesbox'>
                <button onClick={handelDelete}>
                  <span>Delete</span>
                </button>
              </div>
              <div className='delete_modal_cancelbox'>
              <button onClick={handleClose}>
                  <span>Cancel</span>
                </button>
              </div>
              </div>
              
            </div>
          </div>
        </Modal.Body>
        
      </Modal>
      <Modal show={comshow} onHide={handelComClose} animation={false} size='lg' className='mo_twee_modal' >
        <Modal.Header >
        <OverlayTrigger
           placement='bottom'
           delay={{ show: 700, hide: 0 }}
           overlay={
            <Tooltip id={`tooltip`} variant='secondary'>
            close
           </Tooltip>
           }
           >
          <Button onClick={handelComClose}><i><AiOutlineClose/></i></Button>
          </OverlayTrigger>
        </Modal.Header>
       <Modal.Body>
        <TweetReply postId={id}/>
       </Modal.Body>
      
    </Modal>

    </>
  )
}
