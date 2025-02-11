import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiEqualizerLine} from "react-icons/ri";
import { BsFillGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";

const Product = [
  {
    id: 1,
    image: "/images/modular sofa.png",
    title: "Trenton modular sofa_3",
    price: "25,000.00"
  },
  {
    id: 2,
    image: "/images/dining chair.png",
    title: "Granite dining table with dining chair",
    price: "25,000.00"
  },
  {
    id: 3,
    image: "/images/table and stool.png",
    title: "Outdoor bar table and stool",
    price: "25,000.00"
  },
  { id: 4,
    image: "/images/Plain mirror.png",
    title: "Plain console with teak mirror",
    price: "25,000.00"
  },
  { id: 5,
    image: "/images/coffee table.png",
    title: "Grain coffee table",
    price: "15,000.00"
  },
  { id: 6,
    image: "/images/kent coffee.png",
    title: "Kent coffee table",
    price: "225,000.00"
  },
  {id: 7,
    image: "/images/round coffee.png",
    title: "Round coffee table_color 2",
    price: "251,000.00"
  },
  { id: 8,
    image: "/images/teak coffee.png",
    title: "Reclaimed teak coffee table",
    price: "25,200.00"
  },
  { id: 9,
    image: "/images/plain.png",
    title: "plain console_",
    price: "258,200.00"
  },
  { id: 10,
    image: "/images/sideboard.png",
    title: "Reclaimed teak Sideboard",
    price: "20,000.00"
  },
  { id: 11,
    image: "/images/SJP.png",
    title: "SJP_0825",
    price: "200,000.00"
  },
  { id: 12,
    image: "/images/Bella chair and table.png",
    title: "Bella chair and table",
    price: "100,000.00"
  },
  { id: 13,
    image: "/images/table.png",
    title: "Granite square side table",
    price: "258,800.00"
  },
  { id: 14,
    image: "/images/Asgaard sofa.png",
    title: "Asgaard sofa",
    price: "25,000.00"
  },
  { id: 15,
    image: "/images/maya sofa three.png",
    title: "Maya sofa three seater",
    price: "155,000.00"
  },
  { id: 16,
    image: "/images/outdoor sofa.png",
    title: "outdoor sofa set",
    price: "244,000.00"
  },
]

export default function about () {
    return (
      <main className="grid grid-col md:grid-row items-center">
        <div className="flex justify-center items-center bg-cover bg-center h-[316px]" style={{backgroundImage: "url('/images/rectangle.png')"}}>
          <h1 className="font-medium text-5xl leading-[72px]">Shop</h1>
          
           <ul className="">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/shop"}>Shop</Link></li>
           </ul>
        
        </div> 
        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#FAF4F4]">
          <div className="flex gap-2 md:gap-5 pl-2 m-4">
            <RiEqualizerLine className="w-[28px] h-[28px] "/>
             <p className="font-normal text-xl leading-[30px]">Filter</p>
            <BsFillGridFill className="w-[28px] h-[28px]"/>
            <BsViewList className="w-[28px] h-[28px]"/>
             <span className="font-normal text-base leading-6">Showing 1–16 of 32 results</span>
          </div>
          <div className="flex gap-2 md:gap-4 pr-2 m-4">
            <p className="font-normal text-xl sm:leading-[50px]">Show</p>
            <input type="text" placeholder="16" className="w-5 h-[30px] md:w-[55px] md:h-[55px] flex text-center border bg-white"/>
            <p className="font-normal text-xl sm:leading-[50px] ">Short by</p>
            <input type="text" placeholder="Default" className="w-auto h-[30px] md:w-[188px] md:h-[55px] pl-6 border bg-white"/>
          </div>
        </div>
        {/* <div className="flex flex-col sm:flex-row items-center bg-[#FAF4F4] space-x-4 pt-2">
         <div className="flex">
         
           <div className="flex space-x-6 pl-4">
           <Image src={"/images/Vector1.png"} alt="vector" width={19.05} height={16.67} className="w-[25px] h-[25px]"/>
           <h1>Filter</h1>
           <Image src={"/images/Vector2.png"} alt="vector" width={16.33} height={16.33} className="w-[28px] h-[28px]"/>
           <Image src={"/images/Vector3.png"} alt="vector" width={21} height={19.5} className="w-[24px] h-[24px]"/>
           <p>Showing 1–16 of 32 results</p>
           </div>
           <div className="flex space-x-10 pl-40 ml-60">
            <h1 className="font-normal text-xl leadind-[30px]">Show</h1>
            <p className="flex justify-center items-center top-[485px] leading-tight w-12 h-10 border bg-white">16</p>
            <h1 className="font-normal text-xl leadind-[30px]">Short by</h1>
            <p className="flex justify-center items-center top-[485px] leading-tight w-16 h-10 border bg-white">Default</p>
           </div> 
         </div>
        </div>  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] m-6'>
         {Product.map((todo, index) => (
          <div className='flex justify-center items-center w-[80%] border border-black rounded-xl mx-auto sm:mx-2 md:mx-4 lg:mx-6 gap-5'>
           <div key={index} className='m-5'>
            <Image src={todo.image} alt={todo.title} width={500} height={500} className="w-[287px] h-[287px]"></Image>
            <p className="font-normal text-base leading-6">{todo.title}</p>
            <p className="font-medium text-2xl leading-9">{todo.price}</p>
           </div>
          </div>
          ))}
        </div>
        <div className="flex justify-center items-center m-6 w-[392px] h-[60px] gap-4">           
          <button className="w-[60px] h-[60px] border rounded-[10px] bg-[#FBEBB5] hover:bg-[#FBEBB5]" >1</button>
          <button className="w-[60px] h-[60px] border rounded-[10px] bg-[#FFF9E5] hover:bg-[#FBEBB5]">2</button>
          <button className="w-[60px] h-[60px] border rounded-[10px] bg-[#FFF9E5] hover:bg-[#FBEBB5]">3</button>
          <button className="w-[98px] h-[60px] border rounded-[10px] bg-[#FFF9E5] hover:bg-[#FBEBB5]">Next</button>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center space-x-2 bg-[#FAF4F4]">
          <div className="m-10">
            <h1 className="mx-2 font-medium text-[32px] leading-[48px]">Free Delivery</h1>
            <p className="mx-2 font-normal text-xl leading-[30px] text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="m-10">
            <h1 className="mx-10 sm:mx-auto font-medium text-[32px] leading-[48px]">90 Days Return</h1>
            <p className="mx-10 sm:mx-auto font-normal text-xl leading-[30px] text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="m-10">
            <h1 className="mx-10 md:mx-auto font-medium text-[32px] leading-[48px]">Secure Payment</h1>
            <p className="mx-10 sm:mx-auto font-normal text-xl leading-[30px] text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
          </div>  
        </div>
      </main>
    )
} 