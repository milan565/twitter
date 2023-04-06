import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Optionlink from './Optionlink';
import { FaHashtag } from "react-icons/fa";
import { BsThreeDots,BsEmojiFrown } from "react-icons/bs";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Trenditem() {
    let[trendOption,setTrendOption]=useState(false);
    let handelDropdownTrend=()=>{
        setTrendOption(state=>!state)
    }
  return (
    <>
      <div className='body_trend_item'>
                      <Link to=''>
                        <div className='body_trend_itembox'>
                          <div className='body_trend_inner_itembox'>
                            <div className='trend_item_top trend_h6'>
                              <h6>only twitter <span>Trend</span></h6>
                            </div>
                            <div className='trend_item_mid'>
                              <h4><i><FaHashtag/></i>TeraBin</h4>
                            </div>
                            <div className='trend_item_bottom trend_h6'>
                              <h6><span>20k</span>Tweet</h6>
                            </div>
                            <div className='trend_item_button'>
                            <Dropdown>
                                <Dropdown.Toggle >
                                 <OverlayTrigger
                                    placement='bottom'
                                    delay={{ show: 700, hide: 0 }}
                                    overlay={
                                        <Tooltip id={`tooltip`} variant='secondary'>
                                        more
                                        </Tooltip>
                                    }
                                    >
                                    <Button variant="secondary" className='cmt_btn post_icon' onClick={handelDropdownTrend}>
                                        <i><BsThreeDots/></i> 
                                        <span></span>
                                    </Button>
                                 </OverlayTrigger>
                                </Dropdown.Toggle>
                               
                                <Dropdown.Menu align='end'>
                                
                                    <div className='trend_option_div'>
                                         <div className='trend_option_innerdiv'>
                                            <div className='trend_option_wrapper'>
                                             <Optionlink icon={<BsEmojiFrown/>} title="Not interested in this" />
                                            <Optionlink icon={<BsEmojiFrown/>} title="This trend is harmful or spammy" />
                                            </div>
                                     </div>
                                       </div>
                             
                                </Dropdown.Menu>
                                  
                             </Dropdown>

                         
                      
                            </div>
                        
                            
                          </div>
                        </div>
                      </Link>
       </div>
      
    </>
  )
}
