'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Menu0 from '@/app/components0/menu0'; 
import Link from 'next/link';
import Group from './Group';
import Classes from './Classes';
import Articles from './Articles';
import Books from './Books';
import GoLive from './GoLive';
import Latest from './Latest';
import Live from './Live';
import Others from './Others';
import Shorts from './Shorts';
import Videos from './Videos';
import All from './All';
import About from './About';
import Oldest from './Oldest';
import Home from './Home';

const Main = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Home');
  const [MenuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className=" w-full ">
        <div className="border-2 border-red-950 bg-cyan-400 py-1 w-full  ">
        <div className="flex justify-items-center overflow-x-auto gap-2  ">

        <button onClick={() => setSelectedRoute('group')} type='button' className='text-xs
        text-white h-7 w-28 rounded-sm bg-gray-900 
        ml-1  pl-5 pr-5     hover:bg-orange-700 max-lg:hidden
        '>Group</button>

        <button onClick={() => setSelectedRoute('class')} type='button' className='text-xs
         text-white h-7 w-24 rounded-sm bg-gray-900 
          pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>Class</button>

        <Link href={{pathname:'/Posting'}}>
        <button  type='button' className='text-xs
         text-white h-7 w-24 rounded-sm bg-gray-900 
         pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>Posting</button></Link>
        
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
                <ul className="flex flex-col p-1 gap-5 " >
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('group')}
               >Group</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('class')}
               >Class</button></p></li>

              <Link href={{pathname:'/Posting'}}>
               <li className="text-sm"><p><button 
               >Post</button></p></li></Link>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('about')}
               >about</button></p></li>

                 <Link href={{pathname:'/upload'}}>
               <li className="text-sm"><p><button 
               >publish</button></p></li></Link>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('goLive')}
               >GoLive</button></p></li>
              
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

            <button  type='button' className='text-sm text-white h-7 sm:w-20 rounded-r-3xl
            bg-gray-900 w-16
             mr-5  pl-4      hover:bg-orange-700 lg:hidden
          '><FaSearch /></button></div>

        <button onClick={() => setSelectedRoute('class')} type='button' className='text-xs
         text-white h-7 w-24 rounded-sm bg-gray-900 
          pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>About </button>
         
         
        <Link href={{pathname:'/upload'}}>
         <button  type='button' className='text-xs
          text-white h-7 w-24 rounded-sm  pl-5 max-lg:mr-5
         pr-5  bg-gray-900   max-sm:hidden   hover:bg-orange-700
        '>publish</button></Link>
        
       <button onClick={() => setSelectedRoute('goLive')} type='button' className='text-xs
        text-white h-7 w-32 rounded-sm bg-gray-900 
         mr-1  pl-5 pr-5     hover:bg-orange-700 max-lg:hidden
        '>goLive</button>

           </div>
           </div>
        <div>
            <div className="flex justify-between gap-2 overflow-x-auto overscroll-auto
              bg-green-500 text-xs
             py-1 border  border-red-950  " >

        <button onClick={() => setSelectedRoute('Home')} type='button' className='text-xs
          text-white h-7  w-24 rounded-sm bg-black 
        ml-1  pl-5 pr-5    hover:bg-red-900
        '>Home</button>

         <button onClick={() => setSelectedRoute('All')} type='button' className='text-xs
          text-white h-7  w-24 rounded-sm bg-black 
          pl-5 pr-5    hover:bg-red-900
        '>post</button>

        <button onClick={() => setSelectedRoute('videos')} type='button' className='text-xs
         text-white h-7  w-24 rounded-sm bg-black 
         pl-5 pr-5    hover:bg-red-900
        '>videos</button>

        <button onClick={() => setSelectedRoute('articles')} type='button' className='text-xs
         text-white h-7  w-24 rounded-sm bg-black 
         pl-5 pr-5      hover:bg-red-900
        '>articles</button>

        <button onClick={() => setSelectedRoute('books')} type='button' className='text-xs
         text-white h-7 w-24 rounded-sm bg-black 
           pl-5 pr-5     hover:bg-red-900
        '>books</button>

        <button onClick={() => setSelectedRoute('shorts')} type='button' className='text-xs
         text-white h-7 w-24 rounded-sm bg-black 
        pl-5 pr-5    hover:bg-red-900
        '>shorts</button>

         <button onClick={() => setSelectedRoute('others')} type='button' className='text-xs
          text-white h-7 w-24  rounded-sm bg-black 
       w pl-5 pr-5   hover:bg-red-900
        '>others</button>

        <button onClick={() => setSelectedRoute('oldest')} type='button' className='text-xs
        text-white h-7 w-24 rounded-sm bg-black 
          pl-5 pr-5     hover:bg-red-900
        '>Oldest</button>

         <button onClick={() => setSelectedRoute('Latest')} type='button' className='text-xs
         text-white h-7 w-24 rounded-sm bg-black 
          pl-5 pr-5      hover:bg-red-900
        '>latest</button>

         <button onClick={() => setSelectedRoute('live')} type='button' className='text-xs
          text-white h-7 w-24  rounded-sm bg-black 
        mr-1 w pl-5 pr-5 hover:bg-red-900
        '>live</button>

             
            </div>
          </div>

          <div>

         
          {selectedRoute === 'group' && <Group />}
        {selectedRoute === 'class' && <Classes />}
        {selectedRoute === 'articles' && <Articles />}
        {selectedRoute === 'books' && <Books />}
        {selectedRoute === 'goLive' && <GoLive />}
        {selectedRoute === 'Latest' && <Latest />}
        {selectedRoute === 'live' && <Live />}
        {selectedRoute === 'others' && <Others />}
        {selectedRoute === 'shorts' && <Shorts />}
        {selectedRoute === 'videos' && <Videos />}
        {selectedRoute === 'All' && <All />}
        {selectedRoute === 'Home' && <Home />}      
        {selectedRoute === 'about' && <About />}
        {selectedRoute === 'oldest' && <Oldest />}

          </div>
          
    </div>
  )
}

export default Main


