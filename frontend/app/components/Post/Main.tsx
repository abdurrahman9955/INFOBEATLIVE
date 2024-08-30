'use client'
import Link from "next/link"
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import {  FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Videos from "./Videos";
import Photos from "./Photos";



const Main = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Videos');
  const [MenuVisible, setMenuVisible] = useState(false);
  
  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className=" w-full ">
     
        <div>
            <div className="flex justify-between gap-4 overflow-x-auto overscroll-auto
             bg-cyan-400 text-xs
             py-1 border-2 border-purple-950  " >
              
            
              
              <button onClick={() => setSelectedRoute('Videos')} 
              type='button' className='text-xs text-white h-7 w-32 rounded bg-gray-900 
               ml-1  pl-5 pr-5  hover:bg-orange-700 max-lg:hidden'>Videos</button>

              <button onClick={() => setSelectedRoute('Photos')} 
              type='button' className='text-xs text-white h-7 w-32 rounded bg-gray-900 
              pl-5 pr-5  hover:bg-orange-700 max-lg:hidden'>Photos</button>


         <div className="text-black py-1 pl-1 text-sm lg:hidden
         font-bold "> 
            <button 
             onClick={handleMenuClick}> 
               {MenuVisible ? (
             <FiX size={16} className="pt-1"/>  ) : (
             <FaEllipsisV size={16}className="pt-1" />  )}
             
              </button>
              <div onClick={closeMenu}>
            {MenuVisible && 
            
               (
                <nav className="fixed top-20 left-0 px-2  shadow-md z-10 bg-slate-900 
                border-2 border-slate-300  overflow-y-auto text-white">
                    <div className="flex flex-row " >
                <ul className="flex flex-col p-2 gap-2 " >
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Videos')}
               >Videos</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Photos')}
               >Photos</button></p></li>

               <Link href={{pathname:'/Posting'}}>
               <li className="text-sm"><p><button 
               >NewPosting</button></p></li></Link>
              
               </ul>
               
               </div>
       
       </nav>)
               
               }
               </div>
            </div>
             
             <div className="flex flex-row gap-0 w-full">
            <input type='text' className=' w-full h-7 border border-slate-950 
          pl-5  rounded-l-lg text-sm  max-sm:justify-center  '
           placeholder='search here'   />

            <button  type='button' className='text-xs text-white h-7 sm:w-20 
            rounded-r-lg  bg-gray-900 w-16
                hover:bg-orange-700 
          '>Search</button></div>


             <Link href={{pathname:'/Posting'}}>
              <button  type='button' className='text-xs text-white h-7 w-32 rounded
               bg-gray-900  mr-2  pl-5 pr-5 hover:bg-orange-700 max-lg:hidden
              '>NewPosting</button></Link>

             
             
               
             
            </div>
          </div>

          <div>

         
           {selectedRoute === 'Videos' && <Videos />}
           {selectedRoute === 'Photos' && <Photos />}

          </div>
          
    </div>
  )
}

export default Main


