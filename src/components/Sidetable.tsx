import React from 'react'
import Image from 'next/image'

const Sidetable = () => {
  return (
    <div className='flex justify-center items-center bg-[#FAF4F4]'>
      <div className='pl-6'>
        <Image src={"/images/table.png"} alt='table' width={1092} height={1641}/>
        <div className='p-4'>
            <h1 className='font-medium text-4xl leading-[54px]'>Side table</h1>
            <button className='font-medium text-2xl leading-9 underline underline-offset-8'>View More</button>
        </div>
      </div>
      <div className='pb-12'>
        <Image src={"/images/Cloud sofa.png"} alt='cloudsofa' width={1585} height={1055} className='pr-[40px] pt-10'/>
        <div className='pb-28 pl-[100px] '>
            <h1 className='font-medium text-4xl leading-[54px]'>Side table</h1>
            <button className='font-medium text-2xl leading-9 underline underline-offset-8'>View More</button>
        </div>
      </div>
    </div>
  )
}

export default Sidetable
