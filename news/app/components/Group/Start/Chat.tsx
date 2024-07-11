import React from 'react'
import { MdEmojiEmotions } from 'react-icons/md'
import { FaCamera } from 'react-icons/fa'
import { IoDuplicate } from 'react-icons/io5'
import { MdKeyboardVoice } from 'react-icons/md'


const Chat = () => {
  return (
   
   <div className='flex justify-center  font-bold   bg-white'>
    
       <div className='flex flex-col w-full  bg-white    h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs
           font-bold  pb-1
          '>
             <button type='button' className='text-white bg-cyan-700 pt-1 w-20 h-7  mt-1 
          rounded-sm  hover:bg-gray-900'>Calls </button>

          <button type='button' className='text-white bg-cyan-700 pt-1 w-20 h-7  mt-1 
          rounded-sm  hover:bg-gray-950'>videos </button>

          <button type='button' className='text-white bg-cyan-700 pt-1 w-20 h-7  mt-1 
          rounded-sm hover:bg-gray-900'>Chats </button>

          <button type='button' className='text-white bg-cyan-700 pt-1 w-20 h-7  mt-1 
          rounded-sm hover:bg-gray-900
          '>New  </button> 
        
            
          </h1>
         
          <div className='h-screen overflow-y-auto    p-1  '>
           
        
        
       
          
           
           </div>

           <div className='flex  flex-row'>
           <div className='flex flex-row overflow-hidden w-5/6 mb-2 rounded-full border-2 
            border-black h-10   ml-10 max-sm:ml-5 text-sm bg-green-100'>

            <MdEmojiEmotions className="h-7 w-10 text-cyan-600 mt-1 ml-3"/>

          <textarea  className=' h-7 w-3/5 ml-2 mt-1 p-1 rounded-full pl-5
          border border-black focus:outline ' />

           <IoDuplicate className="lg:ml-40 xl:ml-60 h-7 lg:mr-10 w-10 text-cyan-950 
           mt-1 ml-3"/>
           <FaCamera className=" h-7 w-10 mr-3 ml-3 text-cyan-950 mt-1 "/>
          
          </div> 

           <MdKeyboardVoice className=" h-10 w-10 mr-3 ml-1 text-cyan-950 
           hover:h-10 hover:w-10 hover:mb-2"/> 
           </div>
          
          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Chat