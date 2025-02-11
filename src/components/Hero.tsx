import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
   
     <div className='w-full md:h-[735px] bg-[#FBEBB5] flex flex-col sm:flex-row items-center m'>
       <div className=' '>
         <h1 className=' font-medium text-[28px] sm:text-[50px] tracking px-10  mx-4 sm:mx-auto'>Rocket single seater</h1>
         <button className='inline-block underline underline-offset-8 ml-10 md:ml-14 lg:ml-20'>
           Shop Now
         </button>
        </div>
        <div className=''>
          <Image src={"/images/seater.png"} alt='seater' width={853} height={1000} className='w-full mt-10 rotate-[-180]'/>
        </div>
     </div> 
  
  )
}

export default Hero
