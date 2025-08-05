import React from 'react'
import { useErrorBoundary } from "react-error-boundary"

const FallBackUi = ({error}) => {
    const {resetBoundary} = useErrorBoundary()
  return (
      <div className='h-screen w-screen flex justify-center items-center'>
          <div className='border px-10 py-5 rounded-md space-y-4 '>
            <p className='font-semibold text-2xl'>Opps! something wrong</p>
            <pre className='text-xs text-red-700'>{error.message}</pre>
            <button className='border px-2 py-1 rounded-md text-md bg-blue-900 text-white cursor-pointer' onClick={()=>resetBoundary()}>Try again</button>
          </div>
      </div>
  )
}

export default FallBackUi
