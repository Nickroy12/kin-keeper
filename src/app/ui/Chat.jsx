'use client'
import React from 'react'
import { CiChat1 } from 'react-icons/ci'

const handleInput = () =>{
    console.log('typing....')
}
const Chat = () => {
  return (
            <div onClick={handleInput} className="flex flex-col items-center py-10 cursor-pointer shadow rounded">
          <CiChat1 className="text-3xl text-green-900" />
          <p>Chat</p>
        </div>
  )
}

export default Chat