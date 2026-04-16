import React from 'react'
import { DotLoader, FadeLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='h-60 flex justify-center items-center '>
        <FadeLoader color="#0d542b"   speedMultiplier={5} />
    </div>
  )
}

export default Loading