import React from 'react'
import Rightcom from '../component/Rightcom'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BiArrowBack } from "react-icons/bi";

export default function Bbookmark() {
  return (
    <>
       <div className='bbody_container'>
        <div className='bbody_inner_container'>
            <div className='main_container'>
              <div className='left_main_container'>
                <div className='body_left_box'>
                    <div className='bookmark_left_con'>
                      <div className='bookmark_left_header'>
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
                                    <Button variant="secondary" className='cmt_btn post_icon'>
                                      <Link to='/home'>
                                      <i><BiArrowBack/></i>
                                    </Link>
                                    </Button>
                                 </OverlayTrigger>
                          </div>
                        </div>
                        <Link to=''>
                          <div className='bookmark_title_box'>
                          <h3>Bookmarks</h3>
                          <p>@milanaryal74</p>
                          </div>
                          
                        </Link>
                      </div>
                      <div className='bookmark_left_body'>
                        <div className='bookmark_inne_body'>
                          <div className='bookmark_image_box'>
                            <img src='https://abs.twimg.com/responsive-web/client-web/book-in-bird-cage-800x400.v1.71804389.png' alt='bookmark image'/>
                          </div>
                          <div className='bookmark_content_box'>
                            <h1>Save Tweets for later</h1>
                            <p>Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className='right_main_container'>
                <div className='body_right_innercontainer'>
                  <div className='bookmark_right_con'>
                    <Rightcom/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>  
    </>
  )
}
