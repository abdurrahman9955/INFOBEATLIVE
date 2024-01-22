import React from 'react'
import { FaVideo } from 'react-icons/fa';
import { BsMicMuteFill } from 'react-icons/bs';
import { FcEndCall} from 'react-icons/fc';
import { FaVolumeUp } from 'react-icons/fa';

const Video = () => {
  return (
    <div className='flex flex-col  w-full 
      h-auto'>

        <div className='flex justify-center overflow-x-auto
        border-b-4 border-black p-2 '>
         
         <div>
            <button className='text-xl text-cyan-950 w-20 h-10
            ml-10 mt-2 rounded-xl'><FaVideo  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-xl text-cyan-950 w-20 h-10 
             mt-2 rounded-xl'><BsMicMuteFill  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-xl text-cyan-950 w-20 h-10
            mt-2    rounded-xl'><FaVolumeUp  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-xl text-cyan-950 w-20 h-10 
            mt-2  rounded-xl'><FcEndCall  className='
            h-10 w-10  hover:text-blue-950'/></button>
          </div>
      
        </div>

       <div className='flex justify-center flex-wrap   
       h-screen 
        overflow-y-auto p-3 gap-4 max-md:m-3 '>
        
        <div>
            <h1 className='text-3xl font-bold'>no content upload yet</h1>
        </div>
       

       </div>
    </div> 
  )
}

export default Video