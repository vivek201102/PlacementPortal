import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCircleRight, faHand, faHome, faIdCard, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const page = () => {
  return (
    <div className='flex justify-center w-1/5 bg-primary text-rose-50'>
        <div className='links my-2 flex flex-col align-middle'>
            <a className='px-12 py-3 my-3 hover:bg-slate-800 w-full' href='/admin'>
              <FontAwesomeIcon icon={faHome} className='mr-3'/>
              <span className=''>Dashboard</span>
            </a>
            <a className='px-12 py-3 my-3 hover:bg-slate-800 w-full' href='/admin/drives'>
              <FontAwesomeIcon icon={faBriefcase} className='mr-3'/>
              <span className=''>Active Drives</span>
            </a>
            <a className='px-12 py-3 my-3 hover:bg-slate-800 w-full' href='/admin/profiles'>
              <FontAwesomeIcon icon={faIdCard} className='mr-3'/>
              <span className=''>Students Profile</span>
            </a>
            <a className='px-12 py-3 my-3 hover:bg-slate-800 w-full' href='/admin/coordinators'>
              <FontAwesomeIcon icon={faCircleRight} className='mr-3 '/>
              <span className=''>Co-Ordinator</span>
            </a>
            <a className='px-12 py-3 my-3 hover:bg-slate-800 w-full' href='/admin/requests'>
              <FontAwesomeIcon icon={faHand} className='mr-3 '/>
              <span className=''>Requests</span>
            </a>
            <a className='px-12 py-3 my-3 hover:bg-slate-800 w-full' href='/'>
              <FontAwesomeIcon icon={faRightFromBracket} className='mr-3 '/>
              <span className=''>Logout</span>
            </a>
        </div>    
    </div>
  )
}

export default page