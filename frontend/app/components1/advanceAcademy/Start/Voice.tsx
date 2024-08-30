import React from 'react'
import { MdAddCall } from 'react-icons/md';
import { BsMicMuteFill } from 'react-icons/bs';
import { FcEndCall} from 'react-icons/fc';
import { FaVolumeUp } from 'react-icons/fa';

const Voice = () => {
  return (
    <div className='flex flex-col  w-full 
      h-auto'>

        <div className='flex justify-center overflow-x-auto
        border-b-2 border-black '>
        

         <div>
            <button className='text-sm text-orange-950 w-20 h-7
            ml-10  rounded-xl'><MdAddCall  className='
           mt-1 h-7 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-sm text-orange-950 w-20 h-7 
            mt-1  rounded-xl'><BsMicMuteFill  className='
            h-7 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-sm text-orange-950 w-20 h-7
            mt-1    rounded-xl'><FaVolumeUp  className='
            h-7 w-10  hover:text-blue-950'/></button>
          </div>

          <div>
            <button className='text-sm text-orange-950 w-20 h-7 
            mt-1  rounded-xl'><FcEndCall  className='
            h-7 w-10  hover:text-blue-950'/></button>
          </div>

      
        </div>

       <div className='flex justify-center flex-wrap   
       h-screen
        overflow-y-auto p-1 gap-2 max-md:m-3 '>
        
        <div>
            <h1 className='text-sm font-bold'>no content upload yet</h1>
        </div>
        
       

       </div>
    </div> 
  )
}

export default Voice