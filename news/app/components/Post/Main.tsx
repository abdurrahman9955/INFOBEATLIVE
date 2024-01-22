'use client'
import Link from "next/link"
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import {  FiX } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import Videos from "./Videos";
import Shorts from "./Shorts";
import Banner from "./Banner";
import Photos from "./Photos";
import Articles from "./Articles";




const Main = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Videos'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);
  const [MenuVisible, setMenuVisible] = useState(false);
  

  

  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

 };      const  closeMenu = ()=> {
       setMenuVisible(false);  
      };


  return (
    <div className="pt-24 w-full ">
      
        <div>
            <div className="flex justify-between gap-4 overflow-x-auto overscroll-auto
             bg-cyan-400 text-xl
             py-3 border-4 border-purple-950  " >
              
             
              
              <button onClick={() => setSelectedRoute('Videos')} 
              type='button' className='text-xl text-white h-10 w-32 rounded-xl bg-gray-900 
                mt-2 ml-5  pl-5 pr-5  hover:bg-orange-700 max-lg:hidden'>Videos</button>

              <button onClick={() => setSelectedRoute('Shorts')} 
              type='button' className='text-xl text-white h-10 w-32 rounded-xl bg-gray-900 
                mt-2   pl-5 pr-5  hover:bg-orange-700 max-lg:hidden'>Shorts</button>

              <button onClick={() => setSelectedRoute('Articles')} 
              type='button' className='text-xl text-white h-10 w-32 rounded-xl bg-gray-900 
                mt-2   pl-5 pr-5  hover:bg-orange-700 max-lg:hidden'>Articles</button>



         <div className="text-black py-2 px-5 ml-1 text-2xl lg:hidden
         mt-2 font-bold "> 
            <button 
             onClick={handleMenuClick}> 
               {MenuVisible ? (
             <FiX />  ) : (
             <FaEllipsisV  />  )}
             
              </button>
              <div onClick={closeMenu}>
            {MenuVisible && 
            
               (
                <nav className="fixed top-40 left-0 px-5  shadow-md z-10 bg-slate-900 
                border-4 border-slate-300  overflow-y-auto text-white">
                    <div className="flex flex-row " >
                <ul className="flex flex-col p-2 gap-5 " >
               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Videos')}
               >Videos</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Shorts')}
               >Short</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Articles')}
               >Articles</button></p></li>

               <li className="text-xl"><p><button onClick={() => setSelectedRoute('Photos')}
               >Photos</button></p></li>

              <li className="text-xl"><p><button onClick={() => setSelectedRoute('Banner')}
               >Banner</button></p></li>

               <Link href={{pathname:'/Posting'}}>
               <li className="text-xl"><p><button 
               >Posting</button></p></li></Link>
              
               </ul>
               
               </div>
       
       </nav>)
               
               }
               </div>
            </div>
             
             <div className="flex flex-row gap-0 w-full">
            <input type='text' className=' w-full h-10 border-2 border-slate-950 mt-3
          pl-5  lg:rounded-full max-lg:rounded-l-full text-xl  max-sm:justify-center  '
           placeholder='search here'   />

            <button  type='button' className='text-xl text-white h-10 sm:w-20 rounded-r-3xl
            bg-gray-900 w-16
            mt-3 mr-5  pl-4      hover:bg-orange-700 lg:hidden
          '><FaSearch /></button></div>

              <button onClick={() => setSelectedRoute('Photos')} 
              type='button' className='text-xl text-white h-10 w-32 rounded-xl bg-gray-900 
                mt-2   pl-5 pr-5  hover:bg-orange-700 max-lg:hidden'>Photos</button>


              <button onClick={() => setSelectedRoute('Banner')} 
              type='button' className='text-xl text-white h-10 w-32 rounded-xl bg-gray-900 
                mt-2   pl-5 pr-5  hover:bg-orange-700 max-lg:hidden'>Banner</button>

             <Link href={{pathname:'/Posting'}}>
              <button  type='button' className='text-xl text-white h-10 w-32 rounded-xl
               bg-gray-900  mt-2 mr-5  pl-5 pr-5 hover:bg-orange-700 max-lg:hidden
              '>Posting</button></Link>

             
             
               
             
            </div>
          </div>

          <div>

         
          {selectedRoute === 'Videos' && <Videos />}
           {selectedRoute === 'Articles' && <Articles />}
           {selectedRoute === 'Shorts' && <Shorts />}

           {selectedRoute === 'Photos' && <Photos />}
           {selectedRoute === 'Banner' && <Banner />}
      
        

          </div>
          
    </div>
  )
}

export default Main


