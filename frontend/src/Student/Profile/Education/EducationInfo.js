import React, { useContext, useEffect, useState } from 'react'
import EducationDetails from './EducationDetails'
import { StudentProfileContext } from '../../../Context/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { apis } from '../../../Apis/apis';

const EducationInfo = () => {
  
  const { educationInfo, studentId, detect, setDetect } = useContext(StudentProfileContext);
  const [newEducationInfo, setNewEducationInfo] = useState({title:'', institute:'', start:'', end:'', result:'', studentId: studentId});
  const [isAddEducationVisible, setIsAddEducationVisible] = useState(false);

  const changeEducationInfo = (e) => {
    setNewEducationInfo({...newEducationInfo, [e.target.name]: e.target.value})
  }

  const onClickSaveButton = async () => {
    if(newEducationInfo.title == '' || newEducationInfo.institute == '' || newEducationInfo.start == '' || newEducationInfo.end == '' || newEducationInfo.result == ''){
      console.log("Validation not satisfied")
    }
    else{
      await axios.post(apis.addEducationByStudent, newEducationInfo)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      setIsAddEducationVisible(false);
      detect ? setDetect(false) : setDetect(true)
    }
  }

  const onClickCancelButton = () => {
    isAddEducationVisible(false);
  }


  return (
    <div>
        <h1 className='text-xl font-bold uppercase text-center'>Education</h1>
        <div className='p-5 w-full'>
          {
            isAddEducationVisible ? <></> :
            <span className='bg-slate-500 mx-3 p-3 block w-fit ms-auto rounded-lg text-white cursor-pointer' 
              onClick={ () => { 
                setIsAddEducationVisible(true) 
              }}>
                <FontAwesomeIcon icon={faPlus} className='me-3' />Add Education
            </span>
          }

          {
            educationInfo.map((item, index) => (
              <EducationDetails data={item} key={index} />
              ))
          }

          {
            isAddEducationVisible ?

            <div className='p-5 w-full'>
            <label className='block uppercase font-bold my-2'>Title</label>
            <input className='p-3 rounded focus:outline-none w-full' value={newEducationInfo.title} onChange={changeEducationInfo} name='title'/>
            <div className='my-2 flex flex-wrap'>
            <div className='w-1/2'>
              <label className='block uppercase font-bold my-2 '>institute</label>
              <input className='p-3 rounded focus:outline-none w-11/12' value={newEducationInfo.institute} onChange={changeEducationInfo} name='institute' />
            </div>
            <div className='w-1/4'>
              <label className='block uppercase font-bold my-2'>Start</label>
              <input className='p-3 rounded focus:outline-none w-11/12' value={newEducationInfo.start} onChange={changeEducationInfo} name='start'/>
            </div>
            <div className='w-1/4'>
              <label className='block uppercase font-bold my-2'>End</label>
              <input className='p-3 rounded focus:outline-none w-11/12' value={newEducationInfo.end}  onChange={changeEducationInfo} name='end'/>
            </div>
            </div>
            <div className='my-2 flex flex-wrap w-full'>
              <div className='1/2'>
                <label className='block uppercase font-bold my-2'>Result</label>
                <input className='p-3 rounded focus:outline-none'  onChange={changeEducationInfo} value={newEducationInfo.result} name='result'/>
              </div>
              <div className=' mt-auto ms-auto'>
                  <button className='p-3 mx-3 bg-red-500 rouded text-white' onClick={onClickCancelButton}>Cancel</button>
                  <button className='p-3 mx-3 bg-green-700 rounded text-white' onClick={onClickSaveButton}>Save</button>
              </div>
            </div>
            </div> 
            : <></>
          }
        </div>
        </div>
  )
}

export default EducationInfo