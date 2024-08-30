import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { FiMenu, FiX } from 'react-icons/fi'; 
import { useState } from "react";
import BootCampHomeText from '../bootCampText/bootCampHomeText';
import { FaEdit } from "react-icons/fa";
import BootCampHomeText1 from '../bootCampText/bootCampHomeText1';
import BootCampHomeText2 from '../bootCampText/bootCampHomeText2';
import BootCampHomeText3 from '../bootCampText/bootCampHomeText3';
import BootCampHomeText4 from '../bootCampText/bootCampHomeText4';
import BootCampHomeText5 from '../bootCampText/bootCampHomeText5';
import BootCampHomeText6 from '../bootCampText/bootCampHomeText6';
import BootCampHomeText7 from '../bootCampText/bootCampHomeText7';
import BootCampHomeText8 from '../bootCampText/bootCampHomeText8';
import BootCampHomeText9 from '../bootCampText/bootCampHomeText9';
import BootCampHomeText10 from '../bootCampText/bootCampHomeText10';
import BootCampHomeText11 from '../bootCampText/bootCampHomeText11';

const Home1 = () => {

  const [MenuVisible, setMenuVisible] = useState(false);
  const [MenuVisible1, setMenuVisible1] = useState(false);
  const [MenuVisible2, setMenuVisible2] = useState(false);
  const [MenuVisible3, setMenuVisible3] = useState(false);
  const [MenuVisible4, setMenuVisible4] = useState(false);
  const [MenuVisible5, setMenuVisible5] = useState(false);
  const [MenuVisible6, setMenuVisible6] = useState(false);
  const [MenuVisible7, setMenuVisible7] = useState(false);
  const [MenuVisible8, setMenuVisible8] = useState(false);
  const [MenuVisible9, setMenuVisible9] = useState(false);
  const [MenuVisible10, setMenuVisible10] = useState(false);
  const [MenuVisible11, setMenuVisible11] = useState(false);
  const [MenuVisible12, setMenuVisible12] = useState(false);

  const handleMenuClick = ()=>{  setMenuVisible(!MenuVisible); };
  const  closeMenu = ()=> { setMenuVisible(false);   };
      
  const handleMenuClick1 = ()=>{ setMenuVisible1(!MenuVisible1);};     
  const  closeMenu1 = ()=> { setMenuVisible1(false);   };

  const handleMenuClick2 = ()=>{  setMenuVisible2(!MenuVisible2); };     
  const  closeMenu2 = ()=> { setMenuVisible2(false);  };

  const handleMenuClick3 = ()=>{setMenuVisible3(!MenuVisible3);};                   
  const  closeMenu3 = ()=> { setMenuVisible3(false);  };

  const handleMenuClick4 = ()=>{ setMenuVisible4(!MenuVisible4);};             
  const  closeMenu4 = ()=> { setMenuVisible4(false);  };
                  
  const handleMenuClick5 = ()=>{ setMenuVisible5(!MenuVisible5); };                       
  const  closeMenu5 = ()=> {setMenuVisible5(false); };

  const handleMenuClick6 = ()=>{ setMenuVisible6(!MenuVisible6); };                       
  const  closeMenu6 = ()=> {setMenuVisible6(false); };

  const handleMenuClick7 = ()=>{ setMenuVisible7(!MenuVisible7); };                       
  const  closeMenu7 = ()=> {setMenuVisible7(false); };

  const handleMenuClick8 = ()=>{ setMenuVisible8(!MenuVisible8); };                       
  const  closeMenu8 = ()=> {setMenuVisible8(false); };

  const handleMenuClick9 = ()=>{ setMenuVisible9(!MenuVisible9); };                       
  const  closeMenu9 = ()=> {setMenuVisible9(false); };

  const handleMenuClick10 = ()=>{ setMenuVisible10(!MenuVisible10); };                       
  const  closeMenu10 = ()=> {setMenuVisible10(false); };

  const handleMenuClick11 = ()=>{ setMenuVisible11(!MenuVisible11); };                       
  const  closeMenu11 = ()=> {setMenuVisible11(false); };

  const handleMenuClick12 = ()=>{ setMenuVisible12(!MenuVisible12); };                       
  const  closeMenu12 = ()=> {setMenuVisible12(false); };

  return (
    <div>
       <div className="bg-[url('/class4.jpg')] bg-cover bg-center min-h-screen w-full">
         <div className=' h-auto overflow-y-auto  '>

         <h1 className=' bg-gradient-to-b from-pink-600 to-lime-500 
         w-96 max-sm:w-80 max-sm:ml-5 mt-10  h-auto rounded-xl ml-10  '>
          

          <h1 className='m-5 sm:p-5 max-sm:py-3 w-auto text-sm text-black 
           font-bold'>

             <div className='flex flex-row'>

            <div className="text-slate-900 mr-1 text-2xl "> 
            <button  onClick={handleMenuClick}>    {MenuVisible ? (  <FiX />  ) : (
            <FaEdit />  )}  </button>  
            {MenuVisible &&   (<BootCampHomeText /> )  }  </div>

            <p className='text-lg text-black'>"Hello Student, </p>
            </div>

             Welcome to our educational community! We're excited to have you here. 
             Our bootCamp offers a wide range of courses designed to ignite your passion
              for learning and help you achieve your goals. Every lesson you take and 
              every interaction you engage in brings you one step closer to shaping your 
              future. Dive into our courses, connect with fellow learners, and let's 
              inspire and empower each other on this incredible journey of knowledge 
              and growth.
          </h1> </h1>

          <div className='flex justify-between flex-wrap gap-10 p-5 mt-60'>

          <button className='bg-gradient-to-b from-cyan-600
           to-lime-500 w-60 h-12 rounded-full ml-10 '>
           visit  our beginner class
          </button>

          <button className='bg-gradient-to-b from-pink-600
           to-lime-500 w-72 h-12 rounded-full ml-10 '>
           visit  our intermediate class
          </button>

          <button className='bg-gradient-to-b from-orange-600 
           to-lime-500 w-60 h-12 rounded-full ml-10 '>
           visit  our advance class
          </button></div>

       </div>
    </div>

    <div className='w-full h-auto  bg-gradient-to-b from-green-800  to-slate-900 '>
    <div> 
       
         <div className='p-5'> <button className='bg-gradient-to-b from-orange-600
           to-green-500 w-full text-2xl  h-12 rounded-full '>  About The Instructors
          </button></div>

          <div className='grid xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 p-5 '>
          <div className='bg-gradient-to-b from-orange-500 to-green-300
           w-full p-5 min-h-96 rounded-xl max-sm:w-full '>

             <div className='flex flex-row'>
             <div className="text-slate-900 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick1}>    {MenuVisible1 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible1 &&   (<BootCampHomeText1 /> )  }  </div>

            <p className='text-2xl text-black'>Who is the Instructor? </p>
             </div>
           Hello and welcome,future scholars! Welcome to a place where learning knows no
             bounds. Here, you are encouraged to think big, aim high, and work hard.
             Together, we will overcome challenges and celebrate achievements. Let us 
             make every moment count.
            
            
          </div>

          <div className='bg-gradient-to-b from-lime-500 to-green-300
           w-full p-5 min-h-96 rounded-xl  max-sm:w-full'>
                        
             <div className='flex flex-row'>
             <div className="text-slate-900 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick2}>    {MenuVisible2 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible2 &&   (<BootCampHomeText2 /> )  }  </div>

            <p className='text-2xl text-black'>Proven  Experience </p>
             </div>

            Hello and welcome,future scholars! Welcome to a place where learning knows no
             bounds. Here, you are encouraged to think big, aim high, and work hard.
             Together, we will overcome challenges and celebrate achievements. Let us 
             make every moment count.
             
            
          </div>

          <div className='bg-gradient-to-b from-pink-500 to-green-300 w-full
           min-h-96 p-5 rounded-xl max-sm:w-full'>
                        
             <div className='flex flex-row'>
             <div className="text-slate-900 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick3}>    {MenuVisible3 ? ( 
             <FiX />   ) : ( <FaEdit />  )}  </button>  

             {MenuVisible3 &&   (<BootCampHomeText3 /> )  }  </div>

            <p className='text-2xl text-black'>Real World Achievement </p>
             </div>

            Hello and welcome,future scholars! Welcome to a place where learning knows no
             bounds. Here, you are encouraged to think big, aim high, and work hard.
             Together, we will overcome challenges and celebrate achievements. Let us 
             make every moment count.
            
             
          </div>
          </div>
    
    </div>
    </div>


   
    <div className='w-full h-auto  bg-gradient-to-b from-cyan-600  to-blue-950 '>
    <div>  
        
         <div className='p-5'> <button className='bg-gradient-to-b from-orange-950
           to-green-950 w-full text-white text-xl  h-12 rounded-lg '>
              here is our story
          </button></div>

          <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5 p-5 '>
          <h1 className='bg-gradient-to-b from-red-950 to-pink-950
            text-black font-normal p-2
           w-full 5 min-h-screen rounded-xl max-sm:w-full '>
            
            <h1 className='bg-white rounded-t-2xl rounded-b-xl h-full p-5'>
                        
            <div className='flex flex-row'>
             <div className="text-slate-900 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick4}>    {MenuVisible4 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible4 &&   (<BootCampHomeText4 /> )  }  </div>

            <p className='text-2xl text-black'>Read more about our story </p>
             </div>            

            <p>
           Hello and welcome,future scholars! Welcome to a place where learning knows no
             bounds. Here, you are encouraged to think big, aim high, and work hard.
             Together, we will overcome challenges and celebrate achievements. Let us 
             make every moment count.
            </p>
             </h1>
          </h1>

          <button className='rounded-xl '>
          <Image
          className='w-full h-screen max-sm:h-96 rounded-xl'
           src='/class7.jpg' 
           alt='class Instructors' 
          width={500}
          height={500}/>
           
          </button>
         
          </div>
    
    </div>
    </div>



    <div className='w-full h-auto text-sm  bg-gradient-to-b from-sky-100  to-cyan-100 '>
    <div> 
        
         <div className='p-5'> <button className='bg-gradient-to-b from-orange-950
           to-green-950 w-full text-white text-xl  h-12 rounded-lg '>  what you will learn in this class
          </button></div>

          <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5 p-5 '>

          <div className='bg-gradient-to-b from-orange-950 to-lime-950 hover:bg-black text-white font-normal
           w-full p-5 min-h-96 rounded-xl max-sm:w-full '>
                        
            <div className='flex flex-row'>
             <div className="text-slate-100 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick5}>    {MenuVisible5 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible5 &&   (<BootCampHomeText5 /> )  }  </div>

            <p className='text-lg text-white'>what will the students learn  in this bootCamp? </p>
             </div>

           Hello and welcome,future scholars! Welcome to a place where learning knows no
             bounds. Here, you are encouraged to think big, aim high, and work hard.
             Together, we will overcome challenges and celebrate achievements. Let us 
             make every moment count.
            
           
          </div>

          <div className='bg-gradient-to-b from-yellow-950 to-cyan-950 hover:bg-black font-normal text-white
           w-full p-5 min-h-96 rounded-xl  max-sm:w-full'>
                        
            <div className='flex flex-row'>
             <div className="text-slate-100 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick6}>    {MenuVisible6 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible6 &&   (<BootCampHomeText6 /> )  }  </div>

            <p className='text-lg text-white'>what they will learn in the beginners class? </p>
             </div>

            Hello and welcome,future scholars! Welcome to a place where learning knows no
             bounds. Here, you are encouraged to think big, aim high, and work hard.
             Together, we will overcome challenges and celebrate achievements. Let us 
             make every moment count.
            
            
          </div>

          <div className=' bg-gradient-to-b from-slate-950 to-blue-950 w-full  hover:bg-black font-normal text-white
           min-h-96 p-5 rounded-xl  max-sm:w-full'>
            
                         
            <div className='flex flex-row'>
             <div className="text-slate-100 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick7}>    {MenuVisible7 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible7 &&   (<BootCampHomeText7 /> )  }  </div>

            <p className='text-lg text-white'>what they will learn in the advance class?</p>
             </div>

            Hello and welcome,future scholars! Welcome to a place where learning knows no
             bounds. Here, you are encouraged to think big, aim high, and work hard.
             Together, we will overcome challenges and celebrate achievements. Let us 
             make every moment count.
            
             
          </div>

          <div className='
          bg-gradient-to-b from-red-950 to-green-950 w-full   font-normal text-white
           min-h-96 p-5 rounded-xl  max-sm:w-full'>
                         
            <div className='flex flex-row'>
             <div className="text-slate-100 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick8}>    {MenuVisible8 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible8 &&   (<BootCampHomeText8 /> )  }  </div>

            <p className='text-lg text-white'>what they will learn in the advance class? </p>
             </div>

             Hello and welcome,future scholars! Welcome to a place where learning knows no
             bounds. Here, you are encouraged to think big, aim high, and work hard.
             Together, we will overcome challenges and celebrate achievements. Let us 
             make every moment count.
             
          </div>
          
          </div>
    
    </div>
    </div>


    <div className='w-full h-auto  bg-gradient-to-b from-slate-800  to-slate-950 '>
    <div> 

          <div className='grid xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 p-5 '>
        
      
          <div className='flex justify-center bg-gradient-to-b from-slate-950 to-black gap-4
           w-full p-5 min-h-40 rounded-xl max-sm:w-full text-blue-600 font-normal'>

             <div className=' flex flex-col gap-1  flex-wrap'>
             <div className='flex flex-row'>
             <div className="text-slate-100 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick9}>    {MenuVisible9 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible9 &&   (<BootCampHomeText9 /> )  }  </div>

            <p className='text-lg text-white'>Follow us on social media</p>
             </div>

            
             <span className='flex justify-center text-sm mt-1 '>Follow us on facebook</span>
             <span className='flex justify-center text-sm mt-1 '>Follow us on youtube</span>
             <span className='flex justify-center text-sm mt-1 '>Follow us on linkedIn</span>
             </div>
          </div>

          <div className='flex justify-center bg-gradient-to-b from-slate-950 to-black
           w-full p-5 min-h-40 rounded-xl max-sm:w-full text-blue-600 font-normal'>
          <div className='flex flex-col'>
            
            <p className='flex justify-center text-lg text-white'>Visit our classes</p>

             <p className='flex justify-center text-sm mt-2'>visit our beginner class</p>
             <p className='flex justify-center text-sm mt-2'>visit our intermediate class</p>
             <p className='flex justify-center text-sm mt-2'>visit our advance class</p>
            </div>
          </div>

          <div className='flex justify-center bg-gradient-to-b from-slate-950 to-black gap-4
           w-full p-5 min-h-40 rounded-xl max-sm:w-full text-blue-600 font-normal'>

             <div className=' flex flex-col gap-1  flex-wrap'>
             <div className='flex flex-row'>
             <div className="text-slate-100 mr-1 text-2xl "> 
             <button  onClick={handleMenuClick10}>    {MenuVisible10 ? (  <FiX />  ) : (
             <FaEdit />  )}  </button>  
             {MenuVisible10 &&   (<BootCampHomeText10 /> )  }  </div>

            <p className='text-lg text-white'>Contact Us</p>
             </div>

           
             <span className='flex justify-center text-sm mt-1 '>Example@gmail.com</span>
             <span className='flex justify-center text-sm mt-1 '>+1XXXXXXXXXX</span>
             <span className='flex justify-center text-sm mt-1 '>Contact us on Infobeatlive</span>
             </div>
          </div>


          </div>
    
    </div>
    </div>



    </div>
  )
}

export default Home1