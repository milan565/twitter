import React from 'react'
import { Routes,Route } from 'react-router-dom';
import ProtectedRoute from './routerp/ProtectedRoute';
import './scss/app.scss';
import Hheader from './ccomponent/Hheader';
import Llogin from './ppage/Llogin';
import Hhome from './ppage/Hhome';
import Eexplore from './ppage/Eexplore';
import Nnotification from './ppage/Nnotification';
import Mmessage from './ppage/Mmessage';
import Bbookmark from './ppage/Bbookmark';
import Llist from './ppage/Llist';
import Pprofile from './ppage/Pprofile';
import Errorpage from './ppage/Errorpage';
import Ssetting from './ppage/Ssetting';
import MoHheader from './ccomponent/MoHheader';


export default function App() {
  return (
    <>
    <Hheader/>
   <MoHheader/>
    <Routes>
      <Route path='/' element={<Llogin/>}/>
      <Route path='/home' element={ 
        <ProtectedRoute>
          <Hhome/>
        </ProtectedRoute>}
      />
      <Route path='/explore' element={ 
       <ProtectedRoute>
       <Eexplore/>
     </ProtectedRoute>}/>
      <Route path='/notification' element={
          <ProtectedRoute>
         <Nnotification/>
        </ProtectedRoute> }/>
      <Route path='/messages' element={
          <ProtectedRoute>
          <Mmessage/>
        </ProtectedRoute> }/>
      <Route path='/bookmarks' element={
          <ProtectedRoute>
           <Bbookmark/>
        </ProtectedRoute>}/>
      <Route path='/list' element={ 
        <ProtectedRoute>
       <Llist/>
      </ProtectedRoute>}/>
      <Route path='/profile' element={ 
        <ProtectedRoute>
       <Pprofile/>
      </ProtectedRoute>}/>
      <Route path='/setting' element={<Ssetting/>}/>
      <Route path='*' element={<Errorpage/>}/>
    </Routes>
    
  
    </>
  )
}

