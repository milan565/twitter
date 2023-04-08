import React,{useState} from 'react'
import { Link, NavLink, useLocation  } from 'react-router-dom'
import { BsBookmark,BsBookmarkFill,BsHash,BsFillPersonFill,BsPerson } from "react-icons/bs";
import { BiHomeCircle,BiMessageRoundedDots,BiBarChart } from "react-icons/bi";
import { RiHome7Fill,RiNotification4Fill ,RiFileList2Fill,RiFileListLine} from "react-icons/ri";
import { FaHashtag } from "react-icons/fa";
import { GrNotification ,GrMail} from "react-icons/gr"
import { FiMail,FiHash } from "react-icons/fi";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { GiFeather } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Tweetmodal from '../ccomponent/Tweetmodal';

export default function Menu() {
    let location=useLocation();
    
  let [activeState,setActiveState]=useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <div className='menu_container'>
        <div className='menu_box'>
            
        <div className='menu_item'>
            <NavLink  to='/home'>
                <div className='navlink_wrapper'>
                    <div className='menuitem_iconbox'>
                        <span>{(location.pathname==='/home')?(<RiHome7Fill/>):(<BiHomeCircle/>)} </span>
                    </div>
                    <div className='menuitem_contentbox'>
                        <h2 className={`${(location.pathname==='/home')?("navitem_active"):null}`}>Home</h2>
                    </div>
                 </div>
            </NavLink>    
        </div> 
        <div className='menu_item'>
            <NavLink  to='/explore' >
                <div className='navlink_wrapper'>
                    <div className='menuitem_iconbox'>
                        <span>{(location.pathname==='/explore')?(<FaHashtag/>):(<FiHash/>)} </span>
                    </div>
                    <div className='menuitem_contentbox'>
                        <h2 className={`${(location.pathname==='/explore')?("navitem_active"):null}`}>Explore</h2>
                    </div>
                 </div>
            </NavLink>    
        </div> 
        <div className='menu_item'>
            <NavLink  to='/notification' >
                <div className='navlink_wrapper'>
                    <div className='menuitem_iconbox'>
                        <span>{(location.pathname==='/notification')?(<RiNotification4Fill/>):(<GrNotification/>)} </span>
                    </div>
                    <div className='menuitem_contentbox'>
                        <h2 className={`${(location.pathname==='/notification')?("navitem_active"):null}`}>Notification</h2>
                    </div>
                 </div>
            </NavLink>    
        </div> 
        <div className='menu_item'>
            <NavLink  to='/messages' >
                <div className='navlink_wrapper'>
                    <div className='menuitem_iconbox'>
                        <span>{(location.pathname==='/messages')?(<GrMail/>):(<FiMail/>)} </span>
                    </div>
                    <div className='menuitem_contentbox'>
                        <h2 className={`${(location.pathname==='/messages')?("navitem_active"):null}`}>Messages</h2>
                    </div>
                 </div>
            </NavLink>    
        </div> 
        <div className='menu_item'>
            <NavLink  to='/bookmarks' >
                <div className='navlink_wrapper'>
                    <div className='menuitem_iconbox'>
                        <span>{(location.pathname==='/bookmarks')?(<BsBookmarkFill/>):(<BsBookmark/>)} </span>
                    </div>
                    <div className='menuitem_contentbox'>
                        <h2 className={`${(location.pathname==='/bookmarks')?("navitem_active"):null}`}>BookMarks</h2>
                    </div>
                 </div>
            </NavLink>    
        </div> 
        <div className='menu_item'>
            <NavLink  to='/list'>
                <div className='navlink_wrapper'>
                    <div className='menuitem_iconbox'>
                        <span>{(location.pathname==='/list')?(<RiFileList2Fill/>):(<RiFileListLine/>)} </span>
                    </div>
                    <div className='menuitem_contentbox'>
                        <h2 className={`${(location.pathname==='/list')?("navitem_active"):null}`}>List</h2>
                    </div>
                 </div>
            </NavLink>    
        </div> 
        <div className='menu_item'>
            <NavLink  to='/profile' >
                <div className='navlink_wrapper'>
                    <div className='menuitem_iconbox'>
                        <span>{(location.pathname==='/profile')?(<BsFillPersonFill/>):(<BsPerson/>)} </span>
                    </div>
                    <div className='menuitem_contentbox'>
                        <h2 className={`${(location.pathname==='/profile')?("navitem_active"):null}`}>Profile</h2>
                    </div>
                 </div>
            </NavLink>    
        </div> 
        <div className='menu_item'>
        <Dropdown>
           <Dropdown.Toggle id="dropdown-basic"   >
            <NavLink   className='option_btn_extra'>
                <div className='navlink_wrapper'>
                    <div className='menuitem_iconbox'>
                        <span>{(activeState)?(<RiHome7Fill/>):(<HiOutlineDotsCircleHorizontal/>)} </span>
                    </div>
                    <div className='menuitem_contentbox'>
                        <h2 className={`${(activeState)?("navitem_active"):null}`}>More</h2>
                    </div>
                 </div>
                 
            </NavLink> 
          </Dropdown.Toggle>
          
            <Dropdown.Menu drop='up'>
            <div className='menu_md_cont'>
            <div className='menu_more_box'>
                    <div className='menu_more_t_b'>
                        <Link to=''>
                            <div className='menu_more_tb_link'>
                                <i><BiMessageRoundedDots/></i><span>Topics</span>
                            </div>
                        </Link>
                        <Link to=''>
                            <div className='menu_more_tb_link'>
                                <i><RiFileListLine/></i><span>List</span>
                            </div>
                        </Link>
                        <Link to=''>
                            <div className='menu_more_tb_link'>
                                <i><BsPerson/></i><span>Twitter Circle</span>
                            </div>
                        </Link>
                        <div className='menu_more_line'>
                            <div className='menu_line'></div>
                        </div>
                    </div>
                    <div className='menu_more_b_b'>
                     <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Creator Studio</Accordion.Header>
                            <Accordion.Body>
                              <Link ><i><BiBarChart/></i><span>Analytics</span></Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Professional Tools</Accordion.Header>
                            <Accordion.Body>
                            {/* <Link ><i><BiBarChart/></i><span>Analytics</span></Link>
                            <Link ><i><BiBarChart/></i><span>Analytics</span></Link> */}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Setting and Support</Accordion.Header>
                            <Accordion.Body>
                            
                            </Accordion.Body>
                        </Accordion.Item>
                      </Accordion> 
                    </div>
                 </div>
            </div>
         </Dropdown.Menu>
        </Dropdown>   
        </div> 
        <div className='menu_item tweet_item'>
         <div className='tweet_btn_box'>
            <button onClick={handleShow}>
                <span className='tweet_text'>Tweet</span>
                <span className='tweet_icon'><i><GiFeather/></i></span>
            </button>
      
        </div>  
        </div>
        </div>
     </div>
     <Modal show={show} onHide={handleClose} size='lg' className='menu_modal'>
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
                <Button onClick={handleClose}><i><AiOutlineClose/></i></Button>
                </OverlayTrigger>
                </Modal.Header>
                
                <Modal.Body>
                <Tweetmodal/>
                </Modal.Body>
          </Modal>
    </>
  )
}


