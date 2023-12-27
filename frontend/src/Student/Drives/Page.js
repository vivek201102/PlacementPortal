import React, { useState } from 'react'
import DriveList from './DriveList'
import { StudentDrivesContext } from '../../Context/context'
import DriveDetail from './DriveDetail'

const Page = () => {
  const [driveDetailVisible, setDriveDetailVisible] = useState(false)
  const [drives, setDrives] = useState([]);
  const [detect, setDetect] = useState(false)
  const [driveDetail, setDriveDetail] = useState()
  return (
    <StudentDrivesContext.Provider value={{detect, setDetect, drives, setDrives, driveDetail, setDriveDetail, driveDetailVisible, setDriveDetailVisible}}>
      <div className='w-10/12 bg-slate-200 m-5 h-fit'>
          { 
            driveDetailVisible ? 
            <DriveDetail />
            : 
            <DriveList />
          }
      </div>
    </StudentDrivesContext.Provider>
  )
}

export default Page