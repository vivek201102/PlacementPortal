import React, { useContext } from 'react'
import { StudentProfileContext } from '../../Context/context'

const BasicInfo = () => {
    const { detect, setDetect, student } = useContext(StudentProfileContext);
  return (
    <div>
        <div className='flex flex-wrap'>
            <div className='p-3 w-full'>
                <label className='py-2 px-5 block font-bold text-gray-700 uppercase'>College ID</label>
                <input className='w-1/2 px-5 py-2 rounded-full focus:outline-none font-bold uppercase' value={student.id} readOnly />
            </div>
            <div className='p-3 w-1/2'>
                <label className='py-2 px-5 block font-bold text-gray-700 uppercase'>First Name</label>
                <input className='w-full px-5 py-2 rounded-full focus:outline-none uppercase font-bold' value={student.name}  readOnly/>
            </div>
            <div className='p-3 w-1/2'>
                <label className='py-2 px-5 block font-bold text-gray-700 uppercase'>Last Name</label>
                <input className='w-full px-5 py-2 rounded-full focus:outline-none font-bold uppercase' value={student.surname} readOnly/>
            </div>
            <div className='p-3 w-1/2'>
                <label className='py-2 px-5 block font-bold text-gray-700 uppercase'>Email</label>
                <input className='w-full px-5 py-2 rounded-full focus:outline-none' defaultValue={student.email} />
            </div>
            <div className='p-3 w-1/2'>
                <label className='py-2 px-5 block font-bold text-gray-700 uppercase'>Mobile No.</label>
                <input className='w-full px-5 py-2 rounded-full focus:outline-none' defaultValue={student.phone}/>
            </div>
            <div className='p-3 w-full'>
                <label className='py-2 px-5 block font-bold text-gray-700 uppercase'>Address</label>
                <input className='w-full px-5 py-2 rounded-full focus:outline-none' defaultValue={student.address} />
            </div>
        </div>
    </div>
  )
}

export default BasicInfo