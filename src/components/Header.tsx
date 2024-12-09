import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='grid grid-col md:grid-row items-center'>
       <div className='bg-[#FBEBB5] border border-[#000000]'>
         <div className='flex  p-8'>
         <div className='flex'>
            <ul className='flex space-x-8 pl-10'>
             <li><Link href={"/"}>Home</Link></li>
             <li><Link href={"/shop"}>Shop</Link></li>
             <li><Link href={"/about"}>About</Link></li>
             <li><Link href={"/contact"}>Contact</Link></li>
            </ul>
         </div>
            <div className='flex space-x-8 ml-80 pl-96'>
            <Image src={"/images/vector.png"} alt='vector' width={23.33} height={18.67}/>
            <Image src={"/images/vector-2.png"} alt='' width={22.17} height={22.17}/>
            <Image src={"/images/vector-3.png"} alt='' width={23.33} height={20.81}/>
            <Image src={"/images/vector-4.png"} alt='' width={24.53} height={22.06}/>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
