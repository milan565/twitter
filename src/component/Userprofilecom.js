import React from 'react'
import { Link } from 'react-router-dom'
import { BiCalendar } from "react-icons/bi";
import { useSelector } from 'react-redux';

export default function Userprofilecom() {
    let{logUser}=useSelector((state)=>state.loginUserManager);
  return (
    <>
     <div className='u_p_con'>
        <div className='u_p_box'>
            <div className='u_p_tb'>
                <div className='u_p_tb_inner'></div>
            </div>
            <div className='u_p_bb'>
                <div className='u_p_tb_first'>
                    <div className='u_p_first_imgb'>
                        <div className='u_p_f_ib_inebox'>
                            <img src={(logUser?.photoURL)?(logUser?.photoURL):(`https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png`)} imf-fluid/>
                        </div>
                    </div>
                    <div className='u_p_first_buttonb'>
                        <button>
                            <Link to=''>Edit Profile</Link>
                        </button>
                    </div>
                </div>
                <div className='u_p_tb_second'>
                    <h3>{logUser?.displayName}</h3>
                    <p>@{logUser?.email.split("@").splice(0,1)}</p>
                </div>
                <div className='u_p_tb_third'>
                    <p><i><BiCalendar/></i><span>Joined February 2023</span></p>
                </div>
                <div className='u_p_tb_fourth'>
                    <Link to=''>0<span>Following</span></Link>
                    <Link to=''>0<span>Followers</span></Link>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
