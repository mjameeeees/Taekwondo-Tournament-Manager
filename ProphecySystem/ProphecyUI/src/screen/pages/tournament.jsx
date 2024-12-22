import React from 'react'
import Navbar from '../components/navbar'
import Button from '../components/button'
import { Link } from 'react-router-dom'
import Header from '../components/header'

function Tournament() {
  return (
    <>
     <Navbar/>
      <Header headerTitle="Navigation" />

     <div className="w-full flex justify-center items-center">

      {/*Iterate values*/}
      <div className="w-3/5 mt-5 flex flex-wrap justify-center gap-20">
          <div className="w-52 tourna ml-5 mt-3 ">
            <Link to="/tournament/teams">            
            <Button bgcolor="bg-slate-900" height="h-32" width="w-full"/>
            </Link>
            <p className=' text-center font-medium'>Teams</p>
          </div>
          <div className="w-52 tourna ml-5 mt-3 ">
            <Link to="/tournament/kyorugi">            
            <Button bgcolor="bg-slate-900" height="h-32" width="w-full"/>
            </Link>
            <p className=' text-center font-medium'>Kyorugi</p>
          </div>
          <div className="w-52 tourna ml-5 mt-3 ">
            <Link to="/tournament/poomsae">            
            <Button bgcolor="bg-slate-900" height="h-32" width="w-full"/>
            </Link>
            <p className=' text-center font-medium'>Poomsae</p>
          </div>
          <div className="w-52 tourna ml-5 mt-3 ">
            <Link to="/medal-tally">            
            <Button bgcolor="bg-slate-900" height="h-32" width="w-full"/>
            </Link>
            <p className=' text-center font-medium'>Medal Tally</p>
          </div>
          <div className="w-52 tourna ml-5 mt-3 ">
            <Link to="/tournament/history">            
            <Button bgcolor="bg-slate-900" height="h-32" width="w-full"/>
            </Link>
            <p className=' text-center font-medium'>Game History</p>
          </div>
          <div className="w-52 tourna ml-5 mt-3 ">
            <Link to="/tournament/settings">            
            <Button bgcolor="bg-slate-900" height="h-32" width="w-full"/>
            </Link>
            <p className=' text-center font-medium'>Settings</p>
          </div>
      </div>
      
     </div>
    </>
   

  )
}

export default Tournament