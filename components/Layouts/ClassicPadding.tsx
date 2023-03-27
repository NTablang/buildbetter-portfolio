import React from 'react'

type ClassicPaddingProps = {
    children: React.ReactNode
}

function ClassicPadding({ children }: ClassicPaddingProps) {
  return (
    <div className="px-8 md:px-20 w-screen">
        {children}
    </div>
  )
}

export default ClassicPadding