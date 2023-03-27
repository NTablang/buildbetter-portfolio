import React from 'react'
import PaddingMedium from './Layouts/PaddingMedium'

function Footer() {
  return (
   <div className='bg-white pb-4'>
    <PaddingMedium>
        <p className='text-black text-sm md:ml-[-7rem] opacity-50 md:p-0 p-4'>
            Mostly inspired by your website! (I hope I don't get sued)
        </p>
    </PaddingMedium>
   </div>
  )
}

export default Footer