
'use client'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import {  FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Link from 'next/link';
import Admin from './Admin';
import Articles from './Articles';
import Audios from './Audios';
import Connect from './Connect';
import GroupChat from './GroupChat';
import GroupInfo from './GroupInfo';
import Live from './Live';
import Members from './Members';
import Photos from './Photos';
import Program from './Program';
import VideosCall from './VideoCall';
import Videos from './Videos';
import VoiceCall from './VoiceCall';
import All from './All';
import Post from './Post';
import About from './About';
import Shorts from './Shorts';


const Main = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Program'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);
  const [MenuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className=" w-full ">
        <div className="border-2 border-red-950 bg-orange-500 py-1 w-full  ">
        <div className="flex justify-items-center overflow-x-auto gap-2  ">

        <button onClick={() => setSelectedRoute('Admin')} type='button' className='text-xs
        text-white h-7 w-28 rounded-sm bg-gray-800 
         ml-1  pl-5 pr-5     hover:bg-orange-900 max-lg:hidden
        '>admin</button>

        <button onClick={() => setSelectedRoute('Members')} type='button' className='text-xs
         text-white h-7 w-28 rounded-sm bg-gray-800 
          pl-5 pr-5      hover:bg-orange-900  max-lg:hidden
        '>members</button>

        <button onClick={() => setSelectedRoute('GroupInfo')} type='button' className='text-xs
         text-white h-7 w-auto rounded-sm bg-gray-800 
          pl-5 pr-5      hover:bg-orange-900  max-lg:hidden
        '>groupInfo</button>
         
         <div className="text-slate-950 pt-2 px-5 ml-1 text-sm lg:hidden
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
                <ul className="flex flex-col p-2 gap-5 " >
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Admin')}
               >Admin</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Members')}
               >Members</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('GroupInfo')}
               >GroupInfo</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('About')}
               >about</button></p></li>

                 
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Post')}
               >post</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Connect')}
               >connect</button></p></li>
              
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
            rounded-r-3xl   bg-gray-900 w-16
             mr-5  pl-4      hover:bg-orange-950 lg:hidden
          '><FaSearch /></button></div>

        <button onClick={() => setSelectedRoute('About')} type='button' className='text-sm
         text-white h-7 w-24 rounded-sm bg-gray-800 
          pl-5 pr-5      hover:bg-orange-900  max-lg:hidden
        '>About </button>
         
        
         <button onClick={() => setSelectedRoute('Post')}  type='button' className='text-sm
          text-white h-7 w-24 rounded-sm  pl-5 max-lg:mr-5
         pr-5  bg-gray-800   max-sm:hidden   hover:bg-orange-900
        '>post</button>
        
       <button onClick={() => setSelectedRoute('Connect')} type='button' className='text-sm
        text-white h-7 w-32 rounded-sm bg-gray-800 
         mr-1  pl-5 pr-5     hover:bg-orange-900 max-lg:hidden
        '>Connect</button>

           </div>
           </div>
        <div>
            <div className="flex justify-between gap-2 overflow-x-auto overscroll-auto
              bg-lime-500 text-xs
             py-1 border  border-red-950  " >

        <button onClick={() => setSelectedRoute('Program')} type='button' className='text-xs
         text-white h-7  w-auto rounded-sm bg-black 
        ml-1  pl-5 pr-5    hover:bg-red-900
        '>program</button>

        <button onClick={() => setSelectedRoute('VideoCall')} type='button' className='text-xs
         text-white h-7  w-auto rounded-sm bg-black 
         pl-5 pr-5      hover:bg-red-900
        '>videoCall</button>

        <button onClick={() => setSelectedRoute('VoiceCall')} type='button' className='text-xs
         text-white h-7 w-auto rounded-sm bg-black 
           pl-5 pr-5     hover:bg-red-900
        '>voiceCall</button>

        <button onClick={() => setSelectedRoute('GroupChat')} type='button' className='text-xs
         text-white h-7 w-auto rounded-sm bg-black 
         pl-5 pr-5    hover:bg-red-900
        '>groupChat</button>

         <button onClick={() => setSelectedRoute('Videos')} type='button' className='text-xs
          text-white h-7 w-24  rounded-sm bg-black 
          w pl-5 pr-5   hover:bg-red-900
        '>Videos</button>

       
        <button onClick={() => setSelectedRoute('Shorts')} type='button' className='text-xs
          text-white h-7 w-24  rounded-sm bg-black 
           w pl-5 pr-5   hover:bg-red-900
        '>Shorts</button>

        <button onClick={() => setSelectedRoute('Photos')} type='button' className='text-xs
        text-white h-7 w-24 rounded-sm bg-black 
           pl-5 pr-5     hover:bg-red-900
        '>Photos</button>

         <button onClick={() => setSelectedRoute('Articles')} type='button' className='text-xs
         text-white h-7 w-24 rounded-sm bg-black 
         pl-5 pr-5      hover:bg-red-900
        '>Articles</button>

         <button onClick={() => setSelectedRoute('Audios')} type='button' className='text-xs
          text-white h-7 w-24  rounded-sm bg-black 
         mr-1 w pl-5 pr-5 hover:bg-red-900
        '>Audios</button>
             
            </div>
          </div>

          <div>

         
          {selectedRoute === 'Videos' && <Videos />}
           {selectedRoute === 'Live' && <Live />}
           {selectedRoute === 'About' && <About />}
           {selectedRoute === 'Post' && <Post />}
           {selectedRoute === 'All' && <All />}
           {selectedRoute === 'Admin' && <Admin />}
         

           {selectedRoute === 'Members' && <Members />}
           {selectedRoute === 'GroupChat' && <GroupChat />}
           {selectedRoute === 'GroupInfo' && <GroupInfo />}
           {selectedRoute === 'Connect' && <Connect />}
           {selectedRoute === 'Program' && <Program />}
           {selectedRoute === 'VideoCall' && <VideosCall />}

           {selectedRoute === 'VoiceCall' && <VoiceCall />}
           {selectedRoute === 'Photos' && <Photos />}
           {selectedRoute === 'Articles' && <Articles />}
           {selectedRoute === 'Audios' && <Audios />}
           {selectedRoute === 'Shorts' && <Shorts/>}

          </div>
          
    </div>
  )
}

export default Main


