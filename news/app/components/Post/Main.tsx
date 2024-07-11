'use client'
import Link from "next/link"
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import {  FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Videos from "./Videos";
import Shorts from "./Shorts";
import Banner from "./Banner";
import Photos from "./Photos";
import Articles from "./Articles";




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

              <button onClick={() => setSelectedRoute('Shorts')} 
              type='button' className='text-xs text-white h-7 w-32 rounded bg-gray-900 
              pl-5 pr-5  hover:bg-orange-700 max-lg:hidden'>Shorts</button>

              <button onClick={() => setSelectedRoute('Articles')} 
              type='button' className='text-xs text-white h-7 w-32 rounded bg-gray-900 
               pl-5 pr-5  hover:bg-orange-700 max-lg:hidden'>Articles</button>



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

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Shorts')}
               >Short</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Articles')}
               >Articles</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Photos')}
               >Photos</button></p></li>

              <li className="text-sm"><p><button onClick={() => setSelectedRoute('Banner')}
               >Banner</button></p></li>

               <Link href={{pathname:'/Posting'}}>
               <li className="text-sm"><p><button 
               >Posting</button></p></li></Link>
              
               </ul>
               
               </div>
       
       </nav>)
               
               }
               </div>
            </div>
             
             <div className="flex flex-row gap-0 w-full">
            <input type='text' className=' w-full h-7 border-2 border-slate-950 
          pl-5  lg:rounded-full max-lg:rounded-l-full text-sm  max-sm:justify-center  '
           placeholder='search here'   />

            <button  type='button' className='text-xs text-white h-7 sm:w-20 
            rounded-r-3xl  bg-gray-900 w-16
             pl-4      hover:bg-orange-700 lg:hidden
          '><FaSearch /></button></div>

              <button onClick={() => setSelectedRoute('Photos')} 
              type='button' className='text-xs text-white h-7 w-32 rounded bg-gray-900 
                   pl-5 pr-5  hover:bg-orange-700 max-lg:hidden'>Photos</button>


              <button onClick={() => setSelectedRoute('Banner')} 
              type='button' className='text-xs text-white h-7 w-32 rounded bg-gray-900 
                   pl-5 pr-5  hover:bg-orange-700 max-lg:hidden'>Banner</button>

             <Link href={{pathname:'/Posting'}}>
              <button  type='button' className='text-xs text-white h-7 w-32 rounded
               bg-gray-900  mr-2  pl-5 pr-5 hover:bg-orange-700 max-lg:hidden
              '>Posting</button></Link>

             
             
               
             
            </div>
          </div>

          <div>

         
          {selectedRoute === 'Videos' && <Videos />}
           {selectedRoute === 'Articles' && <Articles />}
           {selectedRoute === 'Shorts' && <Shorts />}

           {selectedRoute === 'Photos' && <Photos />}
           {selectedRoute === 'Banner' && <Banner />}
      
        

          </div>
          
    </div>
  )
}

export default Main


