import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { signInWithPopup } from "firebase/auth";
import { twiAuth ,twiProvider} from '../firebase/firebaseConfigure';
import { useNavigate } from 'react-router-dom';

export default function Logincom() {
  let navigate=useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let handel_googleSignUp=async()=>{
   try{
  await signInWithPopup(twiAuth,twiProvider);
   navigate('/home');
   }catch(err){
    console.log(err);
   }
  }
  return (
    <>
      <div className='login_meth_section'>
        <div className='login_meth_box'>
           <div className='login_meth_login'>
            <button onClick={handleShow}>
              <Link to=''>log in</Link>
            </button>
           </div>
           <div className='login_meth_signin'>
           <button>
              <Link to=''>Sign in</Link>
            </button>
           </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} animation={false} centered size='lg' className='login_modal'>
        <Modal.Header >
           <div className='login_mo_he'>
            <div className='login_mo_clo_btn'>
               <OverlayTrigger
                  placement='bottom'
                  delay={{ show: 700, hide: 0 }}
                  overlay={
                  <Tooltip id={`tooltip`} variant='secondary'>
                   close
                   </Tooltip>
                 } >
                 <Button variant="secondary" className='cmt_btn post_icon' onClick={handleClose}>
                 <i><AiOutlineClose/></i> 
                <span></span>
                </Button>
                </OverlayTrigger>
            </div>
            <div className='login_mo_logo'>
              <div className='login_mo_logo_box'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png'/>
              </div>
            </div>
           </div>
        </Modal.Header>
        <Modal.Body>
          <div className='login_mo_body'>
            <div className='login_mo_body_wra'>
              <div className='login_mo_bo_title'>
                <h1>Sign in to Twitter</h1>
              </div>
              <div className='login_mo_bo_link'>
                  <div className='signapi_btn_box signup_with_google my-4'>
                  <button onClick={handel_googleSignUp}>
                      <div className='button_wrapper'>
                        <i><FcGoogle/></i>
                        <span>Sign up with Google</span>
                      </div>
                </button>
                </div>
                <div className='signapi_btn_box signup_with_apple'> 
                <button>
                      <div className='button_wrapper'>
                        <i><BsApple/></i>
                        <span>Sign up with Apple</span>
                      </div>
                </button>
              </div>
              </div>
              <div className='login_mo_orbox'>
                <div className='login_mo_le_or'></div>
                <span>or</span>
                <div className='login_mo_le_or'></div>
              </div>
              <div className='login_mo_login_fi'>
                <div className='login_mo_input'>
                <FloatingLabel
                controlId="floatingInput"
                label="Phone, email, or username"
                className="mb-3"
              >
              <Form.Control type={"email"||'text'||'tel'} placeholder="name@example.com" />
            </FloatingLabel>
           
                </div>
              </div>
              <div className='login_mo_more_btn'>
               <div className='login_mo_next'>
               <button><span>Next</span></button>
               </div>
               <div className='login_mo_foget'>
               <button><span>Forgot Password?</span></button>
               </div>
                
              </div>
              <div className='login_mo_sign_box'>
                <h4>Don't have an account?</h4><Link to=''>Sign up</Link>
              </div>
            </div>
          </div>
        </Modal.Body>
  
      </Modal>
    </>
  )
}
