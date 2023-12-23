import React from 'react'

const statistics = () => {
  return (
    <div className='m-6 bg-slate-200 p-5 w-10/12 h-fit'>
        <h1 className='text-xl'>Placement Cell Statistics</h1>
        <div className='grid grid-cols-2 my-3'>
            <div className='bg-yellow-200 p-3 w-3/4'>
                <h1>CO-ORDINATORS</h1>
                <h1 className='font-bold text-2xl'>5</h1>
            </div>
            <div className='bg-yellow-200 w-3/4 p-3'>
                <h1>PENDING CO-ORDINATORS APPROVAL</h1>
                <h1 className='font-bold text-2xl'>1</h1>
            </div>
        </div>

        <div className='grid grid-cols-2 my-3'>
            <div className='bg-yellow-200 p-3 w-3/4'>
                <h1>REGISTERED STUDENTS</h1>
                <h1 className='font-bold text-2xl'>5</h1>
            </div>
            <div className='bg-yellow-200 w-3/4 p-3'>
                <h1>PENDING STUDENTS REQUESTS</h1>
                <h1 className='font-bold text-2xl'>5</h1>
            </div>
        </div>

        <div className='grid grid-cols-2 my-3'>
            <div className='bg-yellow-200 p-3 w-3/4'>
                <h1>TOTAL POSTED DRIVES</h1>
                <h1 className='font-bold text-2xl'>5</h1>
            </div>
            <div className='bg-yellow-200 w-3/4 p-3'>
                <h1>PENDING DRIVE APPLICATION</h1>
                <h1 className='font-bold text-2xl'>5</h1>
            </div>
        </div>
    </div>
  )
}

export default statistics