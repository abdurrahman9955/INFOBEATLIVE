import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='flex min-h-screen flex-col bg-lime-500 text-yellow-950 pt-5 border-2
    border-purple-950 '>
       <div className='flex justify-center text-lg max-sm:text-lg max-md:text-sm
       font-bold
       '> contact us for deal or more information</div>
     
       <div>
      <div className='flex justify-center mt-5'>
      <input
       type='text' 
       name="message"
       placeholder='write your name here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-full m-2 h-10 mt-2  text-sm
        focus:outline p-1 rounded-lg
        bg-lime-00 font-bold
        border-2 border-slate-950' />
      </div>

      <div className='flex justify-center '>
      <input
       type='text'
       name="message"
       placeholder='write your email here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-full m-2 h-10 mt-2  text-sm
        focus:outline p-1 rounded-lg
        bg-lime-00  font-bold
        border-2 border-slate-950' />
      </div>
     
      <div className='flex justify-center '>
      <textarea
       id="news"
       name="message"
       placeholder='reason you want contact us'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-full m-2 h-28 mt-2  text-sm
        focus:outline p-1 rounded-lg
        bg-lime-00  font-bold
        border-2 border-slate-950' />
      </div>

      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your statements here'
       className='lg:w-2/5 max-lg:w-2/3 max-md:w-full m-2 h-64 mt-2  text-sm
        focus:outline  p-1 text-black rounded-lg
        bg-lime-00 font-bold 
        border-2 border-slate-950' />
      </div>
     
     
     

       </div>
       
       <div className='flex justify-center'>
       <button type='submit' className='border border-slate-200
        bg-slate-950 lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5
         text-sm text-white rounded-full py-1 mt-4
        hover:bg-purple-950 mb-20'>contact us</button>

      </div>


       </div>
    
  )
}

export default Contact