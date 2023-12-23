import React from 'react'
import Sidebar from './Sidebar/page.js'
import Topbar from '../Topbar/page.js'
import Statistic from './statistics.js'
import Drives from './Drives/drives.js'
import Profiles from './Profiles/profiles.js'
import Requests  from './requests.js'
import { Route, Routes } from 'react-router-dom'

const page = () => {
  return (
    <div className='min-h-screen'>
      <Topbar />
      <div className='flex justify-center w-full min-h-screen'>
      <Sidebar />
        <Routes>
          <Route path='' element={<Statistic />} />
          <Route path='drives' element={<Drives />} />
          <Route path='profiles' element={<Profiles />} />
          <Route path='requests' element={<Requests />} />
          <Route path='*' element={<div className='w-10/12'></div>} />
        </Routes>
      </div>
    </div>
  )
}

export default page