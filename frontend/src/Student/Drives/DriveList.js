import React, { useContext, useEffect } from 'react'
import { StudentDrivesContext } from '../../Context/context';
import axios from 'axios';
import { apis } from '../../Apis/apis.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEye } from '@fortawesome/free-solid-svg-icons';

const DriveList = () => {
    const { detect, drives, setDrives, setDriveDetailVisible, setDriveDetail } = useContext(StudentDrivesContext)

    const formatDate = (inputDateString) => {
        const inputDate = new Date(inputDateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(inputDate);
        return formattedDate;
    };

    useEffect(() => {
        axios.get(apis.getAllPlacementDrive)
        .then((res) => {
            setDrives(res.data)
        })
        .catch((err) => {

        })
    }, [detect])

    const onViewButtonClick = (drive) => {
        setDriveDetail(drive)
        setDriveDetailVisible(true)
    }

  return (
    <div>
        <div className='uppercase font-bold text-xl text-center p-3'>
            Current Drive
        </div>
        <div className=''>
            <table className='table-auto w-full'>
                <thead>
                    <th className='px-5 py-3'>Company Name</th>
                    <th className='px-5 py-3'>Date Created</th>
                    <th className='px-5 py-3'>Role</th>
                    <th className='px-5 py-3'>View</th>
                    <th className='px-5 py-3'>Apply for Drive</th>
                </thead>
                <tbody className='text-center'>
                {
                    drives.map((element, index) => (
                        <tr className='' key={index}>
                            <td className='px-5 py-3'>{element.companyName}</td>
                            <td className='px-5 py-3'>{formatDate(element.createdAt)}</td>
                            <td className='px-5 py-3'>{element.role}</td>
                            <td className='px-5 py-3'>
                                <FontAwesomeIcon icon={faEye} className='cursor-pointer text-blue-900' onClick={() => { onViewButtonClick(element) }} />
                            </td>
                            <td className='rounded-full'><FontAwesomeIcon icon={faCircleCheck} className='text-green-700 text-xl' /></td>
                            </tr>
                    ))
                } 
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DriveList