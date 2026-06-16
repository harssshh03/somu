import Loader from '@/components/icons/loader'
import React from 'react'

const loading = () => {
  return (
    <div className='h-screen flex justify-center flex-col items-center'>
        <Loader/>
    </div>
  )
}

export default loading