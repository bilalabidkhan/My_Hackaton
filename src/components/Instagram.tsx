import React from 'react'
import Image from 'next/image'

const Instagram = () => {
  return (
    <main className='pt-10'>
    <div className='bg-cover bg-center h-[450px]' style={{backgroundImage: "url('/images/image.png')"}}>
      <h1 className='font-bold text-6xl leading-[90px] flex justify-center items-center pt-28'>
        Our Instagram
      </h1>
      <p className='flex justify-center items-center'>
        Follow our store on Instagram
      </p>
      <div className='flex justify-center items-center pt-10'>
       <button className=' border rounded-[50px] drop-shadow w-[255px] h-16'>
        Follow Us
       </button>
      </div>
    </div>
    </main>
  )
}

export default Instagram
