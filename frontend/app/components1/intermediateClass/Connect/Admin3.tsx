'used client'
import React, { useState } from 'react'
import Pick from '../Start/Pick';
import Video from '../Start/Video';
import Voice from '../Start/Voice';
import Chat from '../Start/Chat';
import Connect from '../Start/Connect';


const Admin3 = () => {
  
  const [selectedRoute, setSelectedRoute] = useState<string>('Pick');

  return (
   
   <div className='flex justify-center  font-bold pt-5
   '>
   
       <div className='flex flex-col w-full lg:w-5/6
        bg-white   border-2 m-1
      border-black -600 h-auto  font-bold'>


      <div className=' h-10 w-full  flex justify-between border-2 border-black pb-2 
      '>
            <button  onClick={() => setSelectedRoute('Pick')}
            type='button' className='text-white bg-pink-900 px-2 w-40 h-7  mt-1 
          rounded-sm  hover:bg-gray-900 ml-2 text-sm font-bold'>Pick </button>

          <button  onClick={() => setSelectedRoute('Connect')}
          type='button' className='text-white bg-pink-900 px-2 w-40 h-7  mt-1
          rounded-sm hover:bg-gray-900 mr-2 text-sm font-bold
          '>Connect  </button>
           </div>

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs
          font-bold  pb-1
          '> 
          <button  onClick={() => setSelectedRoute('Voice')}
          type='button' className='text-white bg-pink-900 pt-1 w-20 h-7  mt-1
          rounded-sm  hover:bg-gray-900'>Voice </button>

          <button onClick={() => setSelectedRoute('Video')}
           type='button' className='text-white bg-pink-900 pt-1 w-20 h-7  mt-1 
          rounded-sm hover:bg-gray-950'>video </button>

          <button  onClick={() => setSelectedRoute('Chat')}
          type='button' className='text-white bg-pink-900 pt-1 w-20 h-7  mt-1 
          rounded-sm hover:bg-gray-900'>chat </button>
            
          </h1>
          <h1 className='flex justify-center text-xl font-bold '>now there (0) participant</h1>
          <div className='h-auto overflow-y-auto  m-1  border-2 border-black  '>
           

           {selectedRoute === 'Video' && <Video />}
           {selectedRoute === 'Pick' && <Pick />}
           {selectedRoute === 'Voice' && <Voice />}
           {selectedRoute === 'Chat' && <Chat />}
           {selectedRoute === 'Connect' && <Connect />}
          
          

           </div>
     
         </div>
         </div>
        
    </div>
  )
}

export default Admin3