import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
   <section>  
     <div className='flex bg-[#FBEBB5]'>
       <div className='pt-72 pl-56'>
         <h1 className='font-medium text-[64px]'>Rocket single seater</h1>
         <button className='inline-block underline underline-offset-8'>
          Shop Now
         </button>
        </div>
        <div className=''>
          <Image src={"/images/seater.png"} alt='seater' width={853} height={1000}/>
        </div>
     </div> 
   </section>
  )
}

export default Hero
