import Link from "next/link"
import Image from "next/image"

export default function about () {
    return (
      <main className="grid grid-col md:grid-row items-center">
        <div className="flex justify-center items-center bg-cover bg-center h-[316px]" style={{backgroundImage: "url('/images/rectangle.png')"}}>
          <h1 className="font-medium text-5xl leading-[72px]">Shop</h1>
          <div>
           <ul className="">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/shop"}>Shop</Link></li>
           </ul>
          </div>
        </div>
        <div className="flex items-center bg-[#FAF4F4] w-[1280px] h-[100px] space-x-4 pt-2">
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
        </div>
        <div>
          <div className="flex">
           <Image src={"/images/modular sofa.png"} alt='modular sofa' width={750} height={384.46} className="w-[287px] h-[287px]"/>
           <Image src={"/images/dining chair.png"} alt='dining chair' width={255} height={185} className="w-[287px] h-[287px]"/>
           <Image src={"/images/table and stool.png"} alt='table and stool' width={250} height={376} className="w-[287px] h-[287px]"/>
           <Image src={"/images/Plain mirror.png"} alt='plain mirror' width={240} height={174} className="w-[287px] h-[287px]"/>
          </div>
          <div className="flex p-10 space-x-32">
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
          </div>
          <div className="flex">
          <Image src={"/images/coffee table.png"} alt='coffee table' width={283} height={188} className="w-[287px] h-[287px]"/>
          <Image src={"/images/kent coffee.png"} alt='kent coffee' width={269} height={166} className="w-[287px] h-[287px]"/>
          <Image src={"/images/round coffee.png"} alt='round coffee' width={289} height={510} className="w-[287px] h-[287px]"/>
          <Image src={"/images/teak coffee.png"} alt='teak coffee' width={262} height={162} className="w-[287px] h-[287px]"/>
          </div>
          <div className="flex p-10 space-x-32">
           <div>
             <h1>Grain coffee table</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 15,000.00</p>
           </div>
           <div>
             <h1>Kent coffee table</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 225,000.00</p>
           </div>
           <div>
             <h1>Round coffee table_color 2</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 251,000.00</p>
           </div>
           <div>
             <h1>Reclaimed teak coffee table</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 25,200.00</p>
           </div>
          </div>
          <div className="flex">
          <Image src={"/images/plain.png"} alt='plain' width={278} height={154} className="w-[287px] h-[287px]"/>
          <Image src={"/images/sideboard.png"} alt='sideboard' width={298} height={298} className="w-[287px] h-[287px]"/>
          <Image src={"/images/SJP.png"} alt='SJP' width={492} height={327} className="w-[287px] h-[287px]"/>
          <Image src={"/images/Bella chair and table.png"} alt='bella chair and table' width={310} height={207} className="w-[287px] h-[287px]"/>
          </div>
          <div className="flex p-10 space-x-32">
           <div>
             <h1>plain console_</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 258,200.00</p>
           </div>
           <div>
             <h1>Reclaimed teak Sideboard</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 20,000.00</p>
           </div>
           <div>
             <h1>SJP_0825</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 200,000.00</p>
           </div>
           <div>
             <h1>Bella chair and table</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 100,000.00</p>
           </div>
          </div>
          <div className="flex">
          <Image src={"/images/table.png"} alt='table' width={471} height={709} className="w-[287px] h-[287px]"/>
          <Image src={"/images/Asgaard sofa.png"} alt='asgaard sofa' width={274} height={222} className="w-[287px] h-[287px]"/>
          <Image src={"/images/maya sofa three.png"} alt='maya sofa' width={296} height={133} className="w-[287px] h-[287px]"/>
          <Image src={"/images/outdoor sofa.png"} alt='outdoor sofa' width={318} height={211} className="w-[287px] h-[287px]"/>
          </div>
          <div className="flex p-10 space-x-32">
           <div>
             <h1>Granite square side table</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 258,800.00</p>
           </div>
           <div>
             <h1>Asgaard sofa</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 25,000.00</p>
           </div>
           <div> 
             <h1>Maya sofa three seater</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 155,000.00</p>
           </div>
           <div>
             <h1>Outdoor sofa set</h1>
             <p className='font-medium text-2xl leading-9'>Rs. 244,000.00</p>
           </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-20">
           <div className="flex gap-10">
             <button className="w-[60px] h-[60px] border rounded-[10px] bg-[#FBEBB5]" >1</button>
             <button className="w-[60px] h-[60px] border rounded-[10px] bg-[#FFF9E5]">2</button>
             <button className="w-[60px] h-[60px] border rounded-[10px] bg-[#FFF9E5]">3</button>
             <button className="w-[98px] h-[60px] border rounded-[10px] bg-[#FFF9E5]">Next</button>
           </div>
        </div>
        <div className="flex space-x-4 bg-[#FAF4F4] p-10">
          <div className="p-10">
            <h1 className="font-medium text-[32px] leading-[48px]">Free Delivery</h1>
            <p>For all oders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="p-10">
            <h1 className="font-medium text-[32px] leading-[48px]">90 Days Return</h1>
            <p>If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="p-10">
            <h1 className="font-medium text-[32px] leading-[48px]">Secure Payment</h1>
            <p>100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </main>
    )
} 