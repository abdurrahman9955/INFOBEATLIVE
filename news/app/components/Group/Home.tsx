
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







const Home = () => {
  const [MenuVisible, setMenuVisible] = useState(false);
  const initialRoute = localStorage.getItem('selectedRoute') || 'Program'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);
  

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
        
       
       <button onClick={() => setSelectedRoute('Admin')} type='button' className='text-xl
        text-white h-10 w-28 rounded-xl bg-gray-800 
        mt-3 ml-5  pl-5 pr-5     hover:bg-orange-900 max-lg:hidden
        '>admin</button>

        <button onClick={() => setSelectedRoute('Members')} type='button' className='text-xl
         text-white h-10 w-28 rounded-xl bg-gray-800 
        mt-3  pl-5 pr-5      hover:bg-orange-900  max-lg:hidden
        '>members</button>

        <button onClick={() => setSelectedRoute('GroupInfo')} type='button' className='text-xl
         text-white h-10 w-auto rounded-xl bg-gray-800 
        mt-3  pl-5 pr-5      hover:bg-orange-900  max-lg:hidden
        '>groupInfo</button>
         
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
               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Admin')}
               >Admin</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Members')}
               >Members</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('GroupInfo')}
               >GroupInfo</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('About')}
               >about</button></p></li>

                 
               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Post')}
               >post</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Connect')}
               >connect</button></p></li>
              
               </ul>
               
               </div>
       
       </nav>)
               
               }
               </div>
            </div>

            
            <input type='text' className='max-sm:ml-4 w-full h-10 border-2 border-slate-950 mt-3
          pl-5  sm:rounded-full max-lg:rounded-l-full text-xl  max-sm:justify-center  '
           placeholder='search for your favorite'   />

        <button onClick={() => setSelectedRoute('About')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-gray-800 
        mt-3  pl-5 pr-5      hover:bg-orange-900  max-lg:hidden
        '>About </button>
         
        <button  type='button' className='text-xl text-white h-10 w-12 rounded-r-3xl
         bg-gray-900 
        mt-3 mr-5  pl-5 pr-5      hover:bg-orange-700 sm:hidden
        '><FaSearch /></button>
         
        
         <button onClick={() => setSelectedRoute('Post')}  type='button' className='text-xl
          text-white h-10 w-24 rounded-xl mt-3 pl-5 max-lg:mr-5
         pr-5  bg-gray-800   max-sm:hidden   hover:bg-orange-900
        '>post</button>
        
       <button onClick={() => setSelectedRoute('Connect')} type='button' className='text-xl
        text-white h-10 w-32 rounded-xl bg-gray-800 
        mt-3 mr-5  pl-5 pr-5     hover:bg-orange-900 max-lg:hidden
        '>Connect</button>
       

      </div>
      <div className='flex flex-row justify-between gap-5 bg-lime-500 w-full h-20 border-4
       border-red-950 pl-5
      overflow-x-auto'>

        
        <button onClick={() => setSelectedRoute('Program')} type='button' className='text-xl
         text-white h-10  w-auto rounded-xl bg-black 
        mt-4  pl-5 pr-5    hover:bg-red-900
        '>program</button>

        <button onClick={() => setSelectedRoute('VideoCall')} type='button' className='text-xl
         text-white h-10  w-auto rounded-xl bg-black 
        mt-4  pl-5 pr-5      hover:bg-red-900
        '>videoCall</button>

        <button onClick={() => setSelectedRoute('VoiceCall')} type='button' className='text-xl
         text-white h-10 w-auto rounded-xl bg-black 
        mt-4   pl-5 pr-5     hover:bg-red-900
        '>voiceCall</button>

        <button onClick={() => setSelectedRoute('GroupChat')} type='button' className='text-xl
         text-white h-10 w-auto rounded-xl bg-black 
        mt-4  pl-5 pr-5    hover:bg-red-900
        '>groupChat</button>

         <button onClick={() => setSelectedRoute('Videos')} type='button' className='text-xl
          text-white h-10 w-24  rounded-xl bg-black 
        mt-4   w pl-5 pr-5   hover:bg-red-900
        '>Videos</button>

       
        <button onClick={() => setSelectedRoute('Shorts')} type='button' className='text-xl
          text-white h-10 w-24  rounded-xl bg-black 
        mt-4   w pl-5 pr-5   hover:bg-red-900
        '>Shorts</button>

        <button onClick={() => setSelectedRoute('Photos')} type='button' className='text-xl
        text-white h-10 w-24 rounded-xl bg-black 
        mt-4   pl-5 pr-5     hover:bg-red-900
        '>Photos</button>

         <button onClick={() => setSelectedRoute('Articles')} type='button' className='text-xl
         text-white h-10 w-24 rounded-xl bg-black 
        mt-4  pl-5 pr-5      hover:bg-red-900
        '>Articles</button>

         <button onClick={() => setSelectedRoute('Audios')} type='button' className='text-xl
          text-white h-10 w-24  rounded-xl bg-black 
        mt-4  mr-5 w pl-5 pr-5 hover:bg-red-900
        '>Audios</button>

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

export default Home