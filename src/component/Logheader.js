import React from 'react'

import Logo from './Logo'


import Logmenu from './Logmenu';

export default function Logheader() {
  return (
    <>
        <div className='header_container'>
        <div className='header_box'>
          <div className='header_innerbox'>
            <div className='top_header_content'>

                <Logo path="/"/>
                <div className='menu_container'>
                    <Logmenu/>

                </div>
            </div>
         
          </div>
        </div>
      </div>
    </>
  )
}
