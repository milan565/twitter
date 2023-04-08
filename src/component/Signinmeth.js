import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import { twiAuth ,twiProvider} from '../firebase/firebaseConfigure';
import { useNavigate } from 'react-router-dom';

export default function Signinmeth() {
  let navigate=useNavigate();
  let handel_googleSignUp=async()=>{
   try{
  await signInWithPopup(twiAuth,twiProvider);
   navigate('/home');
   }catch(err){
    console.log(err);
   }
  }
  return (
    <>
    <div className='signapi_meth_container'>
      <div className='signapi_meth_box'>
        <div className='signapi_meth_header_box'>
            <h1>New to Twitter?</h1>
            <h6>Sign up now to get your own personalized timeline!</h6>
        </div>
        <div className='signapi_meth_wrapper'>
            <div className='signapi_btn_box signup_with_google'>
               <button onClick={handel_googleSignUp}>
                  <div className='button_wrapper'>
                    <i><FcGoogle/></i>
                    <span>Sign up with Google</span>
                  </div>
             </button>
            </div>
            <div className='signapi_btn_box signup_with_apple'> 
            <button>
                  <div className='button_wrapper'>
                    <i><BsApple/></i>
                    <span>Sign up with Apple</span>
                  </div>
             </button>
             </div>
            <div className='signapi_btn_box create_account'> 
             <button>
                <Link to=''>
                  <div className='button_wrapper'>
                    <i></i>
                    <span>Create Account</span>
                  </div>
                </Link>
              </button>
            </div>
        </div>
        <div className='signapi_meth_moreinfo'>
            <p>By signing up, you agree to the <Link to=''>Terms of Service</Link> and <Link to=''>Privacy Policy</Link>, including <Link to=''>Cookie Use.</Link></p>
        </div>
      </div>
     
    </div>
      
    </>
  )
}
