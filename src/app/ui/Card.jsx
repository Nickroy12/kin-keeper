import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Card = ({friend}) => {
  return (
    <div>
       <Link href={`/details/${friend.id}`}> <div  className="card shadow-md space-y-2">
  <div className="card-body items-center text-center">
    <figure>
        <Image src={friend.picture} width={70} height={70} className='rounded-full border-4 border-green-900' alt={friend.name}/>
    </figure>
    <h2 className="card-title text-2xl">{friend.name}</h2>
    <p className='text-gray-600 font-bold'>{friend.days_since_contact} day</p>
    <div className="card-actions flex">
        {
            friend.tags.map((tag, i) =>{
          return  <button key={i} className='bg-green-200 rounded-md p-2 ' >{tag}</button>
            }
             
            )
        }
        
    </div>
    <button  className={` ${friend.status === 'on-track'? "bg-green-700" : friend.status === 'almost due' ? "bg-amber-400": 'bg-red-400'} text-white rounded-4xl p-2 `} >{friend.status}</button>
  </div>
</div></Link>
    </div>
  )
}
