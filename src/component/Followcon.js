import React from 'react'
import { Link } from 'react-router-dom'


export default function Followcon(props) {
  let title=props.title;
  return (
    <>
    <div className='com_follow_container'>
      <div className='com_follow_header'>
        <div className='body_trend_head'>
           <h3>{title}</h3>
        </div>
      </div>
      <div className='com_follow_userbox'>
          <div className='trend_item_wrapper'>
               <div className='com_follow_item'>
                  <Link to=''>
                    <div className='com_follow_link'>
                      <div className='com_follow_innerlink'>
                        <div className='com_follow_left'>
                          <div className='com_follow_profile'>
                            <div className='com_follow_image'>
                              <img src='https://www.logodesignlove.com/wp-content/uploads/2010/06/cnn-logo-white-on-red.jpg' alt='followers image'/>
                            </div>
                          </div>
                          <div className='com_follow_profile_info'>
                             <div className='com_follow_profile_name'>
                              <Link to=''><h4>The New York Times</h4></Link>
                              <h6>@nytimes</h6>
                             </div>
                          </div>
                        </div>
                        <div className='com_follow_right'>
                          <button><span>Follow</span></button>
                        </div>
                      </div>
                    </div>
                   </Link>
              </div>
              <div className='com_follow_item'>
                  <Link to=''>
                    <div className='com_follow_link'>
                      <div className='com_follow_innerlink'>
                        <div className='com_follow_left'>
                          <div className='com_follow_profile'>
                            <div className='com_follow_image'>
                              <img src='https://static01.nyt.com/vi-assets/images/share/1200x1200_t.png' alt='followers profile'/>
                            </div>
                          </div>
                          <div className='com_follow_profile_info'>
                             <div className='com_follow_profile_name'>
                              <Link to=''><h4>The New York Times</h4></Link>
                              <h6>@nytimes</h6>
                             </div>
                          </div>
                        </div>
                        <div className='com_follow_right'>
                          <button><span>Follow</span></button>
                        </div>
                      </div>
                    </div>
                   </Link>
              </div>
              <div className='com_follow_item'>
                  <Link to=''>
                    <div className='com_follow_link'>
                      <div className='com_follow_innerlink'>
                        <div className='com_follow_left'>
                          <div className='com_follow_profile'>
                            <div className='com_follow_image'>
                              <img src='https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/BBC_News.svg/1023px-BBC_News.svg.png' alt='followers profile'/>
                            </div>
                          </div>
                          <div className='com_follow_profile_info'>
                             <div className='com_follow_profile_name'>
                              <Link to=''><h4>The New York Times</h4></Link>
                              <h6>@nytimes</h6>
                             </div>
                          </div>
                        </div>
                        <div className='com_follow_right'>
                          <button><span>Follow</span></button>
                        </div>
                      </div>
                    </div>
                   </Link>
              </div>
             
          </div>
      </div>
      <div className='com_follow_more'>
         <div className='more_trend_container'>
            <div className='more_trend_wrapper'>
              <Link to=''>
                <h4>Show more</h4>
              </Link>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
