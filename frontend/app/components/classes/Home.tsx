
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
import Photos from './announcement';
import Subscribers from './Subscribers';
import Intermediate from './exclusive';
import Advance from './pricing';
import Shorts from './Shorts';








const Home = () => {
  const [MenuVisible, setMenuVisible] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string>('Program');
 

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className='py-24  '>

      <div className='flex flex-row sm:justify-between  bg-pink-500 w-full h-20 
      border-4 border-red-950
      overflow-x-auto sm:gap-5' >
        
       
       <button onClick={() => setSelectedRoute('Instructors')} type='button' className='text-xl
        text-white h-10 w-auto rounded-xl bg-gray-950 
        mt-3 ml-5  pl-5 pr-5     hover:bg-blue-950 max-lg:hidden
        '>Instructors</button>

        <button onClick={() => setSelectedRoute('Students')} type='button' className='text-xl
         text-white h-10 w-28 rounded-xl bg-gray-950 
        mt-3  pl-5 pr-5      hover:bg-blue-950  max-lg:hidden
        '>students</button>

        <button onClick={() => setSelectedRoute('ClassInfo')} type='button' className='text-xl
         text-white h-10 w-auto rounded-xl bg-gray-950 
        mt-3  pl-5 pr-5      hover:bg-indigo-950  max-lg:hidden
        '>ClassInfo</button>
         
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
               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Instructors')}
               >Instructors</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Students')}
               >Students</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('ClassInfo')}
               >ClassInfo</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('about')}
               >about</button></p></li>

                
               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Post')}
               >Post</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Subscribe')}
               >Subscribe</button></p></li>
              
               </ul>
               
               </div>
       
       </nav>)
               
               }
               </div>
            </div>

            
          <input type='text' className='max-sm:ml-4 w-full h-10 border-2 border-slate-950 mt-3
          pl-5  sm:rounded-full max-lg:rounded-l-full text-xl  max-sm:justify-center  '
           placeholder='search for your favorite'   />

        <button  type='button' className='text-xl text-white h-10 w-12 rounded-r-3xl
         bg-gray-950 
        mt-3 mr-5  pl-2 pr-5      hover:bg-blue-900 sm:hidden
        '><FaSearch /></button>

        <button onClick={() => setSelectedRoute('About')} type='button' className='text-xl
         text-white h-10 w-auto  rounded-xl bg-gray-950 
        mt-3  pl-5 pr-5      hover:bg-blue-950  max-lg:hidden
        '>About </button>
         
       
         
        
         <button onClick={() => setSelectedRoute('Post')}  type='button' className='text-xl
          text-white h-10 w-auto rounded-xl mt-3 pl-5 max-lg:mr-5
         pr-5  bg-gray-950   max-sm:hidden   hover:bg-blue-950
        '>Post</button>
        
       <button onClick={() => setSelectedRoute('Subscribers')} type='button' className='text-xl
        text-white h-10 w-32 rounded-xl bg-gray-950 
        mt-3 mr-5  pl-5 pr-5     hover:bg-blue-950 max-lg:hidden
        '>subscribe</button>
       

      </div>
      <div className='flex flex-row justify-between gap-5 bg-green-500 w-full py-2 border-4
       border-red-950
      overflow-x-auto'>

        

        <button onClick={() => setSelectedRoute('Program')} type='button' className='text-xl
         text-white h-10  w-auto rounded-xl bg-black ml-5
         mt-1 pl-5 pr-5    hover:bg-red-900
        '>Lecture</button>

        <button onClick={() => setSelectedRoute('VideoCall')} type='button' className='text-xl
         text-white h-10  w-auto rounded-xl bg-black 
         mt-1 pl-5 pr-5      hover:bg-red-900
        '>videoCall</button>

        <button onClick={() => setSelectedRoute('VoiceCall')} type='button' className='text-xl
         text-white h-10 w-auto rounded-xl bg-black 
         mt-1 pl-5 pr-5     hover:bg-red-900
        '>voiceCall</button>

        <button onClick={() => setSelectedRoute('ClassChat')} type='button' className='text-xl
         text-white h-10 w-auto rounded-xl bg-black 
         mt-1 pl-5 pr-5    hover:bg-red-900
        '>ClassChat</button>

         <button onClick={() => setSelectedRoute('Videos')} type='button' className='text-xl
          text-white h-10 w-24  rounded-xl bg-black 
          mt-1   w pl-5 pr-5   hover:bg-red-900
        '>videos</button>

         <button onClick={() => setSelectedRoute('Shorts')} type='button' className='text-xl
          text-white h-10 w-24  rounded-xl bg-black 
          mt-1   w pl-5 pr-5   hover:bg-red-900
        '>Shorts</button>

       <button onClick={() => setSelectedRoute('Articles')} type='button' className='text-xl
          text-white h-10  w-auto rounded-xl bg-black 
        mt-1   pl-5 pr-5    hover:bg-red-900
        '>Articles</button>

        <button onClick={() => setSelectedRoute('Photos')} type='button' className='text-xl
          text-white h-10  w-auto rounded-xl bg-black 
        mt-1   pl-5 pr-5    hover:bg-red-900
        '>Photos</button>

        <button onClick={() => setSelectedRoute('Lessons')} type='button' className='text-xl
        text-white h-10 w-auto rounded-xl bg-black 
        mt-1   pl-5 pr-5     hover:bg-red-900
        '>Beginners</button>

       <button onClick={() => setSelectedRoute('Intermediate')} type='button' className='text-xl
        text-white h-10 w-auto rounded-xl bg-black 
        mt-1   pl-5 pr-5     hover:bg-red-900
        '>Intermediate</button>

       <button onClick={() => setSelectedRoute('Advance')} type='button' className='text-xl
        text-white h-10 w-auto rounded-xl bg-black 
        mt-1   pl-5 pr-5     hover:bg-red-900
        '>Advance</button>


         <button onClick={() => setSelectedRoute('Review')} type='button' className='text-xl
         text-white h-10 w-auto rounded-xl bg-black 
        mt-1  pl-5 pr-5      hover:bg-red-900
        '>feedback/rating</button>

         <button onClick={() => setSelectedRoute('Help')} type='button' className='text-xl
          text-white h-10 w-auto  rounded-xl bg-black 
        mt-1  mr-5 w pl-5 pr-5 hover:bg-red-900
        '>help/report</button>

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
         
          

       </div>
      
      

    </div>
  )
}

export default Home