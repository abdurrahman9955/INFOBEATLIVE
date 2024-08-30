'use client'
import React, { useState } from 'react'
import Followers from './Followers';
import Video from './Video';
import Voice from './Voice';
import Chat from './Chat';
import Connect from './Connect';

const Send = () => {

  const [selectedRoute, setSelectedRoute] = useState<string>('Followers');

  return (
  
   <div className='flex justify-center  font-bold sm:pt-5  bg-lime-500
   '>
    
       <div className='flex flex-col md:w-3/4 max-md:w-full
        bg-white   border-2 m-1
      border-black -600 h-auto sm:mb-10 font-bold'>


      <div className=' h-10 w-full  flex justify-between border-b-2 border-black pb-2 
      '>
            <button  onClick={() => setSelectedRoute('Followers')}
            type='button' className='text-white bg-lime-800 pb-1 w-40 h-7  mt-1
          rounded-sm  hover:bg-gray-900 ml-2 text-lg font-bold'>Friends </button>

          <button  onClick={() => setSelectedRoute('Connect')}
          type='button' className='text-white bg-lime-800 pb-1 w-40 h-7  mt-1
          rounded-sm hover:bg-gray-900 mr-2 text-lg font-bold
          '>Connect  </button>
           </div>

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-sm 
          font-bold  pb-1
          '> 
          <button  onClick={() => setSelectedRoute('Voice')}
          type='button' className=' bg-lime-800 text-white w-20 h-7 mt-1
          rounded-sm text-sm  text-center hover:bg-gray-950'>Voice </button>

          <button onClick={() => setSelectedRoute('Video')}
           type='button' className=' bg-lime-800 w-20 h-7 text-white mt-1
          rounded-sm text-sm text-center hover:bg-gray-950'>Video</button>

          <button  onClick={() => setSelectedRoute('Chat')}
          type='button' className='bg-lime-800  text-white w-20 h-7  mt-1 
          rounded-sm tex-sm   hover:bg-gray-950'>Chat </button>
            
          </h1>
          <h1 className='flex justify-center text-xs font-bold '>now there (0) participant</h1>
          <div className='h-auto overflow-y-auto  m-1  border-2 border-black  '>
           

           {selectedRoute === 'Video' && <Video />}
           {selectedRoute === 'Followers' && <Followers />}
           {selectedRoute === 'Voice' && <Voice />}
           {selectedRoute === 'Chat' && <Chat />}
           {selectedRoute === 'Connect' && <Connect />}
          
          

           </div>
     
         </div>
         </div>
        
    </div>
  )
}

export default Send