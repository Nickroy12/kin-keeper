'use client'
import React, { createContext, useState,  } from 'react'

export const FriendApi = createContext()
const ContextApi = ({children}) => {
      const [calls , setCalls] = useState([])
  const handleInput = (status) =>{
    setCalls([...calls , status])
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