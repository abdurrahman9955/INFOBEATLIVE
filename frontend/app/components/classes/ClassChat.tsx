import React from 'react'
import { MdEmojiEmotions } from 'react-icons/md'
import { FaCamera } from 'react-icons/fa'
import { IoDuplicate } from 'react-icons/io5'
import { MdKeyboardVoice } from 'react-icons/md'

const ClassChat = () => {
  return (
   
   <div className='flex justify-center  font-bold 
   border-2 border-black  bg-lime-500'>
     
       <div className='flex flex-col w-full
        bg-white   border-2 m-1
      border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2   text-xs 
          font-bold  pb
          '> 
          <button type='button' className='text-white bg-lime-700 pt-1 w-20 h-7  mt-1 
          rounded-sm hidden hover:bg-gray-900'>icon </button>

          <button type='button' className='text-white bg-lime-700 pt-1 w-20 h-7  mt-1 
          rounded-sm hidden hover:bg-gray-950'>video </button>

          <button type='button' className='text-white bg-lime-700 pt-1 w-20 h-7  mt-1 
          rounded-sm hidden hover:bg-gray-900'>live </button>

          <button type='button' className='text-white bg-lime-700 pt-1 w-20 h-7  mt-1 
          rounded-sm hidden hover:bg-gray-900
          '>chat  </button>
            
          </h1>
          <h1 className='flex justify-center text-xs font-bold '>now there are (0) students online</h1>
          <div className='h-screen overflow-y-auto  m-1 p-1 border-2 border-black  '>
           

           <h1>well come</h1>
           
           </div>

           <div className='flex  flex-row'>
           <div className='flex flex-row overflow-hidden w-5/6 mb-1 rounded-full border-2
             border-black h-10
          ml-10 max-sm:ml-5 text-xs bg-lime-100'>

            <MdEmojiEmotions className="h-7 w-10 text-yellow-600 mt-1 ml-3"/>

          <textarea  className=' h-7 w-3/5 ml-2 mt-1 p-1 rounded-full pl-5
          border border-black ' />

           <IoDuplicate className="lg:ml-40 xl:ml-60 h-7 lg:mr-10 w-10 text-lime-950
            mt-1 ml-3"/>
           <FaCamera className=" h-7 w-10 mr-3 ml-3 text-lime-950 mt-1 "/>
          
          </div> 

           <MdKeyboardVoice className=" h-10 w-10 mr-3 ml-3 text-lime-950 
           hover:h-12 hover:w-12 hover:mb-2"/> 
           </div>        
         </div>
         </div>
        
    </div>
  )
}

export default ClassChat