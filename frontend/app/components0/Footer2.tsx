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
import { FaPeopleRoof } from "react-icons/fa6";

const Footer2 = () => {
  
  return (
    <div className=" w-96   " >
   
      <div className="bg-lime-500 max-xl:hidden h-screen border-l-2 border-slate-950 
      overflow-x-auto ">
        <div className=" flex flex-col gap-3  ">
         
          
              <div className="flex flex-row border-2 border-black p-1 h-10 m-1">           
              <FaPeopleRoof className='text-xl text-black ml-1 hover:text-indigo-950
             h-7 w-7 mr-1 '/>
            <h1 className="text-sm ml-1 mt-1"> Peoples You May Know Here!</h1>
            </div>  

       </div>             
      </div>
      </div>
    
  )
}

export default Footer2
