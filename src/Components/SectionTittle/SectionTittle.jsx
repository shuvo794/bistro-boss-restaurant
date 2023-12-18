import React from 'react'

function SectionTittle({heading,subHeading}) {
  return (
    <div className='mx-auto text-center md:w-3/12 my-8'>
        <p className='text-yellow-600 mb-2'>--- {subHeading} ---</p>
        <h2 className='text-4xl border-y-4 py-4'>{heading}</h2>
    </div>
  )
}

export default SectionTittle