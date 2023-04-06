import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineClose,AiOutlineClockCircle } from "react-icons/ai";
import { BsPlusLg,BsPerson ,BsBookmark,BsPersonPlus,BsArrowUpRightSquare,BsBoxArrowInRight} from "react-icons/bs";
import { BiMessageRoundedDetail,BiBarChart,BiRocket,BiMoney,BiHelpCircle } from "react-icons/bi";
import {  RiFileListLine,RiSettings3Line} from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import Userlogout from './Userlogout';

export default function MoUserporfile() {
    let {logUser}=useSelector((state)=>state.loginUserManager);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [moshow, setMoShow] = useState(false);

  const handleModalClose = () => setMoShow(false);
  const handleModalShow = () => setMoShow(true);
  return (
    <>
     <div className='mo_up_con'>
        <div className='mo_up_box'>
        <Button variant="primary" onClick={handleShow}>
          <img src={(logUser?.photoURL)?(logUser.photoURL):(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRakKZ5OBynaqHLdHKWENtBoXs73kckpuDWXN_07M5XqU1XBE3lGhBRxdxx2QxjFrm8o&usqp=CAU`)}/>
          </Button>
          <Offcanvas show={show} onHide={handleClose}  >
          <Offcanvas.Header >
           <div className='off_header'>
            <div className='off_hea_title'>
              <h3>Account info</h3>
              </div> 
            <div className='off_hea_btn'>
              <button onClick={handleClose}><AiOutlineClose/></button>
            </div>
           </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
           <div className='off_bo_con'>
            <div className='off_bo_user'>
              <div className='off_bo_u_he'>
                <div className='off_bo_u_pro'>
                  <img src={(logUser?.photoURL)?(logUser.photoURL):(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRakKZ5OBynaqHLdHKWENtBoXs73kckpuDWXN_07M5XqU1XBE3lGhBRxdxx2QxjFrm8o&usqp=CAU`)}/>
                </div>
                <div className='off_bo_u_btn'>
                  <button><BsPlusLg/></button>
                </div>
              </div>
              <div className='off_bo_u_bo'>
                <h6><Link to=''>{logUser?.displayName}</Link></h6>
                <p>@{logUser?.email?.split("@").splice(0,1)}</p>
              </div>
              <div className='off_bo_u_fo'>
                <Link to=''>0<span>following</span></Link>
                <Link to='' className='sec_foll'>0<span>followers</span></Link>
              </div>
            </div>
            <div className='off_bo_menu'>
              <Link to='/profile'><BsPerson/><span>Profile</span></Link>
              <Link to='' className='twi_var'><FaTwitterSquare/><span>Twitter Blue</span></Link>
              <Link to=''><BiMessageRoundedDetail/><span>Topics</span></Link>
              <Link to='/bookmarks'><BsBookmark/><span>Bookmarks</span></Link>
              <Link to='/list'><RiFileListLine/><span>Lists</span></Link>
              <Link to=''><BsPersonPlus/><span>Twitter Circle</span></Link>
            </div>
            <div className='off_bo_linkbox'>
             <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header><span>Creator studio</span></Accordion.Header>
                    <Accordion.Body>
                      <div className='off_bo_inlink'>
                      <Link to=''><BiBarChart/><span>Analytics</span></Link>
                      </div>
                    
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><span>Professional Tools</span></Accordion.Header>
                  <Accordion.Body>
                      <div className='off_bo_inlink'>
                       <Link to=''><BiRocket/><span>Twitter for Professional</span></Link>
                      </div>
                      <div className='off_bo_inlink'>
                      <Link to=''><BsArrowUpRightSquare/><span>Twitter Ads</span></Link>
                      </div>
                      <div className='off_bo_inlink'>
                      <Link to=''><BiMoney/><span>Monetization</span></Link>
                      </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header><span>Setting and Support</span></Accordion.Header>
                  <Accordion.Body>
                      <div className='off_bo_inlink'>
                      <Link to=''><RiSettings3Line/><span>Setting and Privacy</span></Link>
                      </div>
                      <div className='off_bo_inlink'>
                      <Link to=''><BiHelpCircle/><span>Help Center</span></Link>
                      </div>
                      <div className='off_bo_inlink'>
                      <Link to=''><AiOutlineClockCircle/><span>Data Saver</span></Link>
                      </div>
                      <div className='off_bo_inlink'>
                      <Link to=''><HiPencilAlt/><span>Display</span></Link>
                      </div>
                      <div className='off_bo_inlink off_bo_log'>
                      <Link to='' onClick={handleModalShow}><BsBoxArrowInRight/><span>Log out</span></Link>
                      <Modal show={moshow} onHide={handleModalClose} animation={false} centered size="lg">
                        
                        <Modal.Body>
                          <Userlogout setMoShow={setMoShow} setShow={setShow}/>
                        </Modal.Body>
                       
                      </Modal>
                      </div>
                  </Accordion.Body>
                </Accordion.Item>
               </Accordion>
            </div>
           </div>
          </Offcanvas.Body>
      </Offcanvas>
        </div>
    </div> 

    </>
  )
}
