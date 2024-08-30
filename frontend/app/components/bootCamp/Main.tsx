'use client'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Menu0 from '@/app/components0/menu0'; 
import Link from 'next/link';
import BeginnersClassHome from './BeginnersClassHome';
import IntermediateClassHome from './IntermediateClassHome';
import Articles from './Articles';
import Testimonial from './testimonial';
import GoLive from './GoLive';
import Instructors from './instructors';
import Contact from './contact';
import Announcement from './announcement';
import Shorts from './Shorts';
import Videos from './Videos';
import Details from './details';
import About from './About';
import Students from './students';
import Home from './Home';
import AdvanceClassHome from './AdvanceClassHome';
import Subscribe from './Subscribe';
import Pricing from './Pricing';
import Publish from './Publish';
import BootCampInfo from './BootCampInfo';


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
        <div className="border-2 border-red-950 bg-lime-500 py-1 w-full  ">
        <div className="flex justify-items-center overflow-x-auto gap-2 px-1 ">

        <button onClick={() => setSelectedRoute('BeginnersClassHome')} 
        type='button' 
        className={getButtonClass0('BeginnersClassHome')}
        >Beginner</button>

        <button onClick={() => setSelectedRoute('IntermediateClassHome')} 
        type='button' 
        className={getButtonClass0('IntermediateClassHome')}
        >Intermediate</button>

        <button onClick={() => setSelectedRoute('AdvanceClassHome')} 
        type='button' 
        className={getButtonClass0('AdvanceClassHome')}
        >advance</button>
     
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
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('BeginnersClassHome')}
               >Beginner</button></p></li>

               <li className="text-sm"><p><button onClick={() => setSelectedRoute('IntermediateClassHome')}
               >Intermediate</button></p></li>

      
               <li className="text-sm"><p><button onClick={() => setSelectedRoute('AdvanceClassHome')}
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
          pl-5  lg:rounded-lg max-lg:rounded-l-full text-xs  max-sm:justify-center  '
           placeholder='search here'   />

            <button  type='button' className='text-sm text-white h-7 sm:w-20 rounded-r-3xl
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
              bg-pink-500 text-xs px-1
             py-1 border  border-red-950  " >

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
        
        <button onClick={() => setSelectedRoute('Subscribe')} 
        type='button' 
        className='hidden'
        >Subscribe</button>
        

        <button onClick={() => setSelectedRoute('videos')} 
        type='button' 
        className={getButtonClass('videos')}
        >videos</button>

        <button onClick={() => setSelectedRoute('shorts')} 
        type='button' 
        className={getButtonClass('shorts')}
        >shorts</button>


         <button onClick={() => setSelectedRoute('articles')} 
         type='button' 
         className={getButtonClass('articles')}
        >articles</button>

        
        <button onClick={() => setSelectedRoute('Students')} 
        type='button' 
        className={getButtonClass('Students')}
        >Students</button>

        <button onClick={() => setSelectedRoute('Instructors')} 
        type='button' 
        className={getButtonClass('Instructors')}
        >Instructors</button>

        <button onClick={() => setSelectedRoute('Testimonial')} 
        type='button' 
        className={getButtonClass('Testimonial')}
        >Testimonial</button>

         <button onClick={() => setSelectedRoute('Announcement')} 
         type='button' 
         className={getButtonClass('Announcement')}
        >announcement</button>

         <button onClick={() => setSelectedRoute('Contact')} 
         type='button' 
         className={getButtonClass('Contact')}
        >Contact</button>
      
        <button  type="submit" className="h-7 px-5 hover:bg-indigo-900 
        rounded-sm text-xs bg-slate-950 text-slate-50">Verify</button>

       <button  type="submit" className="h-7 px-5 hover:bg-indigo-900
        rounded-sm text-xs bg-slate-950 text-slate-50">Payment</button>
              
       <button type="submit" className="h-7 px-5 hover:bg-indigo-900
       rounded-sm text-xs  bg-slate-950 text-slate-50">Dashboard</button> 

       <button onClick={() => setSelectedRoute('BootCampInfo')} 
       type="submit" 
       className={getButtonClass('BootCampInfo')}>BootCampInfo</button> 

            
            </div>
          </div>

          <div>

         
        {selectedRoute === 'BeginnersClassHome' && <BeginnersClassHome />}
        {selectedRoute === 'IntermediateClassHome' && <IntermediateClassHome />}
        {selectedRoute === 'AdvanceClassHome' && <AdvanceClassHome />}
        {selectedRoute === 'articles' && <Articles />}
        {selectedRoute === 'Testimonial' && <Testimonial />}
        {selectedRoute === 'goLive' && <GoLive />}
        {selectedRoute === 'Instructors' && <Instructors />}
        {selectedRoute === 'Contact' && <Contact />}
        {selectedRoute === 'Announcement' && <Announcement />}
        {selectedRoute === 'shorts' && <Shorts />}
        {selectedRoute === 'videos' && <Videos />}
        {selectedRoute === 'Details' && <Details />}
        {selectedRoute === 'Home' && <Home />}      
        {selectedRoute === 'about' && <About />}
        {selectedRoute === 'Students' && <Students />}
        {selectedRoute === 'Pricing' && <Pricing />}
        {selectedRoute === 'Subscribe' && <Subscribe />}
        {selectedRoute === 'Publish' && <Publish />}
        {selectedRoute === 'BootCampInfo' && <BootCampInfo />}

          </div>
          
    </div>
  )
}

export default Main


