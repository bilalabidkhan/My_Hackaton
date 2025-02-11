import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Asgaard = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row items-center bg-[#FFF9E5] py-8 md:py-auto'>
      <div className='my-8 md:mt-0 md:w-[70%]'>
        <Image src={"/images/asgaard sofa.png"} alt='asgaard' width={983} height={799} className=''/>
      </div>
      <div className='bg-cover'>
        <h1 className='font-medium text-2xl leading-9 text-center'>
           New Arrivals
        </h1>
        <p className='font-bold text-3xl sm:text-3xl md:text-3xl lg:text-5xl leading-[72px] w-[331px] h-[72px] text-center'>
          Asgaard sofa
        </p>
        <div className='flex justify-center items-center'>
          <Link href={"/sofa"}><button className='w-[255px] h-16 border border-[#000000] rounded '>Order Now</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Asgaard