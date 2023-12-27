import React from 'react'
import Topbar from '../Topbar/page.js'
import Sidebar from './Sidebar/page.js'
import Profile from './Profile/page.js'
import Drives from './Drives/Page.js'
import { Route, Routes } from 'react-router-dom'

const Page = () => {
  return (
    <div className='min-h-screen'>
        <Topbar />
        <div className='flex min-h-screen'>
            <Sidebar />
            <Routes>
                <Route path='/' element={<>Home</>} />
                <Route path='/profile' element={ <Profile />} />
                <Route path='/drives' element={ <Drives />} />
            </Routes>
        </div>
    </div>
  )
}

export default Page