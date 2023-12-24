import React, { useEffect, useState } from 'react'
import AutoCompleteInput from './Skill/AutoCompleteInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { StudentProfileContext } from '../../Context/context'
import axios from 'axios'
import { apis } from '../../Apis/apis'
import BasicInfo from './BasicInfo'
import Education from './Education/EducationInfo'
import SkillInfo from './Skill/SkillInfo'
import ExperienceInfo from './Experience/ExperienceInfo'

const Page = () => {
    const [studentId, setStudentId] = useState('20CEUOS007')
    const [student, setStudent] = useState();
    const [yourSkills, setYourSkills] = useState([])
    const [ availableSkills, setAvailableSkills ] = useState([]);
    const [detect, setDetect] = useState(false);
    const [profileDataNotFound, setProfileDataNotFound] = useState(false);
    const [educationInfo, setEducationInfo] = useState([]);
    const [experienceInfo, setExperienceInfo] = useState([]);

    useEffect(()=>{
        /*  Fetching student information    */
        axios.get(`${apis.getStudentById}/${studentId}`)
        .then((res) => {
            setStudent(res.data);   
        })
        .catch((err) => {
            setProfileDataNotFound(true);
        });

        /* Fetching skill information (student) */
        axios.get(`${apis.getSkillOfStudent}/${studentId}`)
        .then((res) => {
            setYourSkills(res.data.$values)
        })
        .catch((err) => {

        })

        /* Fetching all available skill suggestions */
        axios.get(apis.getAllSkills)
        .then((res) => {
            setAvailableSkills(res.data)
        })
        .catch((err) => {
            setProfileDataNotFound(true)
        })

        /* Fetching education information */
        axios.get(`${apis.getEducationByStudent}/${studentId}`)
        .then((res) => {
            setEducationInfo(res.data);
        })
        .catch((err) => {
        });

        /* Fetching experience information */
        axios.get(`${apis.getExperienceByStudent}/${studentId}`)
        .then((res) => {
            setExperienceInfo(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

    }, [detect])


  return (
    <StudentProfileContext.Provider value={{ setYourSkills, availableSkills, yourSkills, setAvailableSkills, detect, setDetect, studentId, student, educationInfo, experienceInfo }}>
        {
            student == null && profileDataNotFound == false ? 
            <div className='text-center w-10/12 h-full mt-auto mb-auto'>
                <FontAwesomeIcon icon={faSpinner} spin className='text-center text-3xl'/>
            </div> : profileDataNotFound ? 
            <div className='text-center w-10/12 h-full mt-auto mb-auto'>
                <h1><span className='text-3xl text-red-500 mx-3'>404</span><span>Not Found</span></h1>
            </div>:
            <div className='w-10/12 m-6 bg-slate-200 h-fit'>
            <h1 className='py-4 font-bold text-gray-700 text-center text-2xl'>YOUR PROFILE</h1>
        
            <BasicInfo />
              
            <SkillInfo />

            <Education />

            <ExperienceInfo />
        </div>
            
    }
    </StudentProfileContext.Provider>
  )
}

export default Page