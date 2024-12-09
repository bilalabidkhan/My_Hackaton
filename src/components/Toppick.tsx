import React from 'react'
import Image from 'next/image'

const Toppick = () => {
  return (
    <div>
      <div className='flex justify-center items-center pt-8'>
       <div className=''>
        <div>
           <h1 className='font-medium text-4xl leading-[54px] flex justify-center items-center'>Top Picks For You</h1>
           <p className='font-medium text-base leading-6 text-[#9F9F9F] flex justify-center items-center'>
            Find a bright ideal to suit your taste 
            with our great selection of suspension, 
            floor and table lights.
           </p>
        </div>
        <div className='flex space-x-6 pl-14'>
         <Image src={"/images/modular sofa.png"} alt='sofa' width={287} height={287} className='pt-20'/>
         <Image src={"/images/dining chair.png"} alt='dining' width={255} height={185} className='pt-28'/>
         <Image src={"/images/table and stool.png"} alt='table' width={250} height={375} className='pt-20'/>
         <Image src={"/images/Plain mirror.png"} alt='mirror' width={240} height={174} className='pt-28'/>
        </div>
        <div className='flex p-10 space-x-32'>
          <div>
             <h1>Trenton modular sofa_3</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 25,000.00</p>
          </div>
          <div>
             <h1>Granite dining table with dining chair</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 25,000.00</p>
          </div>
          <div>
             <h1>Outdoor bar table and stool</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 25,000.00</p>
          </div>
          <div>
             <h1>Plain console with teak mirror</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 25,000.00</p>
          </div>
        </div>
        <div className='flex justify-center items-center pb-16 underline underline-offset-8'>
           <button>View More</button>
        </div>
      </div>
     </div>
   </div>
  ) 
}

export default Toppick
