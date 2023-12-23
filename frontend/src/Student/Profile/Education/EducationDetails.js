import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const EducationDetails = ({education}) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const onClickCancelButton = () => {
      setIsEditMode(false)
    }

    const onClickSaveButton = () => {
      setIsEditMode(false)
    }

  return (
    
    isEditMode ? 
    <div className='p-5 w-full'>
        <label className='block uppercase font-bold my-2'>Title</label>
        <input className='p-3 rounded focus:outline-none w-full' defaultValue={education.title} />
        <div className='my-2 flex flex-wrap'>
        <div className='w-1/2'>
          <label className='block uppercase font-bold my-2 '>institute</label>
          <input className='p-3 rounded focus:outline-none w-11/12' defaultValue={education.institute} />
        </div>
        <div className='w-1/4'>
          <label className='block uppercase font-bold my-2'>Start</label>
          <input className='p-3 rounded focus:outline-none w-11/12' defaultValue={education.start} />
        </div>
        <div className='w-1/4'>
          <label className='block uppercase font-bold my-2'>End</label>
          <input className='p-3 rounded focus:outline-none w-11/12' defaultValue={education.end} />
        </div>
        </div>
        <div className='my-2 flex flex-wrap w-full'>
          <div className='1/2'>
            <label className='block uppercase font-bold my-2'>Result</label>
            <input className='p-3 rounded focus:outline-none' defaultValue={education.result} />
          </div>
          <div className=' mt-auto ms-auto'>
              <button className='p-3 mx-3 bg-red-500 rouded text-white' onClick={onClickCancelButton}>Cancel</button>
              <button className='p-3 mx-3 bg-green-700 rounded text-white' onClick={onClickSaveButton}>Save</button>
          </div>
        </div>
    </div>
    :
    <div className='p-5'>
        <h1 className='font-bold uppercase'>{education.title} <FontAwesomeIcon icon={faEdit} className='mx-3 cursor-pointer' onClick={ () => {setIsEditMode(true)} }/></h1>
        <p className=''>
          <span>{education.institute}</span>
          <span className='ms-10'>{education.start} - {education.end}</span>
        </p>
        <p>{education.result}</p>
    </div>
      
  )
}

export default EducationDetails