import React, { PropsWithChildren } from 'react'
import Navbar from '../../components/Navbar'

const layout = ({children}: PropsWithChildren) => {
  return (
    <div  className="relative flex h-screen w-full flex-col">
     <Navbar />
      <div className='w-full'>
      {children}
      </div>
    </div>
  )
}

export default layout
