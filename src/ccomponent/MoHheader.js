import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link,useLocation } from 'react-router-dom';
import { BiHomeCircle,BiSearch } from "react-icons/bi";
import { RiHome7Fill ,RiNotification4Fill} from "react-icons/ri";
import { GrNotification ,GrMail} from "react-icons/gr"
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function MoHheader() {
    let location=useLocation();
    let{logUser}=useSelector((state)=>state.loginUserManager);
  return (
    <>{(logUser)?(
      <div className='mo_he_cont'>
        <div className='mo_he_in_cont'>
            <div className='mo_he_box'>
            <OverlayTrigger
                placement='top'
                 delay={{ show: 700, hide: 0 }}
                 overlay={
                 <Tooltip id={`tooltip`} variant='secondary'>
                 Home
                 </Tooltip>
                }
                 >
                <Button variant="secondary" className='mo_he_btn' >
                <Link to='/home'><span>{(location.pathname==='/home')?(<RiHome7Fill/>):(<BiHomeCircle/>)}</span></Link>
                 </Button>
             </OverlayTrigger>
             <OverlayTrigger
                placement='top'
                 delay={{ show: 700, hide: 0 }}
                 overlay={
                 <Tooltip id={`tooltip`} variant='secondary'>
                 Explore
                 </Tooltip>
                }
                 >
                <Button variant="secondary" className='mo_he_btn' >
                <Link to='/explore'><span>{(location.pathname==='/explore')?(<FaSearch/>):(<BiSearch/>)}</span></Link>
                 </Button>
             </OverlayTrigger>
             <OverlayTrigger
                placement='top'
                 delay={{ show: 700, hide: 0 }}
                 overlay={
                 <Tooltip id={`tooltip`} variant='secondary'>
                 notificatios
                 </Tooltip>
                }
                 >
                <Button variant="secondary" className='mo_he_btn' >
                <Link to='/notification'><span>{(location.pathname==='/notification')?(<RiNotification4Fill/>):(<GrNotification/>)}</span></Link>
                 </Button>
             </OverlayTrigger>
             <OverlayTrigger
                placement='top'
                 delay={{ show: 700, hide: 0 }}
                 overlay={
                 <Tooltip id={`tooltip`} variant='secondary'>
                 messages
                 </Tooltip>
                }
                 >
                <Button variant="secondary" className='mo_he_btn' >
                <Link to='/messages'><span>{(location.pathname==='/messages')?(<GrMail/>):(<FiMail/>)}</span></Link>
                 </Button>
             </OverlayTrigger>
            </div>
        </div>
      </div>
      ):null}
    </>
  )
}
