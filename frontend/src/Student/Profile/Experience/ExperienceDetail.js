import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { apis } from '../../../Apis/apis'
import { StudentProfileContext } from '../../../Context/context'

const ExperienceDetail = ({experience}) => {
    const [ isEditMode, setIsEditMode ] = useState(false)
    const [ data, setData ] = useState(experience);
    const { studentId, detect, setDetect } = useContext(StudentProfileContext);

    const onClickCancelButton = () => {
        setIsEditMode(false)
      }
  
      const onClickSaveButton = () => {
        axios.put(`${apis.updateExperienceByStudent}/${experience.id}`,
        {
          "title": data.title,
          "organization": data.organization,
          "start": data.start,
          "end": data.end,
          "description": data.description,
          "studentId": data.studentId 
        }
        )
        .then((res) => {
          detect ? setDetect(false) : setDetect(true)
        })
        .catch((err) => {
          console.log(err);
        })

        setIsEditMode(false)
      }
      
      const changeExperienceData = (e) => {
        setData({...data, [e.target.name]: e.target.value})
      }

      const deleteExperience = () => {
        axios.delete(`${apis.deleteExperienceById}/${data.id}`)
        .then((res) => {
          console.log(res);
          detect ? setDetect(false) : setDetect(true)
        })
        .catch((err) => {
          console.log(err)
        })
      }

  return (
    isEditMode ? 
    <div className='p-5 w-full'>
        <label className='block uppercase font-bold my-2'>Title</label>
        <input className='p-3 rounded focus:outline-none w-full' value={data.title} name='title' onChange={changeExperienceData}/>
        <div className='my-2 flex flex-wrap'>
            <div className='w-1/2'>
            <label className='block uppercase font-bold my-2 '>organization</label>
            <input className='p-3 rounded focus:outline-none w-11/12' value={data.organization} name='organization' onChange={changeExperienceData} />
            </div>
            <div className='w-1/4'>
            <label className='block uppercase font-bold my-2'>Start</label>
            <input className='p-3 rounded focus:outline-none w-11/12' value={data.start} name='start' onChange={changeExperienceData} />
            </div>
            <div className='w-1/4'>
            <label className='block uppercase font-bold my-2'>End</label>
            <input className='p-3 rounded focus:outline-none w-11/12' value={data.end} name='end' onChange={changeExperienceData} />
            </div>
        </div>
        <div className='my-2 flex flex-wrap'>
          <div className='w-2/3'>
            <label className='block uppercase font-bold my-2'>Description</label>
            <textarea className='p-3 rounded focus:outline-none w-full' rows={10} value={data.description} name='description' onChange={changeExperienceData} />
          </div>
          <div className=' mt-auto ms-auto'>
              <button className='p-3 mx-3 bg-red-500 rouded text-white' onClick={onClickCancelButton}>Cancel</button>
              <button className='p-3 mx-3 bg-green-700 rounded text-white' onClick={onClickSaveButton}>Save</button>
          </div>
        </div>
    </div>
    :
    <div className='p-5'>
        <h1 className='font-bold uppercase flex justify-between'>{experience.title}
        <div>  
          <FontAwesomeIcon icon={faEdit} className='mx-3 cursor-pointer' onClick={ () => {setIsEditMode(true)} }/>
          <FontAwesomeIcon icon={faTrash} className='cursor-pointer' onClick={deleteExperience} />
        </div> 
        </h1>
        <p className=''>
          <span>{experience.organization}</span>
          <span className='ms-10'>{experience.start} - {experience.end}</span>
        </p>
        <p className='mt-2'>{experience.description}</p>
    </div>
  )
}

export default ExperienceDetail