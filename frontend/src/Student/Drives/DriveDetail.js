import React, { useContext } from 'react'
import { StudentDrivesContext } from '../../Context/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'

const DriveDetail = () => {
    const { driveDetail, setDriveDetailVisible } = useContext(StudentDrivesContext)

    const onClickCancelButton = () => {
        setDriveDetailVisible(false)
    }

    const onClickApplyButton = () => {
        setDriveDetailVisible(false)
    }

  return (
    driveDetail ?
    <div className='w-full'>
    <div className='flex flex-wrap'>
        <div className='p-3 w-full'>
            <label className='block uppercase tracking-wide text-gray-700 font-bold my-2 px-2'>Company Name</label>
            <input className='appearance-none block w-1/2  text-gray-700 border rounded py-3 px-4  leading-tight focus:outline-none' type='text' name='companyName' value={driveDetail.companyName} readOnly />
        </div>
        <div className='p-3 w-full'>
            <label className='block uppercase tracking-wide text-gray-700 font-bold my-2 px-2'>Description</label>
            <textarea className='appearance-none block w-11/12   text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none' type='text' name='companyName' value={driveDetail.description} readOnly rows={16} />
        </div>
        <div className='p-3 w-1/2'>
            <label className='block uppercase tracking-wide text-gray-700 font-bold my-2 px-2'>CTC (Per Anum)</label>
            <input className='appearance-none block w-11/12  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none' type='text' name='companyName' value={driveDetail.ctc} readOnly  />
        </div>
        <div className='p-3 w-1/2'>
            <label className='block uppercase tracking-wide text-gray-700 font-bold my-2 px-2'>Role</label>
            <input className='appearance-none block w-11/12  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none' type='text' name='companyName' value={driveDetail.role} readOnly />
        </div>
        <div className='p-3 w-1/2'>
            <label className='block uppercase tracking-wide text-gray-700 font-bold my-2 px-2'>Criteria</label>
            <input className='appearance-none block w-11/12  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none' type='text' name='companyName' value={driveDetail.eligibilityCriteria} readOnly />
        </div>
        <div className='p-3 w-1/2'>
            <label className='block uppercase tracking-wide text-gray-700 font-bold my-2 px-2'>Qualification Required</label>
            <input className='appearance-none block w-11/12  text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none' type='text' name='companyName' value={driveDetail.requiredQualification} readOnly />
        </div>
    </div>
    <div className='p-3 flex'>
        <button className='ms-auto w-fit bg-red-700 text-white px-4 py-1 rounded-full' onClick={onClickCancelButton}>Cancel</button>
        <button className='mx-4 w-fit bg-green-700 text-white px-4 py-1 rounded-full' onClick={onClickApplyButton}>Apply for the drive</button>
    </div>
        
    </div> : 
    <div className='flex justify-center items-center min-h-screen font-bold text-3xl'>
        <FontAwesomeIcon icon={faBug} className='mx-3 text-red-700'/>505 : INTERNAL SERVER ERROR
    </div>
  )
}

export default DriveDetail