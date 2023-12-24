import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { apis } from '../../../Apis/apis';
import { StudentProfileContext } from '../../../Context/context';

const EducationDetails = ({data}) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [education, setEducation] = useState(data);
    const {detect, setDetect, studentId} = useContext(StudentProfileContext);


    const deleteEducation = () => {
      axios.delete(`${apis.deleteEducationById}/${data.id}`)
      .then((res) => {
        console.log(res.data);
        detect ? setDetect(false) : setDetect(true);
      })
      .catch((err) => {
        console.log(err)
      })
    }
    const onClickCancelButton = () => {
      setEducation(data);
      setIsEditMode(false)
    }

    const onClickSaveButton = () => {

      axios.put(`${apis.updateEducationByStudent}/${data.id}`, {title: education.title, institute: education.institute, start: education.start, end: education.end, result: education.result, studentId: education.studentId})
      .then((res) => {
        setIsEditMode(false);
        detect ? setDetect(false) : setDetect(true);
      })
      .catch((err) => {
        console.log(err);
      })
      console.log(education);
      // setIsEditMode(false)
    }

    const changeEducationInfo = (e) => {
        setEducation({...education, [e.target.name]: e.target.value});
      }

  return (
    
    isEditMode ? 
    <div className='p-5 w-full'>
        <label className='block uppercase font-bold my-2'>Title</label>
        <input className='p-3 rounded focus:outline-none w-full' defaultValue={education.title} onChange={changeEducationInfo} name='title'/>
        <div className='my-2 flex flex-wrap'>
        <div className='w-1/2'>
          <label className='block uppercase font-bold my-2 '>institute</label>
          <input className='p-3 rounded focus:outline-none w-11/12' defaultValue={education.institute} onChange={changeEducationInfo} name='institute' />
        </div>
        <div className='w-1/4'>
          <label className='block uppercase font-bold my-2'>Start</label>
          <input className='p-3 rounded focus:outline-none w-11/12' defaultValue={education.start} onChange={changeEducationInfo} name='start'/>
        </div>
        <div className='w-1/4'>
          <label className='block uppercase font-bold my-2'>End</label>
          <input className='p-3 rounded focus:outline-none w-11/12' defaultValue={education.end} onChange={changeEducationInfo} name='end'/>
        </div>
        </div>
        <div className='my-2 flex flex-wrap w-full'>
          <div className='1/2'>
            <label className='block uppercase font-bold my-2'>Result</label>
            <input className='p-3 rounded focus:outline-none' defaultValue={education.result} onChange={changeEducationInfo} name='result'/>
          </div>
          <div className=' mt-auto ms-auto'>
              <button className='p-3 mx-3 bg-red-500 rouded text-white' onClick={onClickCancelButton}>Cancel</button>
              <button className='p-3 mx-3 bg-green-700 rounded text-white' onClick={onClickSaveButton}>Save</button>
          </div>
        </div>
    </div>
    :
    <div className='p-5'>
        <h1 className='font-bold uppercase w flex justify-between'>{education.title}
        <div>
          <FontAwesomeIcon icon={faEdit} className='mx-3 cursor-pointer' onClick={ () => {setIsEditMode(true)} }/>
          <FontAwesomeIcon icon={faTrash} className='ms-auto w-fit' onClick={ () => { deleteEducation(); }}/>

        </div>
        </h1>
        <p className=''>
          <span>{education.institute}</span>
          <span className='ms-10'>{education.start} - {education.end}</span>
        </p>
        <p>{education.result}</p>
    </div>
      
  )
}

export default EducationDetails