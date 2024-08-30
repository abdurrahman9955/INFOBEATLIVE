import React from 'react'

const Videos = () => {
  return (
   
   <div className='flex justify-center  font-bold 
    bg-lime-500 border-2 border-black'>
     
       <div className='flex flex-col w-full
        bg-white mt-1  border-2 m-1
      border-black -600 h-auto  font-bold'>


         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs 
          font-bold  pb-1
           bg-lime-500'> 
          <button type='button' className='text-white 
            w-auto pl-3 pr-3 h-7 mt-1 bg-slate-950
          rounded-sm  hover:bg-slate-900'>Popular </button>

          <button type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm  hover:bg-slate-900'>Latest </button>

          <button type='button' className='text-white 
           w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm hover:bg-slate-900'>Oldest </button>
            
          </h1>
          <h1 className='flex justify-center text-xs font-bold 
          '>now there are (0) Videos</h1>
          <div className='h-screen overflow-y-auto  m-1 p-1 border-2 border-black  '>
           

           <h1>well come</h1>
          
           </div>
    
         </div>
         </div>
        
    </div>
  )
}

export default Videos