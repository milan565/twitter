import React ,{ useState,useEffect }from 'react'
import Bodyheader from '../component/Bodyheader'
import Tweet from '../component/Tweet'
import Tweetpost from '../component/Tweetpost'
import { PostThuck } from '../redux/postSlice'
import { add_Login_user } from '../redux/loginUserSli'
import { useSelector,useDispatch } from 'react-redux'
import { twiAuth } from '../firebase/firebaseConfigure'
import { onAuthStateChanged } from 'firebase/auth'
import Loading from '../component/Loading'
import Rightcom from '../component/Rightcom'
import Motweet from '../component/Motweet'


export default function Hhome() {
    let {allPost}=useSelector((state)=>state.postManager);
   
    let[show,setShow]=useState(false);
    let dispatch=useDispatch();
   
    
    useEffect(()=>{
      
        onAuthStateChanged(twiAuth,(user)=>{
          dispatch(add_Login_user(user))
          setTimeout(()=>{
           setShow(true);
          },500)
        })
   // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    useEffect(()=>{
  
        dispatch(PostThuck());
     // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);
  
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
