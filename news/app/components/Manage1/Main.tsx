'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import {  FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Videos from './Videos';
import Lives from './Live';
import Shorts from './Shorts';
import Popular from './Popular';
import Latest from './Latest';
import Oldest from './Oldest';


const Main = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Videos');
  const [MenuVisible, setMenuVisible] = useState(false);




  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className="w-full ">
      
        <div>
        <div className="flex justify-between gap-2 overflow-x-auto overscroll-auto
         bg-yellow-500 text-xs   py-1 border-2 border-red-950  " >

        <button onClick={() => setSelectedRoute('Videos')} type='button' className='text-xs
        text-white h-7 w-28 rounded-sm bg-gray-900 
         ml-1 pl-5 pr-5     hover:bg-orange-700 max-lg:hidden
        '>videos</button>

        <button onClick={() => setSelectedRoute('Shorts')} type='button' className='text-xs
         text-white h-7 w-24 rounded-sm bg-gray-900 
          pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>shorts</button>

        <button onClick={() => setSelectedRoute('Live')} type='button' className='text-xs
         text-white h-7 w-24 rounded-sm bg-gray-900 
          pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>live</button>
         
         <div className="text-black py-1 px-5 ml-1 text-sm lg:hidden
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
                <nav className="fixed top-20 left-0 px-5  shadow-md z-10 bg-slate-900 
                border-2 border-slate-300  overflow-y-auto text-white">
                    <div className="flex flex-row " >
                <ul className="flex flex-col p-1 gap-2 " >
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Videos')}
               >Videos</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Shorts')}
               >Short</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Live')}
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
          pl-5  lg:rounded-full max-lg:rounded-l-full text-xs max-sm:justify-center  '
           placeholder='search here'   />

            <button  type='button' className='text-sm text-white h-7 sm:w-20 
            rounded-r-3xl  bg-gray-900 w-16
            mr-5  pl-4    hover:bg-orange-700 lg:hidden
          '><FaSearch /></button></div>

        <button onClick={() => setSelectedRoute('Popular')} type='button' className='text-xs
        text-white h-7 w-24 rounded-sm bg-gray-900 
         pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>popular </button>
         
        
         <button onClick={() => setSelectedRoute('Latest')}  type='button' className='text-xs
          text-white h-7 w-24 rounded-sm  pl-5 
         pr-5  bg-gray-900   max-lg:hidden   hover:bg-orange-700
        '>latest</button>
        
       <button onClick={() => setSelectedRoute('Oldest')} type='button' className='text-xs
        text-white h-7 w-32 rounded-sm bg-gray-900 
         mr-1  pl-5 pr-5   hover:bg-orange-700 max-lg:hidden
        '>oldest</button>
             
            </div>
          </div>

          <div>

         
          {selectedRoute === 'Videos' && <Videos />}
           {selectedRoute === 'Live' && <Lives />}
           {selectedRoute === 'Shorts' && <Shorts />}

           {selectedRoute === 'Popular' && <Popular />}
           {selectedRoute === 'Latest' && <Latest />}
           {selectedRoute === 'Oldest' && <Oldest />}
      
        

          </div>
          
    </div>
  )
}

export default Main


