import React,{useState} from 'react'
import { GiFeather } from "react-icons/gi";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BiArrowBack } from "react-icons/bi";
import Tweetmodal from '../ccomponent/Tweetmodal';

export default function Motweet() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='mo_twe_con'>
        <div className='mo_twe_inbox'>
           <div className='tweet_btn'>
            <button onClick={handleShow}>
                <span><GiFeather/></span>
            </button>
            </div> 
        </div>
      </div>
      <Modal show={show} onHide={handleClose} className='mo_twee_modal'>
        <Modal.Header >
          <div className='mo_twee_hea'>
            <div className='preve_btn_box'>
                            <div className='preve_in_btn_box'>
                            <OverlayTrigger
                                        placement='bottom'
                                        delay={{ show: 700, hide: 0 }}
                                        overlay={
                                            <Tooltip id={`tooltip`} variant='secondary'>
                                            Back
                                            </Tooltip>
                                        }
                                        >
                                        <Button variant="secondary" className='cmt_btn post_icon' onClick={handleClose}>
                                        <Link to=''>
                                        <i><BiArrowBack/></i>
                                        </Link>
                                        </Button>
                                    </OverlayTrigger>
                            </div>
            </div>
            <div className='mo_twee_rig_hea'></div>
          </div>
        </Modal.Header>
        <Modal.Body >
            <div className='mo_twee_tweetcom'>
                <Tweetmodal handleClose={handleClose}/>
            </div>
        </Modal.Body>
       
      </Modal>
    </>
  )
}
