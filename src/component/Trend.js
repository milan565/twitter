import React from 'react'
import { Link } from 'react-router-dom'

import Trenditem from './Trenditem';
export default function Trend() {
  return (
    <>
        <div className='body_right_trendbox log_trend_wrapper'>
                  <div className='body_trend_head log_trend_title'>
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
                    <div className='more_trend_wrapper log_more_trend_wrapper'>
                      <Link to=''>
                        <h4>Show more</h4>
                      </Link>
                    </div>
                  </div>
        </div>
    </>
  )
}
