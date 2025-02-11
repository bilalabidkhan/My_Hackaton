import React from 'react'
import Image from 'next/image'

const Sidetable = () => {
  return (
    <div className='flex flex-col justify-center pb-10 w-full bg-[#FAF4F4]'>
      <div className='flex flex-col sm:flex-row justify-center m-2'>
        { /* side table 1 */ }
         <div className='w-full md:w-1/2 h-auto text-center md:text-left retative mb-8 md:mb-0'>
           <Image src={"/images/table.png"} alt='table' width={1092} height={1641} className='pr-[40px] pt-10'/>
           <h1 className='w-[182px] h-[54px] font-medium text-2xl md:text-4xl leading-[54px] text-center'>Side table</h1>
           <button className='font-medium text-xl md:text-2xl leading-9 underline underline-offset-8 '>View More</button>
         </div>
        { /* side table 2 */ }
         <div className='w-full md:w-1/2 h-auto text-center md:text-left retative mb-8 md:mb-0'>
           <Image src={"/images/Cloud sofa.png"} alt='cloudsofa' width={1585} height={1055} className='pr-[40px] pt-10'/>
           <h1 className='w-[182px] h-[54px] font-medium text-2xl md:text-4xl leading-[54px] text-center'>Side table</h1>
           <button className='font-medium text-xl md:text-2xl leading-9 underline underline-offset-8'>View More</button>
         </div>
      </div>
    </div>
  )
}

export default Sidetable
