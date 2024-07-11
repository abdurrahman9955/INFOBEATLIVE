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


const Header = () => {
 
  const [MenuVisible, setMenuVisible] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string>('Books');

  

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className='py-24 '>

      <div className='flex flex-row sm:justify-between  bg-orange-500 w-full h-20 
      border-4 border-red-950
      overflow-x-auto sm:gap-5' >
        
       
       <button onClick={() => setSelectedRoute('Books')} type='button' className='text-xl
        text-white h-10 w-auto rounded-xl bg-gray-950 
        mt-3 ml-5  pl-5 pr-5     hover:bg-purple-950 max-sm:hidden
        '>Books</button>

        <button onClick={() => setSelectedRoute('NewsPaper')} type='button' className='text-xl
         text-white h-10  rounded-xl bg-gray-950 
        mt-3  pl-5 pr-5  w-auto    hover:bg-purple-950  max-sm:hidden
        '>NewsPaper</button>


        <button onClick={() => setSelectedRoute('Magazines')} type='button' className='text-xl
         text-white h-10 w-auto rounded-xl bg-gray-950 
        mt-3  pl-5 pr-5      hover:bg-purple-950  max-sm:hidden
        '>Magazines</button>
         
         <div className="text-slate-950 py-2 px-5 ml-1 text-2xl sm:hidden
         mt-3 font-bold "> 
            <button 
             onClick={handleMenuClick}> 
               {MenuVisible ? (
             <FiX />  ) : (
             <FaEllipsisV  />  )}
             
              </button>
              <div onClick={closeMenu}>
            {MenuVisible && 
            
               (
                <nav className="fixed top-40 left-0 px-5  shadow-md z-10 bg-gray-950 
                border-4 border-slate-300  overflow-y-auto text-white">
                    <div className="flex flex-row " >
                <ul className="flex flex-col p-2 gap-5 " >
               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Books')}
               >Videos</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('NewsPaper')}
               >NewsPaper</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Magazines')}
               >Magazines</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Popular')}
               >Popular</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Latest')}
               >Latest</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Oldest')}
               >Oldest</button></p></li>
              
               </ul>
               
               </div>
       
       </nav>)
               
               }
               </div>
            </div>

            
          <input type='text' className='max-sm:ml-4 w-96 h-10 border-2 border-slate-950 mt-3
          pl-5  sm:rounded-full max-sm:rounded-l-full text-xl max-sm:w-5/6 max-sm:justify-center  '
           placeholder='search for your favorite'   />

        <button onClick={() => setSelectedRoute('Popular')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-950 
        mt-3  pl-5 pr-5      hover:bg-purple-950  max-sm:hidden
        '>popular </button>
         
        <button  type='button' className='text-xl text-white h-10 w-12 rounded-r-3xl
         bg-gray-950 
        mt-3 mr-5  pl-5 pr-5      hover:bg-purple-950 sm:hidden
        '><FaSearch /></button>
         
        
         <button onClick={() => setSelectedRoute('Latest')}  type='button' className='text-xl
          text-white h-10 w-24 rounded-xl mt-3 pl-5 
         pr-5  bg-gray-950   max-sm:hidden   hover:bg-purple-950
        '>latest</button>
        
       <button onClick={() => setSelectedRoute('Oldest')} type='button' className='text-xl
        text-white h-10 w-32 rounded-xl bg-gray-950 
        mt-3 mr-5  pl-5 pr-5     hover:bg-purple-950 max-sm:hidden
        '>oldest</button>
       

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

export default Header