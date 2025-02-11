import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row bg-[#FBEBB5]'>  
        <div>  
            <ul className="flex  md:justify-center mr-[170px] md:items-center md:gap-x-4 lg:gap-x-5 md:text-md md:text-sm lg:text-md xl:text-md text-black font-bold">
                <li className="p-4 hover:underline underline-offset-2">
                    <Link href="/">Home</Link>
                </li>
                <li className="p-4 hover:underline underline-offset-2">
                    <Link href="/shop">Shop</Link>
                </li>
                <li className="p-4 hover:underline underline-offset-2">
                    <Link href="/about">About</Link>
                </li>
                <li className="p-4 hover:underline underline-offset-2">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>

        {/* Icons on the right with spacing */}
        <div className="flex gap-5 mr-[250px] md:ml-20 md:mr-0 items-center justify-between">
            {/* <Link href={}>
                <Image src="/images/vector.png" alt="" width={28} height={28} className="text-2xl hover:text-red-500 hover:scale-125 h-7 w-7" />
            </Link>
            <Link href={}>
                <Image src="/images/Vector-2.png" alt="Search" width={24} height={24} className="text-2xl hover:text-red-500 hover:scale-125" />
            </Link>
            <Link>
                <Image src="/images/Vector-3.png" alt="Wishlist" width={24} height={24} className="text-2xl hover:text-red-500 hover:scale-125" />
            </Link>
            <Link>
                <Image src="/images/vector-4.png" alt="Cart" width={24} height={24} className="text-2xl hover:text-red-500 hover:scale-125" />
            </Link> */}
        </div>
    </div>
</div>

  )
}

export default Header
