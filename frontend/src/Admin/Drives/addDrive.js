import React from 'react'

const AddDrive = ({setAddDriveVisible}) => {
    const onClickCreateButton = () => {
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
                <input className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' />
            </div>
            <div className='px-5 py-2 w-full'>
                <label className='block uppercase tracking-wide text-gray-700 font-bold'>Description</label>
                <textarea className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' rows={12} />
            </div>
            <div className='flex flex-wrap w-full -mx-0 '>
                <div className='w-1/2 px-5 py-2'>
                    <label className='block uppercase tracking-wide text-gray-700 font-bold'>CTC (Per Enum)</label>
                    <input className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' />
                </div>
                <div className='w-1/2 px-5 py-2'>
                    <label className='block uppercase tracking-wide text-gray-700 font-bold'>Role</label>
                    <input className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' />
                </div>
                <div className='w-1/2 px-5 py-2'>
                    <label className='block uppercase tracking-wide text-gray-700 font-bold'>Eligibility Criteria</label>
                    <input className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' />
                </div>
                <div className='w-1/2 px-5 py-2'>
                    <label className='block uppercase tracking-wide text-gray-700 font-bold'>Qualification Required</label>
                    <input className='appearance-none block w-full  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text' />
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