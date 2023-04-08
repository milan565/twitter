import React from 'react'
import { Link } from 'react-router-dom'

export default function Notificationitem() {
  return (
    <>
      <div className='notification_item_con'>
        <Link to=''>
            <div className='n_i_box'>
                <div className='n_i_innerbox'>
                    <div className='n_i_icon_box'>
                        <img src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png' img-fluid alt='tweeter logo'/>
                    </div>
                    <div className='n_i_content_box'>
                        <p>There was a login to your account @milanaryal74 from a new device on Apr 01, 2023. Review it now.</p>
                    </div>
                </div>
            </div>
        </Link>
      </div>
    </>
  )
}
