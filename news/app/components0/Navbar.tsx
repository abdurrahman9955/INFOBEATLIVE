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
    <div className="fixed w-full " >
     
      <div className="bg-slate-900 py-5 border-4 border-red-200  ">
        <div className=" flex justify-normal  ">
          
          
          <div className="text-slate-50  py-2 px-3  ml-1 text-2xl "> 
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
             <h1 className="text-3xl text-yellow-500 flex-1  max-sm:text-xl mt-1
              ">INFOBEATLIVE</h1>
              </Link>

            <div className=" mr-2 ">
              <Link href={{pathname: '/Sign_up'}}>
               <button type="button" className="bg-blue-900 py-2  px-6
               rounded-full text-slate-50 mr-2  hover:bg-slate-600 
               border-2 border-slate-300 " >sign up</button> </Link>

               <Link href={{pathname: '/Sign_in'}}>
               <button type="button" className="bg-blue-900 py-2  px-6
               rounded-full text-slate-50 mr-5  hover:bg-slate-600 
               border-2 border-slate-300 max-sm:hidden " 
                >sign in</button> </Link>
             
      </div> 
     </div>
             
              
      </div>
      </div>
    
  )
}

export default Navbar
