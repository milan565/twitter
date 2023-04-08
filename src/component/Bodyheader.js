import React from 'react'
import { Link } from 'react-router-dom'

import MoUserporfile from './MoUserporfile'

export default function Bodyheader() {
  return (
    <>
     <div className='body_header_container'>
        <div className='body_header_box body_h_b'>
            <Link to='/home'>
            <h1>Home</h1>
            </Link>
            
        </div>
        <div className='body_header_mo_h'>
            <div className='body_header_mo_b'>
                <div className='body_h_mo_l'>
                    <div className='body_h_mo_user'>
                        <MoUserporfile/>
                    </div>
                </div>
                <div className='body_h_mo_r'>
                    <div className='body_h_r_mo_lo'>
                        <Link to='/home'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png'/>
                        </Link>
                    </div>
                </div>
            </div>
          
        </div>
        <div className='body_header_link'>
            <div className='body_header_linkbox'>
                <Link to=''>
                   <div className='header_linkitem'>
                    <div className='header_link_content'>
                    <span className='header_link_contentactive'>For You</span>
                    </div>
                
                    <div className='headder_linkitem_border'></div>
                    </div> 
                </Link>
                <Link to=''>
                <div className='header_linkitem'>
                <div className='header_link_content'>
                <span>Following</span>
                    </div>
                    
                    <div className='headder_linkitem_border headder_linkitem_bordernon'></div>
                    </div> 
                </Link>
            </div>
        </div>
     </div>
    </>
  )
}
