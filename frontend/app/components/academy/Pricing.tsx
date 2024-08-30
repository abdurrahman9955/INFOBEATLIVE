import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { FiMenu, FiX } from 'react-icons/fi'; 
import { useState } from "react";

import AcademyHomeText11 from './academyText/academyHomeText11';
import AcademyHomeText12 from './academyText/academyHomeText12';
import AcademyHomeText13 from './academyText/academyHomeText13';
import AcademyHomeText14 from './academyText/academyHomeText14';
import AcademyHomeText15 from './academyText/academyHomeText15';

import { FaEdit } from "react-icons/fa";

const Pricing = () => {

  const [MenuVisible12, setMenuVisible12] = useState(false);
  const [MenuVisible13, setMenuVisible13] = useState(false);
  const [MenuVisible14, setMenuVisible14] = useState(false);
  const [MenuVisible15, setMenuVisible15] = useState(false);
  const [MenuVisible11, setMenuVisible11] = useState(false);
 
  const handleMenuClick12 = ()=>{  setMenuVisible12(!MenuVisible12); };
  const  closeMenu12 = ()=> { setMenuVisible12(false);   };
      
  const handleMenuClick13 = ()=>{ setMenuVisible13(!MenuVisible13);};     
  const  closeMenu13 = ()=> { setMenuVisible13(false);   };

  const handleMenuClick14 = ()=>{  setMenuVisible14(!MenuVisible14); };     
  const  closeMenu14 = ()=> { setMenuVisible14(false);  };

  const handleMenuClick15 = ()=>{setMenuVisible15(!MenuVisible15);};                   
  const  closeMenu15 = ()=> { setMenuVisible15(false);  };

  const handleMenuClick11 = ()=>{ setMenuVisible11(!MenuVisible11); };                       
  const  closeMenu11 = ()=> {setMenuVisible11(false); };

  return (
   
    <div className='flex justify-center  font-bold 
     bg-lime-500 border-2 border-black'>
     
        <div className='flex flex-col w-full  bg-white   border-2 m-1
       border-black -600 h-auto  font-bold'>
 
          <div className='   w-full  h-auto'>
           <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs
            font-bold  pb-1 bg-lime-500'> 
 
           <button type='button' className='text-white 
             w-auto pl-3 pr-3 h-7  mt-1 bg-orange-950
           rounded-sm hover:bg-slate-900'>Pricing1 </button>
 
           <button type='button' className='text-white 
             w-auto pl-3 pr-3 h-7  mt-1 bg-orange-950
           rounded-sm  hover:bg-slate-900'>Pricing2 </button>
 
           <button type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-orange-950
           rounded-sm hover:bg-slate-900'>Pricing3 </button>
            
           </h1>
        
          <div className='h-auto overflow-y-auto   '>
          <div className="bg-[url('/class12.webp')] bg-cover bg-center min-h-screen w-full">
            <div>
              
              <h1 className='p-3 text-slate-950 text-sm  lg:w -3/6  bg-gradient-to-b
               from-orange-600 to-lime-500 border-b-2 border-black'>
                
                <div className='flex flex-row'>
                <div className="text-slate-900 mr-1 text-2xl "> 
                <button  onClick={handleMenuClick11}>    {MenuVisible11 ? (  <FiX />  ) : (
                <FaEdit />  )}  </button>  
                {MenuVisible11 &&   (<AcademyHomeText11 /> )  }  </div>

               <p className='text-lg text-black'>"Hello Student,</p>
               </div>

                Thank you for considering joining our educational community. Our pricing 
                plans are designed to provide you with the best value and access to
                 high-quality learning experiences. Every lesson you attend and every 
                 interaction you engage in can ignite your passion for learning and shape 
                 your future. Choose the plan that suits you best and start your journey 
                 today. Your investment in education is an investment in yourself. Let's 
                 inspire and empower each other on this learning journey!
              </h1>
            </div>

            <div className='flex justify-between flex-wrap gap-10 p-5 mt-96'>

               <button className='bg-gradient-to-b from-lime-600 to-yellow-500 w-60 h-12 
               rounded-full ml-10 '>visit  our beginner class</button>

                <button className='bg-gradient-to-b from-pink-600  to-yellow-500 w-72 
                h-12 rounded-full ml-10 '> visit  our intermediate class</button>

                <button className='bg-gradient-to-b from-blue-600  to-yellow-500 
                w-60 h-12 rounded-full ml-10 '>visit  our advance class</button></div>

            </div>

        

        

            <div className="bg-[url('/class11.avif')] bg-cover bg-center h-auto w-full">

            <div> 
        
         <div className='p-5'> <button className='bg-gradient-to-b from-pink-950
           to-green-950 w-full text-white text-lg  h-12 rounded-lg '>
               See All Pricing System Below
          </button></div>

          <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5 p-5 '>
          <h1 className='bg-gradient-to-b from-orange-950 to-lime-950
           hover:bg-black text-white font-normal
           w-full p-5 min-h-96  rounded-xl max-sm:w-full '>

             <div className='flex flex-row'>
             <div className="text-slate-100 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick12}>    {MenuVisible12 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible12 &&   (<AcademyHomeText12 /> )  }  </div>

            <p className='text-lg text-white'>Pricing  for all bootCamp</p>
             </div>

            <p className='text-sm mt-3'>when to finish this bootCap: </p>
             <p className='text-sm mt-3'>what you will learn1</p>
             <p className='text-sm mt-3'>what you will learn2</p>
             <p className='text-sm mt-3'>what you will learn3</p>
             <p className='text-sm mt-3'>what you will learn4</p>
             <p className='text-sm mt-3'>what you will learn5</p>
             <p className='text-sm mt-3'>what you will learn6</p>
             <p className='text-sm mt-3'>Price for one time pay</p>
             <p className='text-sm mt-3'>Price for life time pay</p>

             <p>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '>Subscribe for one time plan</button>
             </p>

             <p>
            <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '>Subscribe for life time plan</button>
             </p>


          </h1>

          <h1 className='bg-gradient-to-b from-yellow-950 to-cyan-950
           font-normal text-white
           w-full p-5 min-h-96 rounded-xl  max-sm:w-full'>

             <div className='flex flex-row'>
             <div className="text-slate-100 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick13}>    {MenuVisible13 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible13 &&   (<AcademyHomeText13 /> )  }  </div>

            <p className='text-lg text-white'>Pricing  for beginners class</p>
             </div>

            <p className='text-sm mt-3'>Months to finish the class: </p>
             <p className='text-sm mt-3'>what you will learn1</p>
             <p className='text-sm mt-3'>what you will learn2</p>
             <p className='text-sm mt-3'>what you will learn3</p>
             <p className='text-sm mt-3'>what you will learn4</p>
             <p className='text-sm mt-3'>what you will learn5</p>
             <p className='text-sm mt-3'>what you will learn6</p>
             <p className='text-sm mt-3'>Price for one 1 months</p>
             <p className='text-sm mt-3'>Price for one time pay</p>
          
            <p><button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '>Subscribe for monthly plan</button> </p>
             
             <p><button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '>Subscribe for one time plan</button> </p>
           
          </h1>

          <h1 className=' bg-gradient-to-b from-yellow-950 to-slate-950 w-full  hover:bg-black font-normal text-white
           min-h-96 p-5 rounded-xl  max-sm:w-full'>

            <div className='flex flex-row'>
             <div className="text-slate-100 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick14}>    {MenuVisible14 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible14 &&   (<AcademyHomeText14 /> )  }  </div>

            <p className='text-lg text-white'>Pricing  for  Intermediate Class</p>
             </div>

            <p className='text-sm mt-3'>Months to finish the class: </p>
             <p className='text-sm mt-3'>what you will learn1</p>
             <p className='text-sm mt-3'>what you will learn2</p>
             <p className='text-sm mt-3'>what you will learn3</p>
             <p className='text-sm mt-3'>what you will learn4</p>
             <p className='text-sm mt-3'>what you will learn5</p>
             <p className='text-sm mt-3'>what you will learn6</p>
             <p className='text-sm mt-3'>Price for one 1 months</p>
             <p className='text-sm mt-3'>Price for one time pay</p>
            
            <p><button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '>Subscribe for monthly plan</button> </p>

             <p><button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '>Subscribe for one time plan</button> </p>
 
          </h1>

          <h1 className='
          bg-gradient-to-b from-red-950 to-green-950 w-full   font-normal text-white
           min-h-96 p-5 rounded-xl  max-sm:w-full'>

            <div className='flex flex-row'>
             <div className="text-slate-100 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick15}>    {MenuVisible15 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible15 &&   (<AcademyHomeText15 /> )  }  </div>

            <p className='text-lg text-white'>Pricing  for  Advance Class</p>
             </div>

             <p className='text-sm mt-3'>Months to finish the class: </p>
             <p className='text-sm mt-3'>what you will learn1</p>
             <p className='text-sm mt-3'>what you will learn2</p>
             <p className='text-sm mt-3'>what you will learn3</p>
             <p className='text-sm mt-3'>what you will learn4</p>
             <p className='text-sm mt-3'>what you will learn5</p>
             <p className='text-sm mt-3'>what you will learn6</p>
             <p className='text-sm mt-3'>Price for one 1 months</p>
             <p className='text-sm mt-3'>Price for one time pay</p>
         
            <p> <button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '>Subscribe for monthly plan</button> </p> 

             <p><button className='bg-gradient-to-b from-blue-900  to-yellow-900 
             w-60 h-10 rounded-xl my-3 '>Subscribe for one time plan</button> </p>

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

export default Pricing