'use client'
import Link from "next/link"
import { useState } from "react"
import Admission from "./Admission"
import Certificate from "./Certificate"
import Contact from "./Contact"
import Feedback from "./Feedback"
import Level1 from "./Level1"
import Level2 from "./Level2"
import Level3 from "./Level3"




const Privacy = () => {
    const [MenuVisible, setMenuVisible] = useState(false);
  const [Members, setMembers] = useState(false);
  const [Connected, setConnected] = useState(false);
  const [Start, setStart] = useState(false);
  const [View, setView  ] = useState(false);
  const [previous, setPrevious  ] = useState(false);
  const [Level, setLevel  ] = useState(false);
      
     
  const handleMenuClick = ()=>{
    setMenuVisible(!MenuVisible);

  };  const handleMembers = ()=>{
    setMembers(!Members);

  };  const handleConnected = ()=>{
    setConnected(!Connected);

  };  const handleStart = ()=>{
    setStart(!Start);

  };  const handleView = ()=>{
    setView(!View);

  };    const handlePrevious = ()=>{
    setPrevious(!previous);

  };    const handleLevel = ()=>{
    setLevel(!Level);

  };  

    return (
      <div className="flex flex-col py-32  bg-pink-500 border-4 border-black">

        <div className='flex justify-center'>
          <h1 className="text-3xl lg:text-5xl max-sm:text-xl 
          text-black mt-5 mb-5 font-bold ">
            Only Instructors Can See This Page </h1>
        </div>
        <div className='flex justify-center'>
            <h1 className='items-center text-xl  border-4 m-3 border-slate-950 h-auto max-w-xl lg:max-w-5xl
           mt-10  font-bold p-3 text-slate-950 '>
            Note: in this page you can customize your class as much as you need 
            you can write your class rules and regulation among others, 
            in this page you can add any note for all who is interesting in your
            class or potential please add more and concise details about your 
            class, you can upload or publish any thing about your class  
             people can see even before they enroll in your class in your
             privacy folder, please write a full  information 
            about your class please, thanks for joining us and your participating 
            hope you will help others in this class.

          </h1>
          </div>
        
     
        
 
        
          <div className='flex justify-center'>
           <input type="text" className='lg:w-2/5 max-lg:w-4/5 max-md:w-full h-16 p-2 mt-5
             border-4 border-slate-950 text-3xl m-2 font-bold
            focus:outline  '
           placeholder='add your title here '  />
        </div>
  
        <div className='flex justify-center'>
           <textarea className='lg:w-2/5 max-lg:w-4/5 max-md:w-full h-96 p-2 mt-5
             border-4 border-slate-950 text-xl m-2 font-bold
            focus:outline  '
           placeholder='please write your all description and information
           about your class here,  you can write delete or edit your note, 
           please provide valuable information about your class
            thanks '  />
        </div>
  
        <div className='flex justify-center'>
           <div className=' lg:w-1/3 mt-5
            max-lg:w-2/4 max-md:w-5/6  font-bold '>
               <button type='button' className='w-full   bg-slate-950 text-white h-10
               rounded-2xl  hover:bg-violet-950 mb-10 '>PUBLISH TO PRIVACY</button>   
       </div>
       </div>

       <div className='flex justify-center'>
           <input type="text" className='lg:w-2/5 max-lg:w-4/5 max-md:w-full h-16 p-2 mt-5
             border-4 border-slate-950 text-3xl m-2 font-bold
            focus:outline  '
           placeholder='add your title here '  />
        </div>
  
        <div className='flex justify-center'>
           <span className='lg:w-2/5 max-lg:w-4/5 max-md:w-full h-96 p-2 mt-5
             border-4 border-slate-950 text-xl m-2 font-bold bg-white
            focus:outline  '
             >you will see what you upload here before to publish</span>
        </div>
  
  
        <div className='flex justify-center'>
           <div className=' lg:w-1/3 mt-5
            max-lg:w-2/4 max-md:w-5/6  font-bold '>
               <button type='button' className='w-full   bg-slate-950 text-white h-10
               rounded-2xl  hover:bg-violet-950 '>UPLOAD VIDEOS/PHOTOS</button>   
       </div>
       </div>

       <div className='flex justify-center'>
           <div className=' lg:w-1/3 mt-5
            max-lg:w-2/4 max-md:w-5/6  font-bold '>
               <button type='button' className='w-full   bg-slate-950 text-white h-10
               rounded-2xl  hover:bg-violet-950 '>PUBLISH TO PRIVACY</button>   
       </div>
       </div>
  
       <div  >
            {Members && (<Certificate />)}
               </div>

               <div  >
            {MenuVisible && (<Admission />)}
               </div>

    
            <div  >
            {View && (<Feedback />)}
               </div>

               <div  >
            {Connected && (<Contact />)}
               </div>

               <div  >
            {Level && (<Level3 />)}
               </div>

               <div  >
            {Start && (<Level2 />)}
               </div>

               <div  >
            {previous && (
              <div>
            <Level1 />
            </div>
            )}
               </div>
        
       <div className='flex justify-center'>
         <div className='flex flex-col lg:w-2/4  max-lg:w-2/4 max-md:w-5/6 mt-10 gap-10 font-bold 
              border-4  border-slate-950 sm:p-10 max-sm:p-5 '>

              
              <button  onClick={handlePrevious}
              type='button' className='w-full   bg-slate-950 text-white h-10
              rounded-2xl  hover:bg-slate-950'>Requesting for Level 1</button>

             
             <button  onClick={handleStart}
              type='button' className='w-full   bg-slate-950 text-white h-10
              rounded-xl  hover:bg-red-950'> Requesting for Level 2 </button>

             <button  onClick={handleLevel}
              type='button' className='w-full   bg-slate-950 text-white h-10
              rounded-xl  hover:bg-red-950'> Requesting for Level 3 </button>

           
             <button  onClick={handleMembers}
             type='button' className='w-full   bg-slate-950 text-white h-10
             rounded-2xl  hover:bg-red-950 '>Certificate request</button>

             <button onClick={handleMenuClick}
             type='button' className='w-full   bg-slate-950 text-white h-10
             rounded-2xl  hover:bg-red-950 '> Admission request</button>

            

             <button  onClick={handleView}
             type='button' className='w-full   bg-slate-950 text-white h-10
             rounded-2xl  hover:bg-red-950 '>Feedbacks and advice</button>

            
            
             <button  onClick={handleConnected}
             type='button' className='w-full   bg-slate-950 text-white h-10
             rounded-2xl  hover:bg-red-950 '>seeking help from users</button>
            

     </div>
     </div>




      </div>
    )
  }
  
  export default Privacy
  