'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import Menu0 from '@/app/components0/menu0'; 
import Link from 'next/link';






const Header = () => {
  const [MenuVisible, setMenuVisible] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string>('');
  

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className=' '>

      <div className='flex flex-row sm:justify-between  bg-yellow-500 w-full h-20 
      border-2 border-red-950
      overflow-x-auto sm:gap-5' >
        
       
       <button onClick={() => setSelectedRoute('group')} type='button' className='text-xl
        text-white h-10 w-28 rounded-xl bg-gray-900 
        mt-3 ml-5  pl-5 pr-5     hover:bg-orange-700 max-sm:hidden
        '>videos</button>

        <button onClick={() => setSelectedRoute('class')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
        mt-3  pl-5 pr-5      hover:bg-orange-700  max-sm:hidden
        '>shorts</button>

        <button onClick={() => setSelectedRoute('Studio')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
        mt-3  pl-5 pr-5      hover:bg-orange-700  max-sm:hidden
        '>live</button>
         
         <div className="text-slate-950 py-2 px-5 ml-1 text-2xl sm:hidden
         mt-3 font-bold "> 
            <button 
             onClick={handleMenuClick}> 
               {MenuVisible ? (
             <FiX />  ) : (
             <FiMenu  />  )}
             
              </button>
              <div onClick={closeMenu}>
            {MenuVisible && 
            
               (
                <nav className="fixed top-40 left-0 px-5  shadow-md z-10 bg-yellow-950 
                border-4 border-slate-300  overflow-y-auto text-white">
                    <div className="flex flex-row " >
                <ul className="flex flex-col p-2 gap-5 " >
               <li className="text-xl"><p><button onClick={() => setSelectedRoute('group')}
               >Videos</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('class')}
               >Short</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Studio')}
               >Live</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('about')}
               >Popular</button></p></li>

                 <Link href={{pathname:'/upload'}}>
               <li className="text-xl"><p><button 
               >Latest</button></p></li></Link>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('goLive')}
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

        <button onClick={() => setSelectedRoute('class')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
        mt-3  pl-5 pr-5      hover:bg-orange-700  max-sm:hidden
        '>popular </button>
         
        <button  type='button' className='text-xl text-white h-10 w-12 rounded-r-3xl
         bg-gray-900 
        mt-3 mr-5  pl-5 pr-5      hover:bg-orange-700 sm:hidden
        '><FaSearch /></button>
         
        <Link href={{pathname:'/upload'}}>
         <button onClick={() => setSelectedRoute('upload')}  type='button' className='text-xl
          text-white h-10 w-24 rounded-xl mt-3 pl-5 
         pr-5  bg-gray-900   max-sm:hidden   hover:bg-orange-700
        '>latest</button></Link>
        
       <button onClick={() => setSelectedRoute('goLive')} type='button' className='text-xl
        text-white h-10 w-32 rounded-xl bg-gray-900 
        mt-3 mr-5  pl-5 pr-5     hover:bg-orange-700 max-sm:hidden
        '>oldest</button>
       

      </div>
     

      
       
       
      

    </div>
  )
}

export default Header