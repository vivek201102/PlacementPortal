import axios from 'axios';
import React, { useContext, useState } from 'react'
import { apis } from '../../Apis/apis';
import { DrivesContext } from '../../Context/context';

const AddDrive = ({setAddDriveVisible}) => {
    const { detect, setDetect } = useContext(DrivesContext);

    const [driveDetail, setDriveDetail] = useState({
        companyName:'',
        description:'',
        ctc:'',
        role:'',
        eligibilityCriteria:'',
        requiredQualification:'',
        deadLineForApplication:'',
        createdAt:''
    });

    const onChangeDriveDetails = (e) => {
        setDriveDetail({...driveDetail, [e.target.name]: e.target.value});
    }

    const onClickCreateButton = async () => {
        // setDriveDetail({...driveDetail, 'createdAt': new Date(), 'deadLineForApplication': new Date(driveDetail.deadLineForApplication)})
        driveDetail.createdAt = new Date();
        driveDetail.deadLineForApplication = new Date(driveDetail.deadLineForApplication)
        
        await axios.post(apis.postPlacementDrive, driveDetail)
        .then((res) => {
            console.log(res);
            setDriveDetail({
                companyName:'',
                description:'',
                ctc:'',
                role:'',
                eligibilityCriteria:'',
                requiredQualification:'',
                deadLineForApplication:'',
                createdAt:''
            });
        })
        .catch((err) => {
            console.log(err);
        })

        console.log(driveDetail)

        detect ? setDetect(false) : setDetect(true)
        
        setAddDriveVisible(false);
    }
    
    const onClickCancelButton = () => {
        setAddDriveVisible(false);
    }
  return (
    <div className='m-6 bg-slate-200 '>
        <div className='p-5'>
            <h1 className='font-bold text-2xl'>ADD DRIVE</h1>
        </div>
            <div className='px-5 py-2 w-full'>
                <label className='block uppercase tracking-wide text-gray-700 font-bold'>Company Name</label>
                <input className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' name='companyName' onChange={onChangeDriveDetails} />
            </div>
            <div className='px-5 py-2 w-full'>
                <label className='block uppercase tracking-wide text-gray-700 font-bold'>Description</label>
                <textarea className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' rows={12} name='description' onChange={onChangeDriveDetails} />
            </div>
            <div className='flex flex-wrap w-full -mx-0 '>
                <div className='w-1/2 px-5 py-2'>
                    <label className='block uppercase tracking-wide text-gray-700 font-bold'>CTC (Per Enum)</label>
                    <input className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' name='ctc' onChange={onChangeDriveDetails} />
                </div>
                <div className='w-1/2 px-5 py-2'>
                    <label className='block uppercase tracking-wide text-gray-700 font-bold'>Role</label>
                    <input className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' name='role' onChange={onChangeDriveDetails} />
                </div>
                <div className='w-1/2 px-5 py-2'>
                    <label className='block uppercase tracking-wide text-gray-700 font-bold'>Eligibility Criteria</label>
                    <input className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' name='eligibilityCriteria' onChange={onChangeDriveDetails} />
                </div>
                <div className='w-1/2 px-5 py-2'>
                    <label className='block uppercase tracking-wide text-gray-700 font-bold'>Qualification Required</label>
                    <input className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' name='requiredQualification' onChange={onChangeDriveDetails} />
                </div>
                <div className='w-1/2 px-5 py-2'>
                    <label className='block uppercase tracking-wide text-gray-700 font-bold'>Deadline For Application</label>
                    <input className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='date' name='deadLineForApplication' onChange={onChangeDriveDetails} />
                </div>
        </div>
        <div className='px-5 py-2 ms-auto w-fit'>
            <button className='py-3 mx-3 px-5 text-white bg-green-600 rounded-full' onClick={onClickCreateButton}>Create</button>
            <button className='py-3 mx-3 px-5 text-white bg-red-600 rounded-full' onClick={onClickCancelButton}>Cancel</button>
        </div>
    </div>
  )
}

export default AddDrive