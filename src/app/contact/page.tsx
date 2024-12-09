import Link from "next/link"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";

export default function contact () {
    return (
      <span className="grid grid-col md:grid-row items-center">
        <div className="flex justify-center items-center bg-cover bg-center h-[316px]" style={{backgroundImage: "url('/images/rectangle.png')"}}>
          <h1 className="font-medium text-5xl leadding-[72px]">Contact</h1>
          <div>
           <ul className="">
             <li><Link href={"/"}>Home</Link></li>
             <li><Link href={"/contact"}>Contact</Link></li>
           </ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[644px] h-12 p-8">
            <h1 className="flex justify-center items-center font-semibold text-4xl leading-[54px]">Get In Touch With Us</h1>
            <p className="text-center font-normal text-base leading-6">
              For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 pt-40 pl-52 space-x-40 items-center">
          <div className="space-y-32">
          <div className="flex ">
            <FaLocationDot />
            <div className="pl-10">
             <h1 className="font-medium text-2xl leading-9">Address</h1>
             <p className="font-normal text-base leading-6">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div>
          <FaPhoneAlt />
           <div className="pl-10">
             <h1 className="font-medium text-2xl leading-9">Phone</h1>
             <p className="font-normal text-base leading-6">Mobile: +(84) 546-6789
             Hotline: +(84) 456-6789</p>
           </div>
          </div>
          <div>
          <BiSolidTimeFive />
           <div className="pl-10">
             <h1 className="font-medium text-2xl leading-9">Working Time</h1>
             <p className="font-normal text-base leading-6">Monday-Friday: 9:00 - 22:00
             Saturday-Sunday: 9:00 - 21:00</p>
           </div>
          </div>
          </div>
          <div>
            <h1 className="font-medium text-base leading-6">Your name</h1><br />
            <input type="text" placeholder="Abc" className="w-[528.75px] h-[75px] border rounded-[10px] pl-4 border-[#9F9F9F]"/><br /><br />
            <h1 className="font-medium text-base leading-6">Email address</h1><br />
            <input type="text" placeholder="Abc@def.com" className="w-[528.75px] h-[75px] border rounded-[10px] pl-4 border-[#9F9F9F]"/><br /><br />
            <h1 className="font-medium text-base leading-6">Subject</h1><br />
            <input type="text" placeholder="This is an optional" className="w-[526.75px] h-[75px] border rounded-[10px] pl-4 border-[#9F9F9F]"/><br /><br />
            <h1 className="font-medium text-base leading-6">Message</h1><br />
            <input type="text" placeholder="Hi! i’d like to ask about" className="w-[527px] h-[120px] border rounded-[10px] pl-4 border-[#9F9F9F]"/>
          </div>
        </div>
      </span>
    )
} 