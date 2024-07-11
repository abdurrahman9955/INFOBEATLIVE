import React from 'react'

const Latest = () => {
  return (
   
   <div className='flex justify-center  font-bold  
   border-2 border-black  bg-sky-400 '>
     
       <div className='flex flex-col w-full m-1
        bg-white   border-2 lg:w-11/12
      border-black -600 h-auto sm:mb-16 font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1
          bg-sky-400'> 

          
          <button type='button' className='text-white bg-sky-950 p-1 pl-6 pr-6 w-auto 
          h-7  mt-1
          rounded-sm  hover:bg-gray-900'>your all latest content </button> 

          </h1>
          
          <h1 className='flex justify-center gap-1   text-xs font-bold  
          bg-sky-400 pb-1 border-b-2 border-black '> 

          <button type='button' className='text-white bg-sky-950 p-1 w-28 h-7  mt-1
          rounded-sm hover:bg-gray-900'>Books </button>

          <button type='button' className='text-white bg-sky-950 px-5 w-auto h-7  mt-1 
          rounded-sm hover:bg-gray-900'>NewsPapers </button>

          <button type='button' className='text-white bg-sky-950 px-5 w-auto h-7  mt-1 
          rounded-sm hover:bg-gray-950'>Magazines </button>
          </h1> 
          <div className='h-screen overflow-y-auto m-1 mb-1 mx-2 p-1 border-2 border-black  '>
           

           <h1>well come</h1>
           
           </div>

          
                  
         </div>
         </div>
        
    </div>
  )
}

export default Latest