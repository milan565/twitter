import React ,{useRef, useState,useEffect }from 'react'
import { Link } from 'react-router-dom'
import Bodyheader from '../component/Bodyheader'
import Search from '../component/Search'
import Tweet from '../component/Tweet'
import Tweetpost from '../component/Tweetpost'
import { BsThreeDots } from "react-icons/bs";
import Followcon from '../component/Followcon'
import { PostThuck } from '../redux/postSlice'
import { add_Login_user } from '../redux/loginUserSli'
import Trenditem from '../component/Trenditem'
import { useSelector,useDispatch } from 'react-redux'
import { twiAuth } from '../firebase/firebaseConfigure'
import { onAuthStateChanged } from 'firebase/auth'
import Loading from '../component/Loading'
import Rightcom from '../component/Rightcom'
import Motweet from '../component/Motweet'


export default function Hhome() {
    let {allPost}=useSelector((state)=>state.postManager);
    let [trendPosition,setTrendPosition]=useState(false);
    let[show,setShow]=useState(false);
    let dispatch=useDispatch();
    let ref=useRef(null);
    let scr=window.scrollY;
    useEffect(()=>{
      onAuthStateChanged(twiAuth,(user)=>{
        dispatch(add_Login_user(user))
        setTimeout(()=>{
         setShow(true);
        },500)
      })
    },[])
    useEffect(()=>{
      dispatch(PostThuck());
      },[])
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
    {
      (show)?(
       <div className='bbody_container'>
        <div className='bbody_inner_container'>
            <div className='main_container'>
              <div className='left_main_container'>
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
              <div className='right_main_container'>
                <div className='body_right_innercontainer'>
                  <Rightcom/>
                 
                </div>
              </div>
            </div>
            <Motweet/>
        </div>
        
      </div>
     
      
      ):(<Loading/>)
    }
    </>
  )
}
