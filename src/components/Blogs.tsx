import React from 'react'
import Image from 'next/image'

const Blogs = () => {
  return (
    <div className=''>
       <div>
          <h1 className='flex justify-center items-center pt-10 font-medium text-4xl leading-[54px]'>
            Our Blogs
          </h1>
          <p className='flex justify-center items-center pt-2 font-medium text-base leading-6 text-[#9F9F9F]'>
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>
        <div className='flex gap-6 pt-10'>
            <Image src={"/images/card1.png"} alt='card' width={393} height={555}/>
            <Image src={"/images/card2.png"} alt='card' width={393} height={554}/>
            <Image src={"/images/card3.png"} alt='card' width={393} height={553}/>
        </div>
        <div className='flex justify-center items-center pt-20 underline underline-offset-8'>
            <button>View All Post</button>
        </div>
    </div>
  )
}

export default Blogs
