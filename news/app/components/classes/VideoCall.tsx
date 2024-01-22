import React from 'react'
import { FaVideo } from 'react-icons/fa';
import { BsMicMuteFill } from 'react-icons/bs';
import { FcEndCall} from 'react-icons/fc';
import { FaVolumeUp } from 'react-icons/fa';


const VideoCall = () => {
  return (
   
   <div className='flex justify-center bg-lime-500  font-bold  border-4
    border-black 950 '>
     
       <div className='flex flex-col w-full m-2
        bg-white mt-5  border-4 
      border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          '> 
           <div>
            <button className='text-xl text-orange-950 w-20 h-10
            ml-10 mt-2 rounded-xl'><FaVideo  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-xl text-orange-950 w-20 h-10 
            mt-2  rounded-xl'><BsMicMuteFill  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-xl text-orange-950 w-20 h-10
            mt-2    rounded-xl'><FaVolumeUp  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-xl text-orange-950 w-20 h-10 
            mt-2  rounded-xl'><FcEndCall  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>

            
          </h1>
          <h1 className='flex justify-center text-xl font-bold '>aburrahman sale now is online</h1>
          <div className='h-screen overflow-y-auto  m-2 p-2 border-4 border-black  '>
           

           <h1>well come</h1>
         
           </div>
       
         </div>
         </div>
        
    </div>
  )
}

export default VideoCall