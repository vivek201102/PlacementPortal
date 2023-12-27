
import React, { useEffect, useState } from 'react'
import AddDrive from './addDrive';
import DrivesList from './drivesList';
import axios from 'axios';
import { apis } from '../../Apis/apis';
import { DrivesContext } from '../../Context/context';

const Drives = () => {

    const [addDriveVisible, setAddDriveVisible] = useState(false);
    const [drives, setDrives] = useState([]);
    const [detect, setDetect] = useState(false)

    

    useEffect(()=>{
      axios.get(apis.getAllPlacementDrive)
      .then((res) => {
        setDrives(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }, [detect])

  return (
    <DrivesContext.Provider value={{drives, detect, setDetect}} >

    <div className='w-10/12'>
        {
          addDriveVisible ?
          <AddDrive setAddDriveVisible={setAddDriveVisible} /> :
          <DrivesList setAddDriveVisible={setAddDriveVisible} />
        }
    </div>
    </DrivesContext.Provider>
  )
}

export default Drives