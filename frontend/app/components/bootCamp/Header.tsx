'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Menu0 from '@/app/components0/menu0'; 
import Link from 'next/link';
import Group from './BeginnersClassHome';
import Classes from './IntermediateClassHome';
import Articles from './Articles';
import Books from './testimonial';
import GoLive from './GoLive';
import Latest from './instructors';
import Live from './contact';
import Others from './announcement';
import Shorts from './Shorts';
import Videos from './Videos';
import All from './details';
import About from './About';
import Oldest from './students';
import Home from './Home';




const Header = () => {
 
  const [MenuVisible, setMenuVisible] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string>('Home');
  

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className='py-24 '>

      <div className='flex flex-row sm:justify-between  bg-cyan-400 w-full h-20 
      border-4 border-red-950
      overflow-x-auto sm:gap-4' >
        
       
       <button onClick={() => setSelectedRoute('group')} type='button' className='text-xl
        text-white h-10 w-28 rounded-xl bg-gray-900 
        mt-3 ml-5  pl-5 pr-5     hover:bg-orange-700 max-lg:hidden
        '>Group</button>

        <button onClick={() => setSelectedRoute('class')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
        mt-3  pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>Class</button>

        <Link href={{pathname:'/Posting'}}>
        <button  type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
        mt-3  pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>Posting</button></Link>
         
         <div className="text-slate-950 py-2 px-5 ml-1 text-2xl lg:hidden
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
                <nav className="fixed top-40 left-0 px-5  shadow-md z-10 bg-yellow-950 
                border-4 border-slate-300  overflow-y-auto text-white">
                    <div className="flex flex-row " >
                <ul className="flex flex-col p-2 gap-5 " >
               <li className="text-xl"><p><button onClick={() => setSelectedRoute('group')}
               >Group</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('class')}
               >Class</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Store')}
               >Store</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('about')}
               >about</button></p></li>

                 <Link href={{pathname:'/upload'}}>
               <li className="text-xl"><p><button 
               >publish</button></p></li></Link>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('goLive')}
               >GoLive</button></p></li>
              
               </ul>
               
               </div>
       
       </nav>)
               
               }
               </div>
            </div>

            
          <input type='text' className='max-sm:ml-4 max-lg:w-5/6 h-10 
          border-2 border-slate-950 mt-3 lg:w-4/6
          pl-5  sm:rounded-full max-sm:rounded-l-full text-xl max-sm:w-5/6 max-sm:justify-center  '
           placeholder='search for your favorite'   />

        <button onClick={() => setSelectedRoute('class')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
        mt-3  pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>About </button>
         
        <button  type='button' className='text-xl text-white h-10 w-12 rounded-r-3xl
         bg-gray-900 
        mt-3 mr-5  pl-5 pr-5      hover:bg-orange-700 sm:hidden
        '><FaSearch /></button>
         
        <Link href={{pathname:'/upload'}}>
         <button onClick={() => setSelectedRoute('upload')}  type='button' className='text-xl
          text-white h-10 w-24 rounded-xl mt-3 pl-5 max-lg:mr-5
         pr-5  bg-gray-900   max-sm:hidden   hover:bg-orange-700
        '>publish</button></Link>
        
       <button onClick={() => setSelectedRoute('goLive')} type='button' className='text-xl
        text-white h-10 w-32 rounded-xl bg-gray-900 
        mt-3 mr-5  pl-5 pr-5     hover:bg-orange-700 max-lg:hidden
        '>goLive</button>
       

      </div>
      <div className='flex flex-row justify-between gap-5 bg-green-500 w-full h-20 border-4
       border-red-950
      overflow-x-auto'>

        <button onClick={() => setSelectedRoute('Home')} type='button' className='text-xl
          text-white h-10  w-24 rounded-xl bg-black 
        mt-4 ml-5  pl-5 pr-5    hover:bg-red-900
        '>Home</button>

         <button onClick={() => setSelectedRoute('All')} type='button' className='text-xl
          text-white h-10  w-24 rounded-xl bg-black 
        mt-4 ml-5  pl-5 pr-5    hover:bg-red-900
        '>post</button>

        <button onClick={() => setSelectedRoute('videos')} type='button' className='text-xl
         text-white h-10  w-24 rounded-xl bg-black 
        mt-4  pl-5 pr-5    hover:bg-red-900
        '>videos</button>

        <button onClick={() => setSelectedRoute('articles')} type='button' className='text-xl
         text-white h-10  w-24 rounded-xl bg-black 
        mt-4  pl-5 pr-5      hover:bg-red-900
        '>articles</button>

        <button onClick={() => setSelectedRoute('books')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-black 
        mt-4   pl-5 pr-5     hover:bg-red-900
        '>books</button>

        <button onClick={() => setSelectedRoute('shorts')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-black 
        mt-4  pl-5 pr-5    hover:bg-red-900
        '>shorts</button>

         <button onClick={() => setSelectedRoute('others')} type='button' className='text-xl
          text-white h-10 w-24  rounded-xl bg-black 
        mt-4   w pl-5 pr-5   hover:bg-red-900
        '>others</button>

        <button onClick={() => setSelectedRoute('oldest')} type='button' className='text-xl
        text-white h-10 w-24 rounded-xl bg-black 
        mt-4   pl-5 pr-5     hover:bg-red-900
        '>Oldest</button>

         <button onClick={() => setSelectedRoute('Latest')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-black 
        mt-4  pl-5 pr-5      hover:bg-red-900
        '>latest</button>

         <button onClick={() => setSelectedRoute('live')} type='button' className='text-xl
          text-white h-10 w-24  rounded-xl bg-black 
        mt-4  mr-5 w pl-5 pr-5 hover:bg-red-900
        '>live</button>

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

export default Header