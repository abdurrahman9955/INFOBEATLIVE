import React from 'react'
import { FaVideo } from 'react-icons/fa';
import { BsMicMuteFill } from 'react-icons/bs';
import { FcEndCall} from 'react-icons/fc';
import { FaVolumeUp } from 'react-icons/fa';

const GoLive = () => {
  return (
  
   <div className='flex justify-center  font-bold 
    bg-lime-500 border-2 border-black'>
     
       <div className='flex flex-col w-full
        bg-white  border-2 m-1
      border-black -600 h-auto  font-bold'>

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black 
           text-xs font-bold    bg-lime-500'> 

          <div>
            <button className='text-sm text-slate-950 w-20 h-7
            ml-10 mt-1 rounded-sm'><FaVideo  className='
            h-7 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-sm text-slate-950 w-20 h-7 
             mt-1 rounded-sm'><BsMicMuteFill  className='
            h-7 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-sm text-slate-950 w-20 h-7
            mt-1    rounded-sm'><FaVolumeUp  className='
            h-7 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-sm text-slate-950 w-20 h-7 
            mt-1  rounded-sm'><FcEndCall  className='
            h-7 w-10  hover:text-blue-950'/></button>
          </div>
            
          </h1>
          <h1 className='flex justify-center text-xs font-bold '>now there (0) participant</h1>
          <div className='h-screen overflow-y-auto  m-1 p-1 border-2 border-black  '>
           

           <h1>well come</h1>
          
           </div>
    
         </div>
         </div>
        
    </div>
  )
}

export default GoLive