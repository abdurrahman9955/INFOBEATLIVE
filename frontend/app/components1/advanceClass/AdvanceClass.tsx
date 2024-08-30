
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
import Pricing from '@/app/components/bootCamp/Pricing';




const AdvanceClass = () => {
 
  const [selectedRoute, setSelectedRoute] = useState<string>('Program');
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
          ? 'text-white bg-red-800 gap-1 px-7 max-lg:hidden w-auto h-7  text-xs rounded-sm'  
          : 'text-white bg-black gap-1 px-7 w-auto h-7 max-lg:hidden  text-xs rounded-sm hover:bg-blue-800'; 
          
      };

  return (
    <div className=" w-full ">
        <div className="border-2 border-red-950 bg-orange-500 py-1 w-full  ">
        <div className="flex justify-items-center overflow-x-auto gap-1 px-1  ">

        <button onClick={() => setSelectedRoute('Instructors')} 
        type='button'
        className={getButtonClass0('Instructors')}
        >Instructors</button>

        <button onClick={() => setSelectedRoute('Students')} 
        type='button' 
        className={getButtonClass0('Students')}
        >students</button>

        <button onClick={() => setSelectedRoute('ClassInfo')} 
        type='button' 
        className={getButtonClass0('ClassInfo')}
        >ClassInfo</button>
         
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
            pl-5  lg:rounded-lg max-lg:rounded-l-full text-sm  max-sm:justify-center  '
            placeholder='search here'   />

            <button  type='button' className='text-sm text-white h-7 sm:w-20 rounded-r-3xl
            bg-gray-900 w-16
             mr-5  pl-4      hover:bg-orange-950 lg:hidden
          '><FaSearch /></button></div>

        <button onClick={() => setSelectedRoute('About')} 
        type='button' 
        className={getButtonClass0('About')}
        >About </button>
         
         <button onClick={() => setSelectedRoute('Post')}  
         type='button' 
         className={getButtonClass0('Post')}
        >Publish</button>
        
       <button onClick={() => setSelectedRoute('Subscribers')} 
       type='button' 
       className={getButtonClass0('Subscribes')}
        >subscribe</button>

           </div>
           </div>
          <div>
            <div className="flex justify-between gap- overflow-x-auto overscroll-auto
              bg-pink-500 text-sm gap-1 px-1
             py-1 border-2  border-red-950  " >

        <button onClick={() => setSelectedRoute('Program')} 
        type='button' 
        className={getButtonClass('Program')}
        >CreateLecture</button>

        <button onClick={() => setSelectedRoute('Connect')} 
        type='button' 
        className={getButtonClass('Connect')}
        >StartLecture</button>

        <button onClick={() => setSelectedRoute('Lessons')} 
        type='button' 
        className={getButtonClass('Lessons')}
        >Courses</button>

        <button onClick={() => setSelectedRoute('VideoCall')} 
        type='button' 
        className={getButtonClass('VideoCall')}
        >videoCall</button>

        <button onClick={() => setSelectedRoute('VoiceCall')} 
        type='button' 
        className={getButtonClass('VoiceCall')}
        >voiceCall</button>

        <button onClick={() => setSelectedRoute('ClassChat')} 
        type='button' 
        className={getButtonClass('ClassChat')}
        >ClassChat</button>

         <button onClick={() => setSelectedRoute('Videos')} 
         type='button' 
         className={getButtonClass('Videos')}
        >videos</button>

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
        >Announcement</button>

       <button onClick={() => setSelectedRoute('Pricing')} 
       type='button' 
       className={getButtonClass('Pricing')}
        >Pricing</button>

       <button onClick={() => setSelectedRoute('Advance')} 
       type='button' 
       className={getButtonClass('Advance')}
        >Examination</button>


         <button onClick={() => setSelectedRoute('Review')} 
         type='button' 
         className={getButtonClass('Review')}
        >Review</button>

         <button onClick={() => setSelectedRoute('Help')} 
         type='button' 
         className={getButtonClass('Help')}
        >help/report</button>

             
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
           {selectedRoute === 'Pricing' && <Pricing />}

          </div>
          
    </div>
  )
}

export default AdvanceClass


