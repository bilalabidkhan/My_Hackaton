import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=''>
     <div className='grid grid-cols-1 md:grid-cols-4'>
      <div className='flex justify-center items-center ml-10 p-2'>
        <p className='font-normal text-base leading-6 text-[#9F9F9F]'>
         400 University Drive Suite 200 Coral Gables,  
         FL 33134 USA
        </p>
      </div>
      <div className='pt-28 pl-16'>
         <h1 className='pb-10 font-medium text-base leading-6 text-[#9F9F9F]'>Link</h1>
        <ul className='mt-6 space-y-6'>
          <li><Link href={"/"} className='font-medium text-base leading-6'>Home</Link></li>
          <li><Link href={"/shop"} className='font-medium text-base leading-6'>Shop</Link></li>
          <li><Link href={"/about"} className='font-medium text-base leading-6'>About</Link></li>
          <li><Link href={"/contact"} className='font-medium text-base leading-6'>Contact</Link></li>
        </ul>
      </div>
      <div className='pt-28 pl-12'>
         <h1 className='pb-10 font-medium text-base leading-6 text-[#9F9F9F]'>Help</h1>
        <ul className='mt-6 space-y-6'>  
          <li className='font-medium text-base leading-6'>Payment Options</li>
          <li className='font-medium text-base leading-6'>Returns</li>
          <li className='font-medium text-base leading-6'>Privacy Policies</li>
        </ul>
      </div>
      <div className='pt-28'>
         <h3 className='font-medium text-base leading-6 text-[#9F9F9F]'>Newsletter</h3>
         <div className='mt-14'>
          <input type="email" placeholder='Enter your Email Address' className='underline underline-offset-8'/>
          <button className='underline underline-offset-8'>SUBSCRIBE</button>
         </div>
      </div>
      <div className='mt-8 text-center text-sm pt-16 pb-10'>
        <p>2022 Meubel House. All rights reverved</p>
      </div>
    </div>
   </footer>
  )
}

export default Footer
