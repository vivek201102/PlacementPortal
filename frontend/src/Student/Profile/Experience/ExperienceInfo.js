import React, { useContext, useState } from 'react'
import ExperienceDetail from './ExperienceDetail'
import { StudentProfileContext } from '../../../Context/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { apis } from '../../../Apis/apis';

const ExperienceInfo = () => {
    const { experienceInfo, studentId, detect, setDetect } = useContext(StudentProfileContext);
    const [isAddExperienceVisible, setIsExperienceVisible] = useState(false);
    const [experience, setExperince] = useState({title:'', organization:'', start:'', end:'', description:'', studentId: studentId})
    const onClickCancelButton = () => {
      setIsExperienceVisible(false);
    }
    
    const onClickSaveButton = async () => {
      console.log(experience)

      await axios.post(`${apis.addExperienceByStudent}`, experience)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      detect ? setDetect(false) : setDetect(true);

      setIsExperienceVisible(false);
    }

    const changeExperienceInfo = (e) => {
      setExperince({...experience, [e.target.name]: e.target.value});
    }

  return (
    <div>
        <h1 className='text-xl font-bold uppercase text-center'>Experience</h1>
        <div className='p-5 w-full justify-self-center'>
        {
            isAddExperienceVisible ? <></> :
            <span className='bg-slate-500 mx-3 p-3 block w-fit ms-auto rounded-lg text-white cursor-pointer' 
              onClick={ () => { 
                setIsExperienceVisible(true) 
              }}>
                <FontAwesomeIcon icon={faPlus} className='me-3' />Add Experience
            </span>
          }
          {
            experienceInfo.map((item, index) => (
              <ExperienceDetail experience = {item}  />
            ))
          }
          {
            isAddExperienceVisible ?
           <div className='p-5 w-full'>
            <label className='block uppercase font-bold my-2'>Title</label>
            <input className='p-3 rounded focus:outline-none w-full' value={experience.title} name='title' onChange={changeExperienceInfo} />
            <div className='my-2 flex flex-wrap'>
                <div className='w-1/2'>
                <label className='block uppercase font-bold my-2 '>organization</label>
                <input className='p-3 rounded focus:outline-none w-11/12' value={experience.organization} name='organization' onChange={changeExperienceInfo} />
                </div>
                <div className='w-1/4'>
                <label className='block uppercase font-bold my-2'>Start</label>
                <input className='p-3 rounded focus:outline-none w-11/12' value={experience.start} name='start' onChange={changeExperienceInfo} />
                </div>
                <div className='w-1/4'>
                <label className='block uppercase font-bold my-2'>End</label>
                <input className='p-3 rounded focus:outline-none w-11/12' value={experience.end} name='end' onChange={changeExperienceInfo} />
                </div>
            </div>
            <div className='my-2 flex flex-wrap'>
              <div className='w-2/3'>
                <label className='block uppercase font-bold my-2'>Description</label>
                <textarea className='p-3 rounded focus:outline-none w-full' rows={10} value={experience.description} name='description' onChange={changeExperienceInfo} />
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

export default ExperienceInfo