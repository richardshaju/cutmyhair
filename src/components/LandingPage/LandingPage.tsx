import React from 'react'
import LandingPageBanner from './LandingPageBanner'
import CardComponent from '../home/cardComponent'
import Services from '../home/services'

function LandingPage() {
  return (
    <div>
        <LandingPageBanner/>
        <hr className='my-20'/>
        <div className="flex flex-col justify-center items-center serviceHeader">
          <h1 className='font-bold text-[56px] mb-4'>Saloons</h1>
          <p className='text-gray-400 text-[20px]'>Book smarter, not harder</p>
        </div>
        <CardComponent />
        <hr className='my-20'/>
        <Services />
    </div>
  )
}

export default LandingPage