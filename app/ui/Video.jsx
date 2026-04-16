'use client'

import React, { useContext } from 'react'
import { IoVideocamOutline } from 'react-icons/io5'
import { FriendApi } from '../../context/ContextApi'
 

const Video = ({friend}) => {
   const {handleInput} = useContext(FriendApi)
   const type = {
    type : "video",
    name: friend.name,
    time: new Date()
   }
  return (
            <div onClick={() =>handleInput(type)} className="flex flex-col items-center py-10 shadow cursor-pointer rounded">
          <IoVideocamOutline className="text-3xl text-green-900" />
          <p>Video Call</p>
        </div>
  )
}

export default Video