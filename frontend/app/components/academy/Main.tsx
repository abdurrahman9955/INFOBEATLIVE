'use client'
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import {  FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Link from 'next/link';
import Articles from './Articles';
import Books from './Books';
import GoLive from './GoLive';
import Students from './students';
import Announcement from './Announcement';
import Details from './details';
import Testimonials from './Testimonials';
import Shorts from './Shorts';
import Videos from './Videos';
import Home from './Home';
import About from './About';
import Instructors from './Instructors';
import BeginnersAcademyHome from "./beginnersAcademyHome";
import IntermediateAcademyHome from "./IntermediateAcademyHome";
import AdvanceAcademyHome from "./AdvanceAcademyHome";
import Contact from "./contact";
import Pricing from "./Pricing";
import Classes from "./Classes";
import Publish from "./publish";
import AcademyInfo from "./academyInfo";


const Main = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Home');
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
        <div className="border-2 border-red-950 bg-lime-500  py-1 w-full  ">
        <div className="flex justify-items-center overflow-x-auto gap-2 px-1 ">

        <button onClick={() => setSelectedRoute('BeginnersAcademyHome')} 
        type='button' 
        className={getButtonClass0('BeginnersAcademyHome')}
        >Beginner</button>

        <button onClick={() => setSelectedRoute('IntermediateAcademyHome')} 
        type='button' 
        className={getButtonClass0('IntermediateAcademyHome')}
        >Intermediate</button>

        <button onClick={() => setSelectedRoute('AdvanceAcademyHome')} 
        type='button' 
        className={getButtonClass0('AdvanceAcademyHome')}
        >Advance</button>
        
         <div className="text-slate-950 py-1 px-5 ml-1 text-lg lg:hidden
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
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('BeginnersAcademyHome')}
               >Beginner</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('IntermediateAcademyHome')}
               >Intermediate</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('AdvanceAcademyHome')}
               >Advance</button></p></li>

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
          pl-5  lg:rounded-lg max-lg:rounded-l-full text-sm  max-sm:justify-center  '
           placeholder='search here'   />

            <button  type='button' className='text-xl text-white h-7 sm:w-20 rounded-r-3xl
            bg-gray-900 w-16
             mr-5  pl-4      hover:bg-orange-700 lg:hidden
          '><FaSearch /></button></div>

        <button onClick={() => setSelectedRoute('about')} 
        type='button' 
        className={getButtonClass0('about')}
        >About </button>
       
       
        <button onClick={() => setSelectedRoute('Publish')}  
        type='button' 
        className={getButtonClass0('Publish')}
        >publish</button>
        
       <button onClick={() => setSelectedRoute('goLive')} 
       type='button' 
       className={getButtonClass0('goLive')}
        >goLive</button>

           </div>
           </div>
        <div>
            <div className="flex justify-between gap-1 overflow-x-auto overscroll-auto
              bg-orange-500 text-sm border
             py-1  px-1 border-red-950  " >


           
        <button onClick={() => setSelectedRoute('Home')} 
        type='button' 
        className={getButtonClass('Home')}
        >Home</button>

        <button onClick={() => setSelectedRoute('Details')} 
        type='button' 
        className={getButtonClass('Details')}
        >Details</button>

        <button onClick={() => setSelectedRoute('Pricing')} 
        type='button' 
        className={getButtonClass('Pricing')}
        >Pricing</button>

        <button onClick={() => setSelectedRoute('videos')} 
        type='button' 
        className={getButtonClass('videos')}
        >Videos</button>

         <button onClick={() => setSelectedRoute('shorts')} 
         type='button' 
         className={getButtonClass('shorts')}
        >Shorts</button>

        <button onClick={() => setSelectedRoute('articles')} 
        type='button' 
        className={getButtonClass('articles')}
        >Articles</button>

         <button onClick={() => setSelectedRoute('Students')} 
         type='button' 
         className={getButtonClass('Students')}
        >Students</button>

       <button onClick={() => setSelectedRoute('Instructors')} 
       type='button' 
       className={getButtonClass('Instructors')}
        >Instructors</button>

         <button onClick={() => setSelectedRoute('Testimonials')} 
         type='button' 
         className={getButtonClass('Testimonials')}
        >Testimonials</button>
      
        <button onClick={() => setSelectedRoute('Announcement')} 
        type='button' 
        className={getButtonClass('Announcement')}
        >Announcement</button>

         <button onClick={() => setSelectedRoute('Contact')} 
         type='button' 
         className={getButtonClass('Contact')}
        >Contact</button>

             <button 
              type="submit" className="h-7 px-5 hover:bg-indigo-900 
              rounded-sm text-xs bg-slate-950 text-slate-50">Verify</button>

             <button 
              type="submit" className="h-7 px-5 hover:bg-indigo-900
               rounded-sm text-xs bg-slate-950 text-slate-50">Payment</button>
              
              <button 
              type="submit" className="h-7 px-5 hover:bg-indigo-900
               rounded-sm text-xs  bg-slate-950 text-slate-50">Dashboard</button> 

        <button onClick={() => setSelectedRoute('AcademyInfo')}
        type="submit" 
        className={getButtonClass('AcademyInfo')}>AcademyInfo</button>

            
            </div>
          </div>

          <div>

        {selectedRoute === 'articles' && <Articles />}
        {selectedRoute === 'books' && <Books />}
        {selectedRoute === 'goLive' && <GoLive />}
        {selectedRoute === 'Students' && <Students />}
        {selectedRoute === 'Announcement' && <Announcement />}
        {selectedRoute === 'Details' && <Details />}
        {selectedRoute === 'Testimonials' && <Testimonials />}
        {selectedRoute === 'shorts' && <Shorts />}
        {selectedRoute === 'videos' && <Videos />}
        {selectedRoute === 'Home' && <Home />}
        {selectedRoute === 'about' && <About />}
        {selectedRoute === 'Instructors' && <Instructors />}
        {selectedRoute === 'Contact' && <Contact />}
        {selectedRoute === 'Pricing' && <Pricing />}
        {selectedRoute === 'Classes' && <Classes />}
        {selectedRoute === 'BeginnersAcademyHome' && <BeginnersAcademyHome />}
        {selectedRoute === 'IntermediateAcademyHome' && <IntermediateAcademyHome />}
        {selectedRoute === 'AdvanceAcademyHome' && <AdvanceAcademyHome />}
        {selectedRoute === 'Publish' && <Publish />}
        {selectedRoute === 'AcademyInfo' && <AcademyInfo />}

          </div>
          
    </div>
  )
}

export default Main


