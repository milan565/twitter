import React ,{useState,useRef} from 'react'
import Search from './Search'
import Trenditem from './Trenditem'
import Followcon from './Followcon'
import { Link } from 'react-router-dom'
import { BsThreeDots } from "react-icons/bs";

export default function Rightcom() {
  let proref=useRef(null);
  let [rightPos,setRightPos]=useState(false);
  let scrollFun=()=>{
    if(proref?.current?.clientHeight-window.scrollY<=720){
      setRightPos(true)
    }
    else{
      setRightPos(false)
    }
  }
  window.addEventListener('scroll',scrollFun);
  return (
    <>
    <div className='right_com_cont'>
        <div className='right_com_hea'>
          <Search/>
        </div>
        <div className='right_com_body'  ref={proref} style={
                    (rightPos)?{position:"sticky",top:-(proref?.current?.clientHeight-720)}:null}>
         <div className='right_com_trend_box'>
            <div className='right_trend_in_box'>
                <div className='right_trend_header'>
                    <h3>Trends for you</h3>
                </div>
                <div className='right_trend_wrapper'>
                    <Trenditem/>
                    <Trenditem/>
                    <Trenditem/>
                    <Trenditem/>
                    <Trenditem/>
                    <Trenditem/>
                    <Trenditem/>
                                   
                </div>
            </div>
         </div>
         <div className='right_com_follow_box'>

            <Followcon title='Who to follow'/>
         </div>
         <div className='right_com_text_box'>
         <div className='body_right_alllink_conatainer'>
                        <div className='body_right_alllink_wrapper'>
                        <Link to=''>Terms of Service</Link>
                        <Link to=''>Privacy Policy</Link>
                        <Link to=''>Cookie Policy</Link>
                        <Link to=''>Accessibility</Link>
                        <Link to=''>Ads info</Link>
                        <Link to=''>More<span><BsThreeDots/></span></Link>
                        </div>
                        <div className='body_right_fotter'>
                        <p>© 2023 Twitter, Inc.</p>
                        </div>
                    </div>
         </div>
        </div>
    </div>
      
    </>
  )
}
