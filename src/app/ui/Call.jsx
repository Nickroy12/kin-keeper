'use client'
import React from 'react'
import { IoIosCall } from 'react-icons/io'
const handleInput = () =>{
    console.log('Calling...')
}
const Call = () => {
  return (
       <div onClick={handleInput} className="flex flex-col items-center py-10 shadow rounded">
          <IoIosCall className="text-3xl text-green-900" />
          <p>Call</p>
        </div>
  )
}

export default Call