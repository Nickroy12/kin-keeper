import React from 'react'
import { CiChat1 } from 'react-icons/ci'
import { IoIosCall } from 'react-icons/io'
import { IoVideocamOutline } from 'react-icons/io5'

const TimeCard = ({ call }) => {



  return (
    <div className='mb-4'>
      <div className="card card-side shadow-sm">
        
        <figure className='p-4'>
          {
            call.type === "call" ? <IoIosCall className="text-3xl text-green-900" /> :
            call.type === "chat" ? <CiChat1 className="text-3xl text-green-900" /> :
            <IoVideocamOutline className="text-3xl text-green-900" />
          }
        </figure>

        <div className="card-body">
          <h2 className="text-xl font-medium">
            {
              call.type === "call" ? (
                <>Call with <b>{call.name}</b></>
              ) : call.type === "chat" ? (
                <>Chat with <b>{call.name}</b></>
              ) : (
                <>Video-call with <b>{call.name}</b></>
              )
            }
          </h2>

          <p>
            at {new Date(call.time).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>

        </div>
      </div>
    </div>
  )
}

export default TimeCard