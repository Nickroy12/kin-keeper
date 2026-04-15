'use client'
import { FriendApi } from '@/context/ContextApi'
import React, { useContext } from 'react'
import { CiChat1 } from 'react-icons/ci'


const Chat = ({friend}) => {
  const {handleInput} = useContext(FriendApi)

  const type = {
     type : "chat",
    name: friend.name,
    time: new Date()
  }
  return (
            <div onClick={() => handleInput(type)} className="flex flex-col items-center py-10 cursor-pointer shadow rounded">
          <CiChat1 className="text-3xl text-green-900" />
          <p>Chat</p>
        </div>
  )
}

export default Chat