import React from 'react'
import Link from "next/link"
import { FiMenu, FiX } from 'react-icons/fi'; 
import { useState } from "react";
import AcademyDetails from './academyText/academyDetails';
import { FaEdit } from "react-icons/fa";

const Details = () => {

  const [MenuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = ()=>{
     setMenuVisible(!MenuVisible);

  };      const  closeMenu = ()=> {
        setMenuVisible(false);  
       };

  return (
   
   <div className='flex justify-center  font-bold 
    bg-lime-500 border-2 border-black'>
     
       <div className='flex flex-col w-full  bg-white   border-2 m-1
      border-black -600 h-auto  font-bold'>

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs
           font-bold  pb-1 bg-lime-500'> 

          <button type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm hover:bg-slate-900'>Pricing1 </button>

          <button type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm  hover:bg-slate-900'>Pricing2 </button>

          <button type='button' className='text-white 
           w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm hover:bg-slate-900'>Pricing3 </button>
           
          </h1>
         
          <div className='h-auto overflow-y-auto   '>
          <div className="bg-[url('/class21.jpg')] bg-cover bg-center min-h-screen w-full">
            <div className='sm:p-10 p-2'>
              
              <h1 className='bg-gradient-to-b from-orange-500 to-lime-500 p-5
               text-slate-950 text-sm  rounded-xl sm:w-96 w-80 '>
                  <div className='flex flex-row'>

                  <div className="text-slate-900 mr-1 text-2xl "> 
                  <button  onClick={handleMenuClick}>    {MenuVisible ? (  <FiX />  ) : (
                  <FaEdit />  )}  </button>  
                  {MenuVisible &&   (<AcademyDetails /> )  }  </div>

                  <p className='text-lg text-green-950'>"Hello Student, </p>
                  </div>

                Thank you for choosing to be a part of our educational community. 
                Remember, every lesson you attend and every interaction you engage 
                in has the power to ignite your passion for learning and shape your
                 future. Keep pushing your boundaries, fostering your curiosity, 
                 and making a difference in your own life. Your hard work and 
                 dedication do not go unnoticed. Let's continue to inspire and 
                 empower each other on this learning journey!
              </h1> 

            </div>

            <div className='flex justify-between flex-wrap gap-10 p-5 mt-32'>

               <button className='bg-gradient-to-b from-lime-600 to-yellow-500 w-60 h-12 
               rounded-full ml-10 '>visit  our beginner class</button>

                <button className='bg-gradient-to-b from-pink-600  to-yellow-500 w-72 
                h-12 rounded-full ml-10 '> visit  our intermediate class</button>

                <button className='bg-gradient-to-b from-blue-600  to-yellow-500 
                w-60 h-12 rounded-full ml-10 '>visit  our advance class</button></div>

            </div>

        

            <div className='w-full h-auto  bg-gradient-to-b from-pink-400  to-orange-500 '>
            <div> 
        
         <div className='p-5'> <button className='bg-gradient-to-b from-pink-950
           to-green-950 w-full text-white text-lg  h-12 rounded-lg '>
               more details about this bootCamp
          </button></div>

          <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5 p-5 '>
          <h1 className='bg-gradient-to-b from-orange-950 to-lime-950
           hover:bg-black text-white font-normal
           w-full p-5 min-h-96  rounded-xl max-sm:w-full '>
            <p className='text-lg '>Here is the details about this bootCamp</p>
            <p className='text-sm mt-3'>Date of creation</p>
            <p className='text-sm mt-3'>Number of instructors</p>
            <p className='text-sm mt-3'>Total number of students</p>
            <p className='text-sm mt-3'>total  lectures</p>
            <p className='text-sm mt-3'>Verification status</p>
            <p className='text-sm mt-3'>Graduate students</p>
            <p className='text-sm mt-3'>Rating grade</p>
            <p className='text-sm mt-3'>language of this bootCamp</p>
            <p className='text-sm mt-3'>Country</p>

            <p>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '> visit  our privacy policy</button>
             </p>
          </h1>

          <h1 className='bg-gradient-to-b from-yellow-950 to-cyan-950
           font-normal text-white
           w-full p-5 min-h-96 rounded-xl  max-sm:w-full'>
           <p className='text-lg '> Details About Beginners Class</p>
            <p className='text-sm mt-3'>Date of creation</p>
            <p className='text-sm mt-3'>Number of instructors</p>
            <p className='text-sm mt-3'>Total number of students</p>
            <p className='text-sm mt-3'>total  lectures</p>
            <p className='text-sm mt-3'>Verification status</p>
            <p className='text-sm mt-3'>Graduate students</p>
            <p className='text-sm mt-3'>Rating grade</p>
            <p className='text-sm mt-3'>language of this class</p>
            <p className='text-sm mt-3'>Country</p>
          
            <p>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '> visit  our beginner class</button>
             </p>
           
          </h1>

          <h1 className=' bg-gradient-to-b from-slate-950 to-blue-950 w-full  hover:bg-black font-normal text-white
           min-h-96 p-5 rounded-xl  max-sm:w-full'>
            <p className='text-lg '>Details About Intermediate Class</p>
            <p className='text-sm mt-3'>Date of creation</p>
            <p className='text-sm mt-3'>Number of instructors</p>
            <p className='text-sm mt-3'>Total number of students</p>
            <p className='text-sm mt-3'>total  lectures</p>
            <p className='text-sm mt-3'>Verification status</p>
            <p className='text-sm mt-3'>Graduate students</p>
            <p className='text-sm mt-3'>Rating grade</p>
            <p className='text-sm mt-3'>language of this class</p>
            <p className='text-sm mt-3'>Country</p>
             
            <p>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '> visit  our intermediate class</button>
             </p>
             
          </h1>

          <h1 className='
          bg-gradient-to-b from-red-950 to-green-950 w-full   font-normal text-white
           min-h-96 p-5 rounded-xl  max-sm:w-full'>
             <p className='text-lg '>Details About Advance Class</p>
            <p className='text-sm mt-3'>Date of creation</p>
            <p className='text-sm mt-3'>Number of instructors</p>
            <p className='text-sm mt-3'>Total number of students</p>
            <p className='text-sm mt-3'>total  lectures</p>
            <p className='text-sm mt-3'>Verification status</p>
            <p className='text-sm mt-3'>Graduate students</p>
            <p className='text-sm mt-3'>Rating grade</p>
            <p className='text-sm mt-3'>language of this Class</p>
            <p className='text-sm mt-3'>Country</p>
           
            <p>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '> visit  our advance class</button>
             </p> 
          </h1>
          </div>
   
         </div>
         </div>
         </div>
         </div>
         </div>
        
    </div>
  )
}

export default Details