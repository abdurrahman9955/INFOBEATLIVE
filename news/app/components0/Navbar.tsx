'use client'
import Link from "next/link"
import { FiMenu, FiX } from 'react-icons/fi'; 
import { useState } from "react";
import Menu from "./Menu";



const Navbar = () => {
  const [MenuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = ()=>{
     setMenuVisible(!MenuVisible);

  };      const  closeMenu = ()=> {
        setMenuVisible(false);  
       };
 
  return (
    <div className=" w-full " >
     
      <div className="bg-slate-900 h-10 border-2 border-red-200  ">
        <div className=" flex justify-normal  ">
          
          
          <div className="text-slate-50  py-1 px-3  ml- text-2xl "> 
            <button 
             onClick={handleMenuClick}> 
               {MenuVisible ? (
             <FiX />  ) : (
             <FiMenu  />  )}
             
              </button>
              <div onClick={closeMenu}>
            {MenuVisible && 
            
               (<Menu /> )
               
               }
               </div>
            </div>

            <Link href={{pathname: '/'}} className="flex-1">
             <h1 className="text-xl text-yellow-500 flex-1  max-sm:text-lg mt-1
              ">INFOBEATLIVE</h1>
              </Link>

            <div className=" mr-2 ">
              <Link href={{pathname: '/Sign_up'}}>
               <button type="button" className="bg-slate-900 h-7 mt-1  px-6
               rounded-lg text-slate-50 text-xs  hover:bg-slate-600 
               border border-slate-300 sm:mr-1 " >sign up</button> </Link>

               <Link href={{pathname: '/Sign_in'}}>
               <button type="button" className="bg-slate-900 h-7 mt-1  px-6
               rounded-lg text-slate-50 text-xs hover:bg-slate-600 
               border border-slate-300 max-sm:hidden " 
                >sign in</button> </Link>
             
      </div> 
     </div>           
    </div>
  </div>
    
  )
}

export default Navbar
