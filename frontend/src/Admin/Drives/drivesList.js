import React from 'react'
import { faCirclePlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DrivesList = ({setAddDriveVisible}) => {
    const placementDrives = [ 1,2,3 ];
    const onClickAddDrive = () => {
        setAddDriveVisible(true);
    }
  return (
    <div className='m-6'>
        <div className='ms-auto cursor-pointer hover:bg-slate-400 my-3 px-5 py-2 bg-slate-300 w-fit border rounded-md' onClick={onClickAddDrive}>
            <FontAwesomeIcon icon={faCirclePlus} className='font-bold'/>
            <span className='mx-3 font-bold'>Add Drive</span>
        </div>
        <div className=' p-5 h-fit bg-slate-200'>
        <h1 className='font-bold text-center text-2xl'>DRIVES</h1>
            <div className='flex'>
                <div className='mx-2 py-2 px-5 bg-slate-100 border rounded-full'>
                    Current
                </div>
                <div className='mx-2 py-2 px-5 bg-slate-100 border rounded-full'>
                    Upcoming
                </div>
                <div className='mx-2 py-2 px-7 bg-slate-100 border rounded-full'>
                    All
                </div>
            </div>

            <div className=''>
                <table className='table-auto w-full'>
                    <thead>
                        <th className='px-5 py-3'>Company Name</th>
                        <th className='px-5 py-3'>Date Created</th>
                        <th className='px-5 py-3'>Role</th>
                        <th className='px-5 py-3'>View</th>
                        <th className='px-5 py-3'>Actions</th>
                    </thead>
                    <tbody className='text-center'>
                    {
                        placementDrives.map((element, index) => (
                            <tr>
                                <td className='px-5 py-3'>HHAexchange</td>
                                <td className='px-5 py-3'>12-July-2023</td>
                                <td className='px-5 py-3'>Software Engineer</td>
                                <td className='px-5 py-3'><FontAwesomeIcon icon={faEye} className='cursor-pointer text-blue-900'/></td>
                                <td className='px-5 py-3'><FontAwesomeIcon icon={faTrash} className='cursor-pointer text-red-600'/></td>
                                </tr>
                        ))
                    } 
                    </tbody>
                </table>
            </div>
        </div>    
    </div>
  )
}

export default DrivesList