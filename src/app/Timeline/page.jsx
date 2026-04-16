'use client'

import { useContext } from "react"
import { FriendApi } from "@/context/ContextApi"
import TimeCard from "../ui/TimeCard"

const Timeline = () => {
  const { calls } = useContext(FriendApi)

  if (!calls || calls.length === 0) {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-xl font-semibold'>No Call History Found</h1>
        <p className="text-gray-500">Your timeline is empty right now</p>
      </div>
    )
  }

  return (
    <div className="w-10/12 mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Timeline</h1>

      <div className="shadow-sm rounded-2xl p-4 space-y-3">
        {
          calls.map((call, i) => (
            <TimeCard key={call.id || i} call={call} />
          ))
        }
      </div>
    </div>
  )
}

export default Timeline