
'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import {  FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa'; 
import Link from 'next/link';
import VoiceCall from './VoiceCall';
import VideoCall from './VideoCall';
import ClassChat from './ClassChat';
import ClassInfo from './ClassInfo';
import Videos from './Videos';
import Program from './Program';
import Instructors from './Instructors';
import Students from './Students';
import Post from './Post';
import About from './About';
import Review from './Review';
import Help from './Help';
import Articles from './Articles';
import Lessons from './Lessons';
import Photos from './Photos';
import Subscribers from './Subscribers';
import Intermediate from './Intermediate';
import Advance from './Advance';
import Shorts from './Shorts';
import Connect from './Connect';




const Main = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Program');
  const [MenuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className=" w-full ">
        <div className="border-2 border-red-950 bg-pink-500 py-1 w-full  ">
        <div className="flex justify-items-center overflow-x-auto gap-2  ">

        <button onClick={() => setSelectedRoute('Instructors')} type='button'
         className='text-xs
        text-white h-7 w-auto rounded-sm bg-gray-950 
         ml-1  pl-5 pr-5     hover:bg-blue-950 max-lg:hidden
        '>Instructors</button>

        <button onClick={() => setSelectedRoute('Students')} type='button' className='text-xs
         text-white h-7 w-28 rounded-sm bg-gray-950 
          pl-5 pr-5      hover:bg-blue-950  max-lg:hidden
        '>students</button>

        <button onClick={() => setSelectedRoute('ClassInfo')} type='button' className='text-xs
         text-white h-7 w-auto rounded-sm bg-gray-950 
          pl-5 pr-5      hover:bg-indigo-950  max-lg:hidden
        '>ClassInfo</button>
         
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
                <ul className="flex flex-col p-2 gap-5 " >
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Instructors')}
               >Instructors</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Students')}
               >Students</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('ClassInfo')}
               >ClassInfo</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('about')}
               >about</button></p></li>

                
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Post')}
               >Post</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('Subscribe')}
               >Subscribe</button></p></li>
              
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

            <button  type='button' className='text-sm text-white h-7 sm:w-20 rounded-r-3xl
            bg-gray-900 w-16
             mr-5  pl-4      hover:bg-orange-950 lg:hidden
          '><FaSearch /></button></div>

        <button onClick={() => setSelectedRoute('About')} type='button' className='text-xs
         text-white h-7 w-auto  rounded-sm bg-gray-950 
          pl-5 pr-5      hover:bg-blue-950  max-lg:hidden
        '>About </button>
         
         <button onClick={() => setSelectedRoute('Post')}  type='button' className='text-xs
          text-white h-7 w-auto rounded-sm  pl-5 max-lg:mr-5
         pr-5  bg-gray-950   max-sm:hidden   hover:bg-blue-950
        '>Post</button>
        
       <button onClick={() => setSelectedRoute('Subscribers')} type='button' 
       className='text-xs
        text-white h-7 w-32 rounded-sm bg-gray-950 
        mr-1  pl-5 pr-5     hover:bg-blue-950 max-lg:hidden
        '>subscribe</button>

           </div>
           </div>
          <div>
            <div className="flex justify-between gap- overflow-x-auto overscroll-auto
              bg-green-500 text-sm gap-1
             py-1 border-2  border-red-950  " >

        <button onClick={() => setSelectedRoute('Program')} type='button' 
        className='text-xs
         text-white h-7  w-auto rounded-sm bg-black ml-1
          pl-5 pr-5    hover:bg-red-900
        '>CreateLecture</button>

        <button onClick={() => setSelectedRoute('Connect')} type='button' 
        className='text-xs
         text-white h-7  w-auto rounded-sm bg-black
          pl-5 pr-5    hover:bg-red-900
        '>StartLecture</button>

        <button onClick={() => setSelectedRoute('VideoCall')} type='button' 
        className='text-xs
         text-white h-7  w-auto rounded-sm bg-black 
         pl-5 pr-5      hover:bg-red-900
        '>videoCall</button>

        <button onClick={() => setSelectedRoute('VoiceCall')} type='button' 
        className='text-xs
         text-white h-7 w-auto rounded-sm bg-black 
         pl-5 pr-5     hover:bg-red-900
        '>voiceCall</button>

        <button onClick={() => setSelectedRoute('ClassChat')} type='button' 
        className='text-xs
         text-white h-7 w-auto rounded-sm bg-black 
         pl-5 pr-5    hover:bg-red-900
        '>ClassChat</button>

         <button onClick={() => setSelectedRoute('Videos')} type='button' 
         className='text-xs
          text-white h-7 w-24  rounded-sm bg-black 
             w pl-5 pr-5   hover:bg-red-900
        '>videos</button>

         <button onClick={() => setSelectedRoute('Shorts')} type='button' 
         className='text-xs
          text-white h-7 w-24  rounded-sm bg-black 
            w pl-5 pr-5   hover:bg-red-900
        '>Shorts</button>

       <button onClick={() => setSelectedRoute('Articles')} type='button' 
       className='text-xs
          text-white h-7  w-auto rounded-sm bg-black 
          pl-5 pr-5    hover:bg-red-900
        '>Articles</button>

        <button onClick={() => setSelectedRoute('Photos')} type='button' 
        className='text-xs
          text-white h-7  w-auto rounded-sm bg-black 
          pl-5 pr-5    hover:bg-red-900
        '>Photos</button>

        <button onClick={() => setSelectedRoute('Lessons')} type='button' 
        className='text-xs
        text-white h-7 w-auto rounded-sm bg-black 
          pl-5 pr-5     hover:bg-red-900
        '>Beginners</button>

       <button onClick={() => setSelectedRoute('Intermediate')} type='button' 
       className='text-xs
        text-white h-7 w-auto rounded-sm bg-black 
         pl-5 pr-5     hover:bg-red-900
        '>Intermediate</button>

       <button onClick={() => setSelectedRoute('Advance')} type='button' 
       className='text-xs
        text-white h-7 w-auto rounded-sm bg-black 
         pl-5 pr-5     hover:bg-red-900
        '>Advance</button>


         <button onClick={() => setSelectedRoute('Review')} type='button' 
         className='text-xs
         text-white h-7 w-auto rounded-sm bg-black 
         pl-5 pr-5      hover:bg-red-900
        '>feedback/rating</button>

         <button onClick={() => setSelectedRoute('Help')} type='button' 
         className='text-xs
          text-white h-7 w-auto  rounded-sm bg-black 
          mr-1 w pl-5 pr-5 hover:bg-red-900
        '>help/report</button>

             
            </div>
          </div>

          <div>

         
          {selectedRoute === 'Videos' && <Videos />}
           {selectedRoute === 'Shorts' && <Shorts />}
           {selectedRoute === 'Review' && <Review />}
           {selectedRoute === 'About' && <About />}
           {selectedRoute === 'Post' && <Post />}
           {selectedRoute === 'Instructors' && <Instructors />}
           {selectedRoute === 'Help' && <Help />}
           {selectedRoute === 'Students' && <Students />}
           {selectedRoute === 'ClassChat' && <ClassChat />}
           {selectedRoute === 'ClassInfo' && <ClassInfo />}
           {selectedRoute === 'Articles' && <Articles />}
           {selectedRoute === 'Program' && <Program />}
           {selectedRoute === 'VideoCall' && <VideoCall />}
           {selectedRoute === 'VoiceCall' && <VoiceCall />}
           {selectedRoute === 'Lessons' && <Lessons />}
           {selectedRoute === 'Photos' && <Photos />}
           {selectedRoute === 'Subscribers' && <Subscribers />}
           {selectedRoute === 'Advance' && <Advance />}
           {selectedRoute === 'Intermediate' && <Intermediate />}
           {selectedRoute === 'Connect' && <Connect />}

          </div>
          
    </div>
  )
}

export default Main


