'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import {  FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Link from 'next/link';
import Videos from './Videos';
import Shorts from './Shorts';
import Articles from './Articles';
import Photos from './Photos';
import Banner from './Banner';



const Main = () => {
  const [MenuVisible, setMenuVisible] = useState(false);
  const initialRoute = localStorage.getItem('selectedRoute') || 'Videos'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);

  

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className='py-24 '>

      <div className='flex flex-row sm:justify-between  bg-cyan-500 w-full h-20 
      border-4 border-red-950
      overflow-x-auto sm:gap-5' >
        
       
       <button onClick={() => setSelectedRoute('Videos')} type='button' className='text-xl
        text-white h-10 w-28 rounded-xl bg-gray-900 
        mt-3 ml-5  pl-5 pr-5     hover:bg-orange-700 max-sm:hidden
        '>videos</button>

        <button onClick={() => setSelectedRoute('Shorts')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
        mt-3  pl-5 pr-5      hover:bg-orange-700  max-sm:hidden
        '>shorts</button>


        <button onClick={() => setSelectedRoute('Articles')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
        mt-3  pl-5 pr-5      hover:bg-orange-700  max-sm:hidden
        '>Articles</button>
         
         <div className="text-black py-2 px-5 ml-1 text-2xl sm:hidden
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
                <nav className="fixed top-40 left-0 px-5  shadow-md z-10 bg-slate-900 
                border-4 border-slate-300  overflow-y-auto text-white">
                    <div className="flex flex-row " >
                <ul className="flex flex-col p-2 gap-5 " >
               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Videos')}
               >Videos</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Shorts')}
               >Short</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Live')}
               >Live</button></p></li>

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

        <button onClick={() => setSelectedRoute('Photos')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
        mt-3  pl-5 pr-5      hover:bg-orange-700  max-sm:hidden
        '>photos </button>
         
        <button  type='button' className='text-xl text-white h-10 w-12 rounded-r-3xl
         bg-gray-900 
        mt-3 mr-5  pl-5 pr-5      hover:bg-orange-700 sm:hidden
        '><FaSearch /></button>
         
        
         <button onClick={() => setSelectedRoute('Banner')}  type='button' className='text-xl
          text-white h-10 w-24 rounded-xl mt-3 pl-5 
         pr-5  bg-gray-900   max-sm:hidden   hover:bg-orange-700
        '>Banner</button>
        
        <Link href={{pathname:'/Posting'}}>
       <button  type='button' className='text-xl
        text-white h-10 w-32 rounded-xl bg-gray-900 
        mt-3 mr-5  pl-5 pr-5     hover:bg-orange-700 max-sm:hidden
        '>Posting</button></Link>
       

        

      </div>

           {selectedRoute === 'Videos' && <Videos />}
           {selectedRoute === 'Articles' && <Articles />}
           {selectedRoute === 'Shorts' && <Shorts />}

           {selectedRoute === 'Photos' && <Photos />}
           {selectedRoute === 'Banner' && <Banner />}
      
    </div>
  )
}

export default Main