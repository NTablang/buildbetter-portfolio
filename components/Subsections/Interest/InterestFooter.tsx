import BrandButton from '@/components/BrandButton'
import PaddingMedium from '@/components/Layouts/PaddingMedium'
import React from 'react'

function InterestFooter() {
  return (
    <PaddingMedium>
    <div className="mt-72 center flex-col pb-44">
      <h1 className="black-text-gradient text-8xl">
          Meet
      </h1>
      <h1 className="text-6xl md:text-8xl mb-12">
        BuildNathan
      </h1>
      <a href={"mailto: nathantablang@yahoo.com"}><BrandButton text={"Send Email!"} size={"lg"}/></a>
    </div>
    </PaddingMedium>
  )
}

export default InterestFooter