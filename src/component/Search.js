import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";


export default function Search() {
  let[query,setQuery]=useState('');
  let[searchState,setSearchState]=useState(false)
 
  return (
    <>
     <div className='com_search_container'>
        <div className='com_search_box'>
            <div className='search_input_box'>
              <form action='#'>
                <div className={`form_box ${(searchState)?("search_focus"):null}`}>
                   <div className='label_box'>
                      <div className="search_icon focus_search_icon">
                        <i className={`${(searchState?("icon"):null)}`}><BiSearch/></i>
                      </div>
                      <div className='search_input'>
                        <input type='search' placeholder='Search Twitter' autoComplete='off'
                        name='search' value={query}
                        onChange={(ele)=>setQuery(ele.target.value)}
                        onFocus={()=>setSearchState(state=>!state)}
                        onBlur={()=>setSearchState(state=>!state)}
                        />
                      </div>
                    </div>
                 
                </div>
              </form>
            </div>
        </div>
     </div>
    </>
  )
}
