'use client'
import Link from "next/link"
import { CgProfile } from 'react-icons/cg';
import { FaUpload } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { IoMdNotificationsOutline} from "react-icons/io";
import { RiChatPrivateLine } from 'react-icons/ri';
import { MdPublic } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { FaSchool } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { MdFeedback } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { FcPrivacy } from "react-icons/fc";
import { RiErrorWarningFill } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";

const Footer = () => {
 
  return (
    <div className=" w-96   " >
  
      <div className="bg-lime-500 h-screen max-lg:hidden border-r-2 border-slate-950 
      overflow-x-auto ">
        <div className=" flex flex-col gap-3  ">
          
            <Link href={{pathname:'/'}} className="hover:text-indigo-950"> 
              <div className="flex flex-row ">           
            <FaHome className='text-xl text-black ml-5 hover:text-indigo-950
             h-7 w-7 mr-5 mt-2'/>
            <h1 className="text-sm ml-2 mt-3">Home</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/Profile'}} > 
              <div className="flex flex-row">           
            <CgProfile className='text-xl text-black h-9
            hover:text-indigo-950 ml-3 w-9 pl-2 mt-0'/>
            <h1 className="text-sm hover:text-indigo-950 ml-7  mt-2">My Profile</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/Post'}} className="
            hover:text-indigo-950"> 
             <div className="flex flex-row ">               
            <MdOutlineLocalPostOffice className='text-xl text-black w-7 
            h-7 mr-5 ml-5 mt-2 hover:text-indigo-950'/>
            <h1 className="text-sm ml-2  mt-3">Make new Post</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/News'}} > 
              <div className="flex flex-row ">           
              <FaPeopleGroup className='text-xl text-black
            hover:text-indigo-950 h-8 w-8 ml-4 pl-1 mt-1'/>
            <h1 className="text-sm ml-7  mt-3">my group </h1>
            </div> 
            </Link>


            <Link href={{pathname:'/private'}}  className="
             hover:text-indigo-950"> 
              <div className="flex flex-row ">               
              <SiGoogleclassroom className='text-xl text-black h-9
            hover:text-indigo-950 w-9 ml-2.5 pl-3   mt-0'/>
            <h1 className="text-sm ml-7  mt-3">My Class</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/Blogs'}} className="hover:text-indigo-950" > 
            <div className="flex flex-row ">          
            <FaSchool className='text-xl text-black
            hover:text-indigo-950 h-8 w-8 ml-4 pl-1 mt-1'/>
            <h1 className="text-sm hover:text-indigo-950  mt-3 ml-6">my bootCamp</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/public'}} className=""> 
              <div className="flex flex-row">           
              <IoSchool className='text-xl text-black 
            hover:text-indigo-950 h-9 w-9 ml-3 pl-2 mt-0'/>
            <h1 className="text-sm hover:text-indigo-950  mt-3 ml-6">My Academy</h1>
            </div> 
            </Link>

           
            <Link href={{pathname:'/Notifications'}} > 
              <div className="flex flex-row">           
            <IoMdNotificationsOutline className='text-xl text-black
             h-7 w-7 ml-5 mr-4 mt-2 hover:text-indigo-950'/>
            <h1 className="text-sm ml-2 hover:text-indigo-950  mt-3">Notifications</h1>
            </div> 
            </Link>


            
              <div className="w-full border-2 border-black">           
           
            </div> 
          

            <Link href={{pathname:'/upload'}} className="" > 
              <div className="flex flex-row">           
              <IoSettings className='text-xl text-black h-9 w-9
            hover:text-indigo-950 ml-5 pl-3 mt-0'/>
            <h1 className="text-sm ml-5 hover:text-indigo-950  mt-3">Settings</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/upload'}} className="" > 
              <div className="flex flex-row">           
              <BiSupport className='text-xl text-black h-9 w-9
            hover:text-indigo-950 ml-5 pl-3 mt-0'/>
            <h1 className="text-sm ml-5 hover:text-indigo-950  mt-3">Support</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/upload'}} className="" > 
              <div className="flex flex-row">           
              <MdFeedback className='text-xl text-black h-9 w-9
            hover:text-indigo-950 ml-5 pl-3 mt-0'/>
            <h1 className="text-sm ml-5 hover:text-indigo-950  mt-3">Send Feedback</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/upload'}} className="" > 
              <div className="flex flex-row">           
              <MdPermContactCalendar className='text-xl text-black h-9 w-9
            hover:text-indigo-950 ml-5 pl-3 mt-0'/>
            <h1 className="text-sm ml-5 hover:text-indigo-950  mt-3">Contact Us</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/upload'}} className="" > 
              <div className="flex flex-row">           
              <FcAbout className='text-xl text-black h-9 w-9
            hover:text-indigo-950 ml-5 pl-3 mt-0'/>
            <h1 className="text-sm ml-5 hover:text-indigo-950  mt-3">About</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/upload'}} className="" > 
              <div className="flex flex-row">           
              <FcPrivacy className='text-xl text-black h-9 w-9
            hover:text-indigo-950 ml-5 pl-3 mt-0'/>
            <h1 className="text-sm ml-5 hover:text-indigo-950  mt-3">Our Privacy</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/upload'}} className="" > 
              <div className="flex flex-row">           
              <RiErrorWarningFill className='text-xl text-black h-9 w-9
            hover:text-indigo-950 ml-5 pl-3 mt-0'/>
            <h1 className="text-sm ml-5 hover:text-indigo-950  mt-3">Terms & Conditions</h1>
            </div> 
            </Link>


       </div>             
      </div>
      </div>
    
  )
}

export default Footer
