import React, { useContext } from 'react'
import AutoCompleteInput from './AutoCompleteInput'
import { StudentProfileContext } from '../../../Context/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { apis } from '../../../Apis/apis';

const SkillInfo = () => {

    const {setYourSkills, availableSkills, yourSkills, setAvailableSkills, detect, setDetect, studentId, student} = useContext(StudentProfileContext);
    
    const removeFromYourSkill = (item) => {
        console.log(item)
        axios.delete(`${apis.deleteSkillOfStudent}/${studentId}/skill/${item.Id}`)
        .then((res) => {
            console.log('Deleted Successfully')
            detect ? setDetect(false) : setDetect(true)
        })
        .catch((err) =>{
            console.log(err)
        })
    }
  
    return (
    <div className='p-3 w-full my-2'>
        <h1 className='text-center font-bold text-xl'>SKILLS</h1>
        <div className='flex justify-between'>
            <div className='ms-4 my-2 w-1/3'>
                <AutoCompleteInput />
            </div>
        <div className='flex flex-wrap'>

        {
            yourSkills.map((item, index) => (
                <div className='px-4 bg-white mx-3 my-4 py-2' key={index}>
                    {item.SkillName}
                    <FontAwesomeIcon icon={faXmarkCircle} className='ms-4 cursor-pointer text-xl' onClick={ () => { removeFromYourSkill(item) }}/>
                </div>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default SkillInfo