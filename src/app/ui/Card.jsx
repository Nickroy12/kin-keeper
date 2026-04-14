import Image from 'next/image'
import React from 'react'

export const Card = ({friend}) => {
  return (
    <div>
        <div className="card shadow-md">
  <div className="card-body items-center text-center">
    <figure>
        <Image src={friend.picture} width={70} height={70} className='rounded-full border-4 border-green-900' alt={friend.name}/>
    </figure>
    <h2 className="card-title text-3xl">{friend.name}</h2>
    <p className='text-gray-600 font-bold'>{friend.days_since_contact} day</p>
    <div className="card-actions justify-end">
        {
            friend.tags.map((tag, i) =>{
          return  <button key={i} className='bg-green-200 rounded-md p-2 ' >{tag}</button>
            }
             
            )
        }
    </div>
  </div>
</div>
    </div>
  )
}
