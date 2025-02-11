import React from 'react'
import Image from 'next/image'

const Toppick = () => {
  const product = [
    {
     id: 1,
     image: "/images/modular sofa.png",
     title: "Trenton modular sofa_3",
     price:  "Rs. 25,000.00" 
    },
    {
     id: 2,
     image: "/images/dining chair.png",
     title: "Granite dining table with dining chair",
     price: "Rs. 25,000.00"
    },
    {
     id: 3,
     image: "/images/table and stool.png",
     title: "Outdoor bar table and stool",
     price: "Rs. 25,000.00"
    },
    {
     id: 4,
     image: "/images/Plain mirror.png",
     title: "Plain console with teak mirror",
     price: "Rs. 25,000.00"
    }
  ]
  return (
   
      <div className='flex justify-center items-center pt-8'>
        <div>
        <div>
           <h1 className='font-medium text-2xl sm:text-4xl leading-[54px] text-center mx-10 sm:mx-12 md:mx-14 lg:mx-16'>Top Picks For You</h1>
           <p className='font-medium text-base leading-6 text-[#9F9F9F] text-center mx-2 sm:mx-12 md:mx-14 lg:mx-16 tracking-wide mt-4'>
            Find a bright ideal to suit your taste 
            with our great selection of suspension, 
            floor and table lights.
           </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-between items-center m-10'>
          {product.map((toppick, index)  => (
             
             <div className='justify-center gap-4 mt-4'>
               <div key={index}>
                <Image src={toppick.image} alt={toppick.image} width={600} height={600} className='w-[287px] h-[287px]'></Image>
                <p className='font-normal text-base leading-6'>{toppick.title}</p>
                <p className='font-medium text-2xl leading-9'>{toppick.price}</p>
               </div>
             </div>
          ))}
        </div>
        {/* <div className='flex space-x-6 pl-14'>
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
        </div> */}
        <div className='flex justify-center items-center pb-16 underline underline-offset-8'>
           <button>View More</button>
        </div>
      </div>
     </div>
  ) 
}

export default Toppick
