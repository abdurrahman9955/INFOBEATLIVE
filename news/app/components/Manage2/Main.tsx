'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import {  FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Link from 'next/link';
import Books from './Books';
import Magazines from './Magazines';
import NewsPaper from './NewsPapers';

import Popular from './Popular';
import Latest from './Latest';
import Oldest from './Oldest';


const Main = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Books'
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
             bg-orange-500 text-xs
             py-1 border-2 border-red-950  " >

             <button onClick={() => setSelectedRoute('Books')} type='button' 
         className='text-xs
        text-white h-7 w-auto rounded-sm bg-gray-950 
        ml-1  pl-5 pr-5     hover:bg-purple-950 max-lg:hidden
        '>Books</button>

        <button onClick={() => setSelectedRoute('NewsPaper')} type='button' 
        className='text-xs
         text-white h-7  rounded-sm bg-gray-950 
         pl-5 pr-5  w-auto    hover:bg-purple-950  max-lg:hidden
        '>NewsPaper</button>


        <button onClick={() => setSelectedRoute('Magazines')} type='button' 
        className='text-xs
         text-white h-7 w-auto rounded-sm bg-gray-950 
          pl-5 pr-5      hover:bg-purple-950  max-lg:hidden
        '>Magazines</button>
         
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
                <nav className="fixed top-20 left-0 px-5  shadow-md z-10 bg-gray-950 
                border-2 border-slate-300  overflow-y-auto text-white">
                    <div className="flex flex-row " >
                <ul className="flex flex-col p-1 gap-2 " >
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Books')}
               >Videos</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('NewsPaper')}
               >NewsPaper</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Magazines')}
               >Magazines</button></p></li>

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
          pl-5  lg:rounded-full max-lg:rounded-l-full text-sm  max-sm:justify-center  '
           placeholder='search here'   />

            <button  type='button' className='text-sm text-white h-7 sm:w-20 
            rounded-r-3xl bg-gray-900 w-16
            mr-5  pl-4    hover:bg-orange-700 lg:hidden
          '><FaSearch /></button></div>

        <button onClick={() => setSelectedRoute('Popular')} type='button' className='text-xs
         text-white h-7 w-24 rounded-sm bg-gray-950 
       pl-5 pr-5      hover:bg-purple-950  max-lg:hidden
        '>popular </button>
         
         <button onClick={() => setSelectedRoute('Latest')}  type='button' className='text-xs
          text-white h-7 w-24 rounded-sm pl-5 
         pr-5  bg-gray-950   max-lg:hidden   hover:bg-purple-950
        '>latest</button>
        
       <button onClick={() => setSelectedRoute('Oldest')} type='button' className='text-xs
        text-white h-7 w-32 rounded-sm bg-gray-950 
       mr-1  pl-5 pr-5     hover:bg-purple-950 max-lg:hidden
        '>oldest</button>
             
            </div>
          </div>

          <div>

          {selectedRoute === 'Books' && <Books />}
           {selectedRoute === 'NewsPaper' && <NewsPaper />}
           {selectedRoute === 'Magazines' && <Magazines />}

           {selectedRoute === 'Popular' && <Popular />}
           {selectedRoute === 'Latest' && <Latest />}
           {selectedRoute === 'Oldest' && <Oldest />}
      
        

          </div>
          
    </div>
  )
}

export default Main


