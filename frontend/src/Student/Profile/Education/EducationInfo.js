import React, { useEffect, useState } from 'react'
import EducationDetails from './EducationDetails'

const EducationInfo = () => {
  const [educationInfo, setEducationInfo] = useState([
    {title: "Bachlor's of Technology", start:'Nov-2020', end:'May-2024', result:'CPI: 8.5', institute: 'Dharmsinh Desai University'},
    {title: "Standard 12th Board", start:'Jun-2019', end:'May-2020', result:'83%', institute: 'New English School'}
  ])

  useEffect(()=>{
    
  }, [])

  return (
    <div>
        <h1 className='text-xl font-bold uppercase text-center'>Education</h1>
        <div className='p-5 w-full justify-self-center'>

          {
            educationInfo.map((item, index) => (
              <EducationDetails education = {item} key={index} />
              ))
          }
        </div>
    </div>
  )
}

export default EducationInfo