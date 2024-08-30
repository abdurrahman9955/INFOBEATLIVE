import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
   
   <div className='flex justify-center  font-bold 
    bg-lime-500 border-2 border-black'>

       <div className='flex flex-col w-full  bg-white   border-2 m-1
      border-black -600 h-auto  font-bold'>

         <div className='   w-full  h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black  text-xs
           font-bold  pb-1 bg-pink-500'> 

          <button type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm hover:bg-slate-900'>Pricing1 </button>

          <button type='button' className='text-white 
            w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm  hover:bg-slate-900'>Pricing2 </button>

          <button type='button' className='text-white 
           w-auto pl-3 pr-3 h-7  mt-1 bg-slate-950
          rounded-sm hover:bg-slate-900'>Pricing3 </button>
           
          </h1>
       
          <div className='h-auto overflow-y-auto   '>
         
        <div className='flex flex-col bg-lime-500 text-black pt-5  '>
       <div className='flex justify-center text-xl max-sm:text-lg max-md:text-lg 
       font-bold
       '> contact for more information</div>
      
      
       <div>

       <div className='flex justify-center mt-5 '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-8 mt-5  text-sm
        focus:outline p-1
        bg-lime-00 font-bold
       '>write your name here</label>
      </div>

       
      <div className='flex justify-center '>
      <input type='text'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-8   text-sm
        focus:outline p-1
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-8 mt-2  text-sm
        focus:outline p-1
        bg-lime-00 font-bold
       '>write your Email here</label>
      </div>

      <div className='flex justify-center'>
      <input type='email'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-8  text-sm 
        focus:outline p-1
        bg-lime-00  font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-8 mt-2  text-sm 
        focus:outline p-1
        bg-lime-00 font-bold
       '>Subject</label>
      </div>
     
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-16   text-sm
        focus:outline p-1
        bg-lime-00  font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-8 mt-2  text-sm
        focus:outline p-1
         font-bold
       '>write your statements here</label>
      </div>

      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full m-2 h-80   text-sm
        focus:outline  p-1 text-black
        bg-lime-00 font-bold 
        border border-black' />
      </div>
     
       </div>
       
      <div className='flex justify-center'>
       <button type='submit' className=' rounded-full
        bg-slate-950 lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5
         text-xs text-white  h-7 mt-5 
        hover:bg-slate-800 mb-20'>Contact us</button>

      </div>
    </div>     
       
      </div>
    </div>
   </div> 
  </div>
  )
}

export default Contact