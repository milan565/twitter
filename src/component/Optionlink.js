import React from 'react'
import { Link } from 'react-router-dom'
import { BsEmojiFrown } from "react-icons/bs";
export default function Optionlink(props) {
    let icon=props.icon;
    let titlt=props.title;
    let linkpath=props.link
  return (
    <>
       <div className='tweet_post_option_linkitem'>
           <Link to={`${linkpath}`}>
             <div className='tweet_post_linkitem_inner'>
                <div className='tweet_post_linkitme_iconbox'>
                  <i>{icon}</i>
                </div>
                <div className='tweet_post_linkitme_text'>
                  <h4>{titlt}</h4>
                </div>
            </div>
          </Link>
         </div>
    </>
  )
}
