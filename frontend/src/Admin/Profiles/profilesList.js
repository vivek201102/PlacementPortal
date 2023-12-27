import React, { useContext } from 'react'
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileContext } from '../../Context/context'
import axios from 'axios'
import { apis } from '../../Apis/apis'

const ProfilesList = () => {

    const { setProfileViewVisible, setEducation, setExperience, setSkills, setStudentData, students } = useContext(ProfileContext);
    const onClickViewButton = async (studentId) => {

        await axios.get(`${apis.getSkillOfStudent}/${studentId}`)
        .then((res) => {
            setSkills(res.data.$values);
        })
        .catch((err) => {
            console.log(err);
        })

        await axios.get(`${apis.getEducationByStudent}/${studentId}`)
        .then((res) => {
            setEducation(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

        await axios.get(`${apis.getExperienceByStudent}/${studentId}`)
        .then((res) => {
            setExperience(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

        await axios.get(`${apis.getStudentById}/${studentId}`)
        .then((res) => {
            setStudentData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
        

        setProfileViewVisible(true);
    }
  return (
    <div className='m-6'>
        <div className=' p-5 h-fit bg-slate-200'>
        <h1 className='font-bold text-center text-2xl'>STUDENTS</h1>
            <div className='flex'>
                <div className='mx-2 py-2 px-5 bg-slate-100 border rounded-full'>
                    Current
                </div>
                <div className='mx-2 py-2 px-5 bg-slate-100 border rounded-full'>
                    Upcoming
                </div>
                <div className='mx-2 py-2 px-7 bg-slate-100 border rounded-full'>
                    All
                </div>
            </div>

            <div className=''>
                <table className='table-auto w-full'>
                    <thead>
                        <th className='px-5 py-3'>Name</th>
                        <th className='px-5 py-3'>ID</th>
                        <th className='px-5 py-3'>Email</th>
                        <th className='px-5 py-3'>View</th>
                        <th className='px-5 py-3'>Actions</th>
                    </thead>
                    <tbody className='text-center'>
                    {
                        students.map((element, index) => (
                                <tr id={index}>
                                <td className='px-5 py-3 uppercase'>{element.name} {element.surname}</td>
                                <td className='px-5 py-3 uppercase'>{element.id}</td>
                                <td className='px-5 py-3 lowercase'>{element.email}</td>
                                <td className='px-5 py-3' onClick={()=>{ onClickViewButton(element.id) }}><FontAwesomeIcon icon={faEye} className='cursor-pointer text-blue-900'/></td>
                                <td className='px-5 py-3'><FontAwesomeIcon icon={faTrash} className='cursor-pointer text-red-600'/></td>
                                </tr>
                        ))
                        } 
                    </tbody>
                </table>
            </div>
        </div>    
    </div>
  )
}

export default ProfilesList