'use client'

import { useContext, useState } from "react"
import TimeCard from "../ui/TimeCard"
import { FriendApi } from "@/context/ContextApi"

const Timeline = () => {
  const { calls } = useContext(FriendApi)
  const [filter, setFilter] = useState("all")

  const filteredCalls =
    filter === "all"
      ? calls
      : calls.filter(call => call.type === filter)

  if (!calls || calls.length === 0) {
    return (
      <div className='flex flex-col justify-center w-10/12 m-auto items-center shadow h-screen'>
        <h1 className='text-xl font-semibold'>No Call History Found</h1>
        <p className="text-gray-500">Your timeline is empty right now</p>
      </div>
    )
  }

  return (
    <div className="w-10/12 mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">Timeline</h1>

<div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1">
     Search by   <span className="text-green-900">{filter}</span>
  </div>

  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={() => setFilter('all')}><a>All</a></li>
    <li onClick={() => setFilter('call')}><a>Call</a></li>
    <li onClick={() => setFilter('video')}><a>Video</a></li>
    <li onClick={() => setFilter('chat')}><a>Chat</a></li>
  </ul>
</div>

      <div className="shadow-sm rounded-2xl p-4 space-y-3">
        {
          filteredCalls.map((call, i) => (
            <TimeCard key={call.id || i} call={call} />
          ))
        }
      </div>
    </div>
  )
}

export default Timeline