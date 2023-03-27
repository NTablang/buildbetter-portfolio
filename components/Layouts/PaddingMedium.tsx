import React from 'react'

type ClassicPaddingProps = {
    children: React.ReactNode
}

function PaddingMedium({ children }: ClassicPaddingProps) {
  return (
    <div className="px-8 md:px-80 w-screen">
        {children}
    </div>
  )
}

export default PaddingMedium