import { faCircleCheck, faCircleXmark, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const requests = () => {
    const driveRequests = [1,2,3];
    const coordinatorRequests = [1,2,3];
  return (
    <div className='w-10/12 m-6'>
        {/* <div className='m-3'>
        <div className=' p-5 h-fit bg-slate-200'>
        <h1 className='font-bold text-center text-2xl'>DRIVE REQUESTS</h1>
            
            <div className='mt-4'>
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
                        driveRequests.map((element, index) => (
                                <tr>
                                <td className='px-5 py-3'>HHAexchange</td>
                                <td className='px-5 py-3'>12-July-2023</td>
                                <td className='px-5 py-3'>Software Engineer</td>
                                <td className='px-5 py-3'><FontAwesomeIcon icon={faEye} className='cursor-pointer text-blue-900'/></td>
                                <td className='px-5 py-3'><FontAwesomeIcon icon={faCircleCheck} className='cursor-pointer mx-2 text-2xl text-green-600'/><FontAwesomeIcon icon={faCircleXmark} className='cursor-pointer  ms-5 text-2xl text-red-600'/>
                                </td>
                                </tr>
                        ))
                        } 
                    </tbody>
                </table>
            </div>
        </div>    
    </div> */}

    <div className='m-3'>
        <div className=' p-5 h-fit bg-slate-200'>
        <h1 className='font-bold text-center text-2xl'>CO-ORDINATOR REQUESTS</h1>
            

            <div className='mt-4'>
                <table className='table-auto w-full'>
                    <thead>
                        <th className='px-5 py-3'>Name</th>
                        <th className='px-5 py-3'>ID</th>
                        <th className='px-5 py-3'>CPI</th>
                        <th className='px-5 py-3'>View</th>
                        <th className='px-5 py-3'>Actions</th>
                    </thead>
                    <tbody className='text-center'>
                    {
                        coordinatorRequests.map((element, index) => (
                                <tr>
                                <td className='px-5 py-3'>Meet</td>
                                <td className='px-5 py-3'>20CEUOS093</td>
                                <td className='px-5 py-3'>8.4</td>
                                <td className='px-5 py-3'><FontAwesomeIcon icon={faEye} className='cursor-pointer text-blue-900'/></td>
                                <td className='px-5 py-3'><FontAwesomeIcon icon={faCircleCheck} className='cursor-pointer mx-2 text-2xl text-green-600'/><FontAwesomeIcon icon={faCircleXmark} className='cursor-pointer  ms-5 text-2xl text-red-600'/>
                                {/*     span><span className='text-xs mx-1 text-red-600 font-bold'>Reject</span> */}
                                </td>
                                </tr>
                        ))
                        } 
                    </tbody>
                </table>
            </div>
        </div>    
    </div>
    </div>
  )
}

export default requests