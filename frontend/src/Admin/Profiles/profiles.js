import React, { useEffect, useState } from 'react'
import ProfilesList from './profilesList'
import ProfileView from './profileView'
import { ProfileContext } from '../../Context/context';
import axios from 'axios';
import { apis } from '../../Apis/apis';

const Profiles = () => {

    const [profileViewVisible, setProfileViewVisible] = useState(false);
    const [education, setEducation] = useState([]); 
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    const [detect, setDetect] = useState(false);
    const [students, setStudents] = useState([]);
    const [studentData, setStudentData] = useState();
    
    useEffect( 
      () => {
        /* Fetching all student informations */
        axios.get(apis.getStudentInformation)
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
      }
    ,[detect]);

  return (
    <ProfileContext.Provider value={{profileViewVisible, setProfileViewVisible, setEducation, setExperience, setSkills, students, studentData, setStudentData, detect, setDetect}} >
      <div className='w-10/12'>
          {
            profileViewVisible ? 
            <ProfileView  education={education} experience={experience} skills={skills} studentData={studentData}/> :
            <ProfilesList /> 
          }
      </div>
    </ProfileContext.Provider>
  )
}

export default Profiles