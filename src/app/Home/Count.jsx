import React from 'react'

export const Count = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-4 gap-4">
        
        <div className="flex justify-center flex-col items-center h-[100px] shadow rounded">
          <h1 className="text-2xl font-bold text-green-900">10</h1>
          <p className='text-gray-500 font-semibold' >Total Friend</p>
        </div>

        <div className="flex justify-center flex-col items-center h-[100px] shadow rounded">
          <h1 className="text-2xl font-bold text-green-900">3</h1>
           <p className='text-gray-500 font-semibold' >On track</p>
        </div>

        <div className="flex justify-center flex-col items-center h-[100px] shadow rounded">
          <h1 className="text-2xl font-bold text-green-900">6</h1>
           <p className='text-gray-500 font-semibold' >Need Attention</p>
        </div>

        <div className="flex justify-center flex-col items-center h-[100px] shadow rounded">
          <h1 className="text-2xl font-bold text-green-900">12</h1>
           <p className='text-gray-500 font-semibold' >Interaction this month</p>
        </div>

      </div>
    </div>
  )
}