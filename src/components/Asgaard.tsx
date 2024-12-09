import React from 'react'
import Image from 'next/image'

const Asgaard = () => {
  return (
    <div className='flex bg-[#FFF9E5]'>
      <div>
        <Image src={"/images/asgaard sofa.png"} alt='asgaard' width={983} height={799}/>
      </div> 
      <div className='pt-80'>
        <h1 className='font-medium text-2xl leading-9'>
            New Arrivals
        </h1>
        <h1 className='font-bold text-5xl leading-[72px] w-[331px] h-[72px]'>Asgaard sofa</h1>
         <div className='w-[255px] h-16'>
          <button className='border w-[255px] h-16 border-[#000000]'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Asgaard