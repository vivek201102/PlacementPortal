
import React, { useState } from 'react'
import AddDrive from './addDrive';
import DrivesList from './drivesList';

const Drives = () => {

    const [addDriveVisible, setAddDriveVisible] = useState(false);

  return (
    <div className='w-10/12'>
        {
            addDriveVisible ?
            <AddDrive setAddDriveVisible={setAddDriveVisible} /> :
            <DrivesList setAddDriveVisible={setAddDriveVisible} />
        }
    </div>
  )
}

export default Drives