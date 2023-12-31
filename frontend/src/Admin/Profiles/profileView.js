import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faGraduationCap, faWrench, faFile, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ProfileContext } from '../../Context/context'


const ProfileView = ({education, experience, skills, studentData}) => {

  const { setProfileViewVisible } = useContext(ProfileContext);


  const onClickCloseViewButton = () => {
    setProfileViewVisible(false);
  }

  return (
    <div className='m-6'>
        <div className=' p-5 min-h-fit bg-slate-200'>
            <div className='flex align-middle'>
                <div className=' w-full h-full'>
                  <h1 className='text-right text-2xl '><FontAwesomeIcon icon={faXmark}  onClick={onClickCloseViewButton} className='cursor-pointer'/></h1>
                  <h1 className='font-bold pt-4 text-center text-3xl'>
                    {studentData.name.toUpperCase()} {studentData.surname.toUpperCase()}
                  </h1>
                  <h1 className='font-bold pt-4 text-center w-full'>
                    <span className='mx-3 my-2'>{studentData.email}</span><span>|</span>
                    <span className='mx-3 my-2'>{studentData.phone}</span><span>|</span>
                    <span className='mx-3 my-2'>{studentData.address}</span>  
                  </h1>
                  <h1 className='font-bold pt-4 text-center w-full'>
                    <FontAwesomeIcon icon={faFile} />
                    <span className='mx-2'>Resume</span>
                    <FontAwesomeIcon icon={faDownload} className='cursor-pointer'/>
                  </h1>
                </div>
            </div>

            <div className=' mt-3 flex justify-between flex-wrap'>
              <div className='p-5 '>
                <FontAwesomeIcon icon={faWrench}  className='text-xl'/>
                <span className='mx-3 text-xl'>SKILLS</span>
                <ul className='list-disc mx-10 my-3'>
                  {
                    skills.map((item, index) => (<li key={index}>{item.SkillName}</li>))
                  }
                </ul>
                
              </div>
              <div className='p-5 w-2/5'>
              <FontAwesomeIcon icon={faFile}  className='text-xl'/>
                <span className='mx-3 text-xl'>Experience</span>
                {
                  experience.map((item, index)=>(
                    <div className='my-2 w-full' id={index}>
                    <h1 className='text-xl'>{item.title}</h1>
                    <div className='flex'>
                      <h1>{item.organization}</h1>
                      <h1 className='w-fit ms-auto'>
                        <span className='text-xs me-2'>{item.start}</span>
                        <span className='text-xs'>{item.end}</span>
                      </h1>
                    </div>
                      <h1 className=''>
                      {item.description}
                      </h1>
                    
                  </div>
                  ))
                }
                
              </div>
              
              <div className='p-5 w-2/5'>
              <FontAwesomeIcon icon={faGraduationCap}  className='text-xl'/>
                <span className='mx-3 text-xl'>Education</span>
                {
                  education.map((item, index) => (
                    
                    <div className='my-4 w-full'>
                      <h1 className='text-xl'>{item.title}</h1>
                      <div className='flex'>
                        <h1>{item.institute}</h1>
                        <h1 className='w-fit ms-auto'>
                          <span className='text-xs me-2'>{item.start}</span>
                          <span className='text-xs'>{item.end}</span>
                        </h1>
                      </div>
                        <h1 className=''>
                        {item.result}
                        </h1>
                      
                    </div>
                  ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileView