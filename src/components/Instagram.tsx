import React from 'react'

const Instagram = () => {
  return (
    <main className='w-full pt-10'>
     <div className='bg-cover h-[450px] pt-10 items-center' style={{backgroundImage: "url('/images/image.png')"}}>
      <h1 className='font-bold text-3xl sm:text-6xl leading-[90px] pt-10 text-center sm:mt-4'>
         Our Instagram
      </h1>
      <p className='font-normal text-xl leading-[30px] text-center sm:mt-6'>
         Follow our store on Instagram
      </p>
      <div className='drop-shadow-2xl shadow-[#0000001A] text-center mt-2 sm:mt-8'>
       <button className='font-normal text-xl leading-[30px] border border-black rounded-[50px] w-[255px] h-16 hover:bg-slate-500'>
         Follow Us
       </button>
      </div>
     </div>
    </main>
  )
}

export default Instagram
