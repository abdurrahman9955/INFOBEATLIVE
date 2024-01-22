'use client'
import React, { useState } from 'react'
import Followers from './Followers';
import Video from './Video';
import Voice from './Voice';
import Chat from './Chat';
import Connect from './Connect';


const Send = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Followers'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);

  return (
   
   <div className='flex justify-center  font-bold pt-32  bg-red-500
   '>
     
       <div className='flex flex-col md:w-3/4 max-md:w-full
        bg-white mt-5  border-4 m-2
      border-black -600 h-auto mb-20 font-bold'>


      <div className=' h-20 w-full  flex justify-between border-4 border-black pb-2 
      '>
            <button  onClick={() => setSelectedRoute('Followers')}
            type='button' className='text-white bg-red-800 pt-2 w-40 h-10  mt-2 
          rounded-xl  hover:bg-gray-900 ml-2 text-2xl font-bold'>Subscribers </button>

          <button  onClick={() => setSelectedRoute('Connect')}
          type='button' className='text-white bg-red-800 pt-2 w-40 h-10  mt-2 
          rounded-xl hover:bg-gray-900 mr-2 text-2xl font-bold
          '>Connect  </button>
           </div>

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          '> 
          <button  onClick={() => setSelectedRoute('Voice')}
          type='button' className='text-white bg-red-800 pt-2 w-20 h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>Voice </button>

          <button onClick={() => setSelectedRoute('Video')}
           type='button' className='text-white bg-red-800 pt-2 w-20 h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>video </button>

          <button  onClick={() => setSelectedRoute('Chat')}
          type='button' className='text-white bg-red-800 pt-2 w-20 h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>chat </button>
            
          </h1>
          <h1 className='flex justify-center text-xl font-bold '>now there (0) participant</h1>
          <div className='h-auto overflow-y-auto  m-2  border-4 border-black  '>
           

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