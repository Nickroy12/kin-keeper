'use client'
import React, { createContext, useState,  } from 'react'
import { toast } from 'react-toastify'

export const FriendApi = createContext()
const ContextApi = ({children}) => {
      const [calls , setCalls] = useState([])
  const handleInput = (status) =>{
    setCalls([...calls , status])
   toast(
  status.type === 'call'
    ? `${status.name} is ringing`
    : status.type === 'video'
    ? `${status.name} is Video Calling`
    : `${status.name} is typing`
);
}
console.log(calls , "calls")
const data = {
     calls , handleInput ,setCalls
}
  return (
    <FriendApi.Provider value={data}>
        {children}
    </FriendApi.Provider >
  )
}

export default ContextApi