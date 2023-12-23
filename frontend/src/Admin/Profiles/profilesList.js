import React, { useContext } from 'react'
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileContext } from '../../Context/context'

const ProfilesList = () => {
    const students = [1,2,3,4,5]
    /*
    [
        {
            info:{
                'id':'20CEUOS007'
                'name':'Vivek',
                'surname':'Patel',
                'email':'vivekpatel201102@gmail.com'
                'mobile':'+91 9016051012'
                'address':'7, Tapovan society, Nadiad - 387002'
            },
            resume:'file.pdf',
            skills:['HTML', 'CSS', 'JS', 'Java', 'C++', 'MySQL', 'MongoDB'],
            education:[
            {title: 'Bachlor\'s of Technology', institue:'Dharmsinh Desai University', start:'Sept-2020', end:'May-2024', result:'8.56 CPI'},
            {title: '12th Board', institue:'New English School', start:'Jun-2019', end:'May-2020', result:'83%'},
            {title: '10th Board', institue:'Sharda Mandir School', start:'Jun-2017', end:'May-2018', result:'94%'}],
            experience:[
            {title:'Backend Developer Intern', company:'Groovy Web', description:'Completed internship in backend development in node.js. Created RestAPI using mongodb database', start:'May-2022', end:'June-2022'},
            {title:'Backend Developer Intern', company:'Groovy Web', description:'Completed internship in backend development in node.js. Created RestAPI using mongodb database', start:'May-2022', end:'June-2022'}
          ]
        }
    ]
    */
    const { setProfileViewVisible, setEducation, setExperience, setSkills } = useContext(ProfileContext);
    const onClickViewButton = (index) => {
        setEducation([
            {title: 'Bachlor\'s of Technology', institue:'Dharmsinh Desai University', start:'Sept-2020', end:'May-2024', result:'8.56 CPI'},
            {title: '12th Board', institue:'New English School', start:'Jun-2019', end:'May-2020', result:'83%'},
            {title: '10th Board', institue:'Sharda Mandir School', start:'Jun-2017', end:'May-2018', result:'94%'}
          ]);

          setExperience([
            {title:'Backend Developer Intern', company:'Groovy Web', description:'Completed internship in backend development in node.js. Created RestAPI using mongodb database', start:'May-2022', end:'June-2022'},
            {title:'Backend Developer Intern', company:'Groovy Web', description:'Completed internship in backend development in node.js. Created RestAPI using mongodb database', start:'May-2022', end:'June-2022'}
          ]);
        
          setSkills(['HTML', 'CSS', 'JS', 'Java', 'C++', 'MySQL', 'MongoDB']);
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
                        <th className='px-5 py-3'>CPI</th>
                        <th className='px-5 py-3'>View</th>
                        <th className='px-5 py-3'>Actions</th>
                    </thead>
                    <tbody className='text-center'>
                    {
                        students.map((element, index) => (
                                <tr>
                                <td className='px-5 py-3'>Raj</td>
                                <td className='px-5 py-3'>20CEUOS999</td>
                                <td className='px-5 py-3'>8.67</td>
                                <td className='px-5 py-3' onClick={()=>{ onClickViewButton(index) }}><FontAwesomeIcon icon={faEye} className='cursor-pointer text-blue-900'/></td>
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