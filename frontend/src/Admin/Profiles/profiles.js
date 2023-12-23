import React, { useState } from 'react'
import ProfilesList from './profilesList'
import ProfileView from './profileView'
import { ProfileContext } from '../../Context/context';

const Profiles = () => {

    const [profileViewVisible, setProfileViewVisible] = useState(false);
    const [education, setEducation] = useState([]); 
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);
    

  return (
    <ProfileContext.Provider value={{profileViewVisible, setProfileViewVisible, setEducation, setExperience, setSkills}} >
      <div className='w-10/12'>
          {
            profileViewVisible ? 
            <ProfileView  education={education} experience={experience} skills={skills}/> :
            <ProfilesList /> 
          }
      </div>
    </ProfileContext.Provider>
  )
}

export default Profiles