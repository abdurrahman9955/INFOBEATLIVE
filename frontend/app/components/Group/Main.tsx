
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
import GroupPost from './GroupPost';


const Main = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Program'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);
  const [MenuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };

const getButtonClass = (route: string) => {
        return selectedRoute === route 
          ? 'text-white bg-red-800 gap-1 px-10  w-auto h-7  text-xs rounded-sm'  
          : 'text-white bg-black gap-1 px-10 w-auto h-7   text-xs rounded-sm hover:bg-blue-800'; 
          
      };

const getButtonClass0 = (route: string) => {
        return selectedRoute === route 
          ? 'text-white bg-red-800 gap-1 sm:px-7  px-2  w-auto h-7  text-xs rounded-sm'  
          : 'text-white bg-black gap-1 sm:px-7 px-2 w-auto h-7   text-xs rounded-sm hover:bg-blue-800'; 
          
      };

  return (
    <div className=" w-full ">
        <div className="border-2 border-red-950 bg-lime-500 py-1 w-full  ">
        <div className="flex justify-items-center overflow-x-auto gap-2 px-1 ">

        <button onClick={() => setSelectedRoute('Admin')} 
        type='button' 
        className='hidden'
        >admin</button>

        <button onClick={() => setSelectedRoute('Members')} 
        type='button' 
        className='hidden'
        >members</button>

        <button onClick={() => setSelectedRoute('GroupInfo')} 
        type='button' 
        className={getButtonClass0('GroupInfo')}
        >Info</button>
         
         <div className="text-slate-950 pt-2 px-5 ml-1 text-sm lg: hidden
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

                 
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('GroupPost')}
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
          pl-5   max-lg rounded-l-full text-sm  max-sm:justify-center  '
           placeholder='search here'   />

            <button  type='button' className='text-xs text-white h-7 sm:w-20 
            rounded-r-lg  bg-red-900 w-16
                     hover:bg-blue-900 lg:h idden
          '>search</button></div>

        <button onClick={() => setSelectedRoute('About')} 
        type='button' 
        className='hidden'
        >About </button>
         
        
         <button onClick={() => setSelectedRoute('GroupPost')}  
         type='button' 
         className={getButtonClass0('GroupPost')}
        >post</button>
        
        <button onClick={() => setSelectedRoute('Connect')} 
        type='button' 
        className='hidden'
        >Connect</button>

           </div>
           </div>
        <div>
            <div className="flex justify-between gap-1 overflow-x-auto overscroll-auto
              bg-orange-600 text-xs px-1
             py-1 border  border-red-950  " >

        <button onClick={() => setSelectedRoute('Program')} 
        type='button' 
        className={getButtonClass('Program')}
        >program</button>

        <button onClick={() => setSelectedRoute('Connect')} 
        type='button' 
        className={getButtonClass('Connect')}
        >Connect</button>

        <button onClick={() => setSelectedRoute('VideoCall')} 
        type='button' 
        className={getButtonClass('VideoCall')}
        >videoCall</button>

        <button onClick={() => setSelectedRoute('VoiceCall')} 
        type='button' 
        className={getButtonClass('VoiceCall')}
        >voiceCall</button>

        <button onClick={() => setSelectedRoute('GroupChat')} 
        type='button' 
        className={getButtonClass('GroupChat')}
        >groupChat</button>

         <button onClick={() => setSelectedRoute('Videos')} 
         type='button' 
         className={getButtonClass('Videos')}
        >Videos</button>

       
        <button onClick={() => setSelectedRoute('Shorts')} 
        type='button' 
        className={getButtonClass('Shorts')}
        >Shorts</button>

        <button onClick={() => setSelectedRoute('Articles')} 
         type='button' 
         className={getButtonClass('Articles')}
         >Articles</button>

        <button onClick={() => setSelectedRoute('Photos')} 
        type='button' 
        className='hidden'
        >Photos</button>

         <button onClick={() => setSelectedRoute('Audios')} 
         type='button' 
         className='hidden'
         >Audios</button>

        <button onClick={() => setSelectedRoute('Admin')} 
        type='button' 
        className={getButtonClass('Admin')}
        >Admin</button>

         <button onClick={() => setSelectedRoute('Members')} 
         type='button' 
         className={getButtonClass('Members')}
         >Members</button>

         <button onClick={() => setSelectedRoute('About')} 
         type='button' 
         className={getButtonClass('About')}
         >About</button>
             
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
           {selectedRoute === 'GroupPost' && <GroupPost/>}

          </div>
          
    </div>
  )
}

export default Main


