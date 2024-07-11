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



const Footer = () => {
  
  return (
    <div className=" w-full  " >
     
      <div className="bg-lime-500 h-auto border-t-4 border-slate-950 
      overflow-x-auto rounded-t-2xl">
        <div className=" flex justify-between  ">
          
              <Link href={{pathname:'/'}} className="hover:text-indigo-950"> 
              <div>           
            <FaHome className='text-3xl text-black ml-5 hover:text-indigo-950
             h-10 w-10 mr-5 mt-2'/>
            <h1 className="text-xl ml-5">Home</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/News'}} > 
              <div className="hover:text-indigo-950 ">           
            <FaRegNewspaper className='text-3xl text-black
            hover:text-indigo-950 h-10 w-10 mr-5 mt-2'/>
            <h1 className="text-xl">News</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/Blogs'}} className="hover:text-indigo-950" > 
              <div>           
            <FaBlog className='text-3xl text-black
            hover:text-indigo-950 h-10 w-10 mr-5 mt-2'/>
            <h1 className="text-xl hover:text-indigo-950">Blogs</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/public'}} className="max-lg:hidden"> 
              <div className="hover:text-indigo-950">           
            <MdPublic className='text-3xl text-black 
            hover:text-indigo-950 h-10 w-10  mr-5 mt-2'/>
            <h1 className="text-xl hover:text-indigo-950">Public</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/private'}}  className="max-lg:hidden
             hover:text-indigo-950"> 
              <div >           
            <RiChatPrivateLine className='text-3xl text-black h-10
            hover:text-indigo-950 w-10 mr-5 mt-2'/>
            <h1 className="text-xl">Private</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/Post'}} className="max-lg:hidden 
            hover:text-indigo-950"> 
              <div >           
            <MdOutlineLocalPostOffice className='text-3xl text-black w-10 
            h-10 mr-5 mt-2 hover:text-indigo-950'/>
            <h1 className="text-xl">Post</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/Notifications'}} > 
              <div className="hover:text-indigo-950">           
            <IoMdNotificationsOutline className='text-3xl text-black
             h-10 w-10 mr-5 mt-2 hover:text-indigo-950'/>
            <h1 className="text-xl hover:text-indigo-950">Note</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/upload'}} className="max-lg:hidden" > 
              <div className="hover:text-indigo-950">           
            <FaUpload className='text-3xl text-black h-10 w-10
            hover:text-indigo-950 mr-5 mt-2'/>
            <h1 className="text-xl hover:text-indigo-950">Upload</h1>
            </div> 
            </Link>

            <Link href={{pathname:'/Profile'}} > 
              <div className="hover:text-indigo-950">           
            <CgProfile className='text-3xl text-black h-10
            hover:text-indigo-950 w-10 mr-5 mt-2'/>
            <h1 className="text-xl hover:text-indigo-950 mr-5">Profile</h1>
            </div> 
            </Link>


       </div>             
      </div>
      </div>
    
  )
}

export default Footer
