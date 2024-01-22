import React from 'react'
import { FaVideo } from 'react-icons/fa';
import { BsMicMuteFill } from 'react-icons/bs';
import { FcEndCall} from 'react-icons/fc';
import { FaVolumeUp } from 'react-icons/fa';

const GoLive = () => {
  return (
   
   <div className='flex justify-center  font-bold 
    bg-amber-400 border-4 border-black'>
     
       <div className='flex flex-col w-full
        bg-white mt-5  border-4 m-2
      border-black -600 h-auto  font-bold'>


     

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          bg-amber-400'> 

          <div>
            <button className='text-xl text-slate-950 w-20 h-10
            ml-10 mt-2 rounded-xl'><FaVideo  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-xl text-slate-950 w-20 h-10 
             mt-2 rounded-xl'><BsMicMuteFill  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-xl text-slate-950 w-20 h-10
            mt-2    rounded-xl'><FaVolumeUp  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-xl text-slate-950 w-20 h-10 
            mt-2  rounded-xl'><FcEndCall  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>


         
            
          </h1>
          <h1 className='flex justify-center text-xl font-bold '>now there (0) participant</h1>
          <div className='h-screen overflow-y-auto  m-2 p-2 border-4 border-black  '>
           

           <h1>well come</h1>
          
           </div>
    
         </div>
         </div>
        
    </div>
  )
}

export default GoLive