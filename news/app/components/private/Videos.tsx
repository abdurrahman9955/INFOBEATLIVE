import React from 'react'

const Videos = () => {
  return (
   
   <div className='flex justify-center  font-bold 
    bg-yellow-400 border-4 border-black'>
     
       <div className='flex flex-col w-full
        bg-white mt-5  border-4 m-2
      border-black -600 h-auto  font-bold'>


     

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-4 border-b-4 border-black  text-xl font-bold  pb-2
          bg-yellow-400'> 
          <button type='button' className='text-white 
            w-auto pl-3 pr-3 h-10  mt-2 bg-yellow-950
          rounded-xl  hover:bg-slate-900'>Latest </button>

          <button type='button' className='text-white 
            w-auto pl-3 pr-3 h-10  mt-2 bg-yellow-950
          rounded-xl  hover:bg-slate-900'>Recent </button>

          <button type='button' className='text-white 
           w-auto pl-3 pr-3 h-10  mt-2 bg-yellow-950
          rounded-xl  hover:bg-slate-900'>Oldest </button>

         
            
          </h1>
          <h1 className='flex justify-center text-xl font-bold '>
            now there are (0) Videos</h1>
          <div className='h-screen overflow-y-auto  m-2 p-2 border-4 border-black  '>
           

           <h1>well come</h1>
          
           </div>
    
         </div>
         </div>
        
    </div>
  )
}

export default Videos