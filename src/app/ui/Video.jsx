'use client'
import React from 'react'
import { IoVideocamOutline } from 'react-icons/io5'
 
const handleInput = () =>{
    console.log('Video Calling.....')
}
const Video = () => {
  return (
            <div onClick={handleInput} className="flex flex-col items-center py-10 shadow cursor-pointer rounded">
          <IoVideocamOutline className="text-3xl text-green-900" />
          <p>Video Call</p>
        </div>
  )
}

export default Video