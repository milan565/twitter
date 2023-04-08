import React ,{useRef, useState }from 'react'
import { Link } from 'react-router-dom'
import Bodyheader from './Bodyheader'
import Search from './Search'
import Tweet from './Tweet'
import Tweetpost from './Tweetpost'
import { BsThreeDots } from "react-icons/bs";
import Followcon from './Followcon'
import Trenditem from './Trenditem'
import { useSelector } from 'react-redux'

export default function Body() {
  let {allPost}=useSelector((state)=>state.postManager);
  let [trendPosition,setTrendPosition]=useState(false);
  let ref=useRef(null);
  

  let scrollFun=()=>{
    if(window.scrollY-ref?.current?.clientHeight>=720){
      setTrendPosition(false)
    }
    else{
      setTrendPosition(true)
    }
  }
  window.addEventListener('scroll',scrollFun);

  return (
    <>
      <div className='body_container'>
        <div className='body_left_container'>
          <div className='body_left_box'>
            <Bodyheader/>

           <div className='tweet_container'>
             <div className='tweet_box'>
              <Tweet/>
             </div>
           </div>
           <div className='tweet_post_container'>
            {
              allPost.map((post)=>{
                return(
                  <Tweetpost post={post} key={post.id}/>
                )
              })
            }
            
            
           </div>
         </div>
            
        </div>
        <div className='body_right_container'>
          <div className='body_right_innercontainer'>
            <div className='body_right_header'>
              <Search/>
            </div>
            
            <div className={`${(trendPosition)?('body_right_trend_bodywrapper'):null}`} ref={ref}>
              <div className='body_right_treand_container body_right_trend_topsticky'>
                <div className='body_right_trendbox'>
                  <div className='body_trend_head'>
                    <h3>Trends for you</h3>
                  </div>
                  <div className='trend_item_wrapper'>
                    <Trenditem/>
                    <Trenditem/>
                    <Trenditem/>
                    <Trenditem/>
                    <Trenditem/>
                    <Trenditem/>
                    <Trenditem/>
                  
                  </div>
                  <div className='more_trend_container'>
                    <div className='more_trend_wrapper'>
                      <Link to=''>
                        <h4>Show more</h4>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='body_right_treand_container body_right_trend_bottomsticky'>
                <div className='body_right_trendbox'>
                  <Followcon/>
                </div>
              </div>
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
      </div>
    </>
  )
}
