'use client'

import React, { useContext, useState } from 'react'
import { IoIosCall } from 'react-icons/io'
import { FriendApi } from '../../context/ContextApi'

const Call = ({friend}) => {
  
  const {handleInput } = useContext(FriendApi)
 
  const type = {
    type : "call",
    name: friend.name,
    time: new Date()
  }

  return (
       <div onClick={() =>handleInput(type)} className="flex flex-col cursor-pointer items-center py-10 shadow rounded">
          <IoIosCall className="text-3xl text-green-900" />
          <p>Call</p>
        </div>
  )
}

export default Call