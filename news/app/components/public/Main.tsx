'use client'
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import {  FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Link from 'next/link';
import Group from './Group';
import Classes from './Classes';
import Articles from './Articles';
import Books from './Books';
import GoLive from './GoLive';
import Latest from './Latest';
import Live from './Live';
import Others from './Others';
import Popular from './Popular';
import Shorts from './Shorts';
import Videos from './Videos';
import All from './All';
import Studio from './Studio';
import About from './About';
import Oldest from './Oldest';


const Main = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'All'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);
  const [MenuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className="pt-24 w-full ">
        <div className="border-4 border-red-950 bg-emerald-500 py-4 w-full  ">
        <div className="flex justify-items-center overflow-x-auto gap-4  ">

        <button onClick={() => setSelectedRoute('group')} type='button' className='text-xl
        text-white h-10 w-28 rounded-xl bg-gray-900 
         ml-5  pl-5 pr-5     hover:bg-orange-700 max-lg:hidden
        '>channel</button>

        <button onClick={() => setSelectedRoute('class')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
          pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>library</button>

        <button onClick={() => setSelectedRoute('Studio')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
         pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>studio</button>
         
         <div className="text-slate-950 py-2 px-5 ml-1 text-2xl lg:hidden
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
                <nav className="fixed top-40 left-0 px-5  shadow-md z-10 bg-yellow-950 
                border-4 border-slate-300  overflow-y-auto text-white">
                    <div className="flex flex-row " >
                <ul className="flex flex-col p-2 gap-5 " >
               <li className="text-xl"><p><button onClick={() => setSelectedRoute('group')}
               >channel</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('class')}
               >Library</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Studio')}
               >studio</button></p></li>

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

            
            <div className="flex flex-row gap-0 w-full">
            <input type='text' className=' w-full h-10 border-2 border-slate-950 
          pl-5  lg:rounded-full max-lg:rounded-l-full text-xl  max-sm:justify-center  '
           placeholder='search here'   />

            <button  type='button' className='text-xl text-white h-10 sm:w-20 rounded-r-3xl
            bg-gray-900 w-16
             mr-5  pl-4      hover:bg-orange-700 lg:hidden
          '><FaSearch /></button></div>

        <button onClick={() => setSelectedRoute('class')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-900 
          pl-5 pr-5      hover:bg-orange-700  max-lg:hidden
        '>About </button>
         
        <Link href={{pathname:'/upload'}}>
         <button onClick={() => setSelectedRoute('upload')}  type='button' className='text-xl
          text-white h-10 w-24 rounded-xl  pl-5 max-lg:mr-5
         pr-5  bg-gray-900   max-sm:hidden   hover:bg-orange-700
        '>upload</button></Link>
        
       <button onClick={() => setSelectedRoute('goLive')} type='button' className='text-xl
        text-white h-10 w-32 rounded-xl bg-gray-900 
        mr-5  pl-5 pr-5     hover:bg-orange-700 max-lg:hidden
        '>goLive</button>

           </div>
           </div>
        <div>
            <div className="flex justify-between gap-4 overflow-x-auto overscroll-auto
              bg-lime-500 text-xl
             py-3 border-4  border-red-950  " >


             
        <button onClick={() => setSelectedRoute('All')} type='button' className='text-xl
         text-white h-10  w-24 rounded-xl bg-black ml-5
          pl-5 pr-5    hover:bg-red-900
        '>Home</button>

        <button onClick={() => setSelectedRoute('videos')} type='button' className='text-xl
         text-white h-10  w-24 rounded-xl bg-black ml-5
          pl-5 pr-5    hover:bg-red-900
        '>videos</button>

        <button onClick={() => setSelectedRoute('articles')} type='button' className='text-xl
         text-white h-10  w-24 rounded-xl bg-black 
         pl-5 pr-5      hover:bg-red-900
        '>articles</button>

        <button onClick={() => setSelectedRoute('books')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-black 
           pl-5 pr-5     hover:bg-red-900
        '>books</button>

        <button onClick={() => setSelectedRoute('shorts')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-black 
          pl-5 pr-5    hover:bg-red-900
        '>shorts</button>

         <button onClick={() => setSelectedRoute('others')} type='button' className='text-xl
          text-white h-10 w-24  rounded-xl bg-black 
          w pl-5 pr-5   hover:bg-red-900
        '>others</button>

        <button onClick={() => setSelectedRoute('Popular')} type='button' className='text-xl
        text-white h-10 w-auto rounded-xl bg-black 
          pl-5 pr-5     hover:bg-red-900
        '>popular</button>

         <button onClick={() => setSelectedRoute('Latest')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-black 
          pl-5 pr-5      hover:bg-red-900
        '>latest</button>

       <button onClick={() => setSelectedRoute('Oldest')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-black 
          pl-5 pr-5      hover:bg-red-900
        '>Oldest</button>

         <button onClick={() => setSelectedRoute('live')} type='button' className='text-xl
          text-white h-10 w-24  rounded-xl bg-black 
         mr-5 w pl-5 pr-5 hover:bg-red-900
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
        {selectedRoute === 'Popular' && <Popular />}
        {selectedRoute === 'shorts' && <Shorts />}
        {selectedRoute === 'videos' && <Videos />}
        {selectedRoute === 'All' && <All />}
        {selectedRoute === 'Studio' && <Studio />}
        {selectedRoute === 'about' && <About />}
        {selectedRoute === 'Oldest' && <Oldest />}

          </div>
          
    </div>
  )
}

export default Main


