import React, { useState } from 'react'
import ExperienceDetail from './ExperienceDetail'

const ExperienceInfo = () => {
    const [experienceInfo, setExperienceInfo] = useState([
        { title: "Backend Developer Intern", start:'May-2022', end:'Jun-2022', description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", organization: 'Groovy Web' }])
  return (
    <div>
        <h1 className='text-xl font-bold uppercase text-center'>Experience</h1>
        <div className='p-5 w-full justify-self-center'>

          {
            experienceInfo.map((item, index) => (
              <ExperienceDetail experience = {item}  />
            ))
          }
        </div>
    </div>
  )
}

export default ExperienceInfo