'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import {  FiX } from 'react-icons/fi'; 
import { FaEllipsisV } from 'react-icons/fa';
import Link from 'next/link';
import Articles1 from '../Manage3/Articles1';
import Articles2 from '../Manage3/Articles2';
import Articles3 from '../Manage3/Articles3';
import Popular from './Popular';
import Latest from './Latest';
import Oldest from './Oldest';

const Main = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Articles1'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);
  const [MenuVisible, setMenuVisible] = useState(false);
  

  

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className=" w-full ">
      
        <div>
            <div className="flex justify-between gap-2 overflow-x-auto overscroll-auto
             bg-red-500 text-sm
             py-1 border-2 border-red-950  " >

        <button onClick={() => setSelectedRoute('Articles1')} type='button' 
        className='text-xs
        text-white h-7 w-auto rounded-sm bg-gray-900 
        ml-1  pl-5 pr-5     hover:bg-lime-900 max-lg:hidden
        '>Articles</button>

        <button onClick={() => setSelectedRoute('Articles2')} type='button' 
        className='text-xs
         text-white h-7 w-28 rounded-sm bg-gray-900 
        pl-5 pr-5      hover:bg-lime-900  max-lg:hidden
        '>Pdf</button>

        <button onClick={() => setSelectedRoute('Articles3')} type='button' 
        className='text-xs
         text-white h-7 w-auto rounded-sm bg-gray-900 
        pl-5 pr-5      hover:bg-lime-900  max-lg:hidden
        '>Banner</button>
         
         <div className="text-slate-950 py-1 px-5 ml-1 text-sm lg:hidden
         font-bold "> 
            <button 
             onClick={handleMenuClick}> 
               {MenuVisible ? (
             <FiX />  ) : (
             <FaEllipsisV  />  )}
             
              </button>
              <div onClick={closeMenu}>
            {MenuVisible && 
            
               (
                <nav className="fixed top-20 left-0 px-5  shadow-md z-10 bg-yellow-950 
                border-2 border-slate-300  overflow-y-auto text-white">
                    <div className="flex flex-row " >
                <ul className="flex flex-col p-2 gap-2 " >
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Articles1')}
               >Videos</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Articles2')}
               >Short</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Articles3')}
               >Live</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Popular')}
               >Popular</button></p></li>

              <li className="text-sm"><p><button onClick={() => setSelectedRoute('Latest')}
               >Latest</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Oldest')}
               >Oldest</button></p></li>
              
               </ul>
               
               </div>
       
       </nav>)
               
               }
               </div>
            </div>

            
          
            <div className="flex flex-row gap-0 w-full">
            <input type='text' className=' w-full h-7 border border-slate-950 
          pl-5  lg:rounded-full max-lg:rounded-l-full text-xs  max-sm:justify-center  '
           placeholder='search here'   />

            <button  type='button' className='text-xs text-white h-7 sm:w-20 
            rounded-r-3xl
            bg-gray-900 w-16
            mr-5  pl-4    hover:bg-orange-700 lg:hidden
          '><FaSearch /></button></div>

        <button onClick={() => setSelectedRoute('Popular')} type='button'
         className='text-xs
         text-white h-7 w-auto rounded-sm bg-gray-900 
       pl-5 pr-5      hover:bg-lime-900  max-lg:hidden
        '>popular </button>
         
         <button onClick={() => setSelectedRoute('Latest')}  type='button'
          className='text-xs
          text-white h-7 w-auto rounded-sm pl-5 
         pr-5  bg-gray-900   max-lg:hidden   hover:bg-lime-900
        '>latest</button>
        
       <button onClick={() => setSelectedRoute('Oldest')} type='button'
        className='text-xs
        text-white h-7 w-32 rounded-sm bg-gray-900 
        mr-5  pl-5 pr-5     hover:bg-lime-900 max-lg:hidden
        '>oldest</button>
             
            </div>
          </div>

          <div>
          {selectedRoute === 'Articles1' && <Articles1 />}
           {selectedRoute === 'Articles2' && <Articles2 />}
           {selectedRoute === 'Articles3' && <Articles3 />}

           {selectedRoute === 'Popular' && <Popular />}
           {selectedRoute === 'Latest' && <Latest />}
           {selectedRoute === 'Oldest' && <Oldest />}
          
          </div>
          
    </div>
  )
}

export default Main


