import React from 'react'
import { MdEmojiEmotions } from 'react-icons/md'
import { FaCamera } from 'react-icons/fa'
import { IoDuplicate } from 'react-icons/io5'
import { MdKeyboardVoice } from 'react-icons/md'

const ClassChat = () => {
  return (
   
   <div className='flex justify-center  font-bold 
   border-4 border-black  bg-orange-500'>
     
       <div className='flex flex-col w-full
        bg-white mt-5  border-4 m-2
      border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          '> 
          <button type='button' className='text-white bg-orange-700 pt-2 w-20 h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>icon </button>

          <button type='button' className='text-white bg-orange-700 pt-2 w-20 h-10  mt-2 
          rounded-xl  hover:bg-gray-950'>video </button>

          <button type='button' className='text-white bg-orange-700 pt-2 w-20 h-10  mt-2 
          rounded-xl  hover:bg-gray-900'>live </button>

          <button type='button' className='text-white bg-orange-700 pt-2 w-20 h-10  mt-2 
          rounded-xl hover:bg-gray-900
          '>chat  </button>
            
          </h1>
          <h1 className='flex justify-center text-xl font-bold '>now there are (0) members online</h1>
          <div className='h-screen overflow-y-auto  m-2 p-2 border-4 border-black  '>
           

           <h1>well come</h1>
           
           </div>

           <div className='flex  flex-row'>
           <div className='flex flex-row overflow-hidden w-5/6 mb-2 rounded-full border-4  border-black h-16 
          ml-10 max-sm:ml-5 text-xl bg-orange-100'>

            <MdEmojiEmotions className="h-10 w-10 text-orange-600 mt-2 ml-3"/>

          <textarea  className=' h-12 w-3/5 ml-2 mt-1 p-1 rounded-full pl-5
          border-2 border-black focus:outline ' />

           <IoDuplicate className="lg:ml-40 xl:ml-60 h-10 lg:mr-10 w-10 text-orange-950 mt-2 ml-3"/>
           <FaCamera className=" h-10 w-10 mr-3 ml-3 text-orange-950 mt-2 "/>
          
          </div> 

           <MdKeyboardVoice className=" h-16 w-16 mr-3 ml-3 text-orange-950 
           hover:h-20 hover:w-20 hover:mb-2"/> 
           </div>
          
          
                  
         </div>
         </div>
        
    </div>
  )
}

export default ClassChat