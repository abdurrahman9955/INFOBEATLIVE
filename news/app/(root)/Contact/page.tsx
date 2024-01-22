import React from 'react'
import Link from 'next/link'



const page = () => {
  return (
    <div className='flex flex-col bg-lime-500 text-yellow-950 pt-40 border-4 
    border-purple-950 '>
       <div className='flex justify-center text-3xl max-sm:text-lg max-md:text-2xl font-bold
       '> contact us for deal or more information</div>
        <div className='flex justify-center md:ml-40 md:mr-40 text-black 
        bg- font-bold border-4 border-purple-950 mt-5 text-2xl max-sm:ml-10
         max-sm:mr-10 m-3'>
            <h1 className='p-3'>Note: you can contact us for many reason, 
                we will reach to you as soon as possible,  
                 because we are all ways
                serving our client and our consumers, but 
                if your massage is not need any reply or comment
                your can switch back to the <span><Link href={{pathname:'/Feedback'}}
                ><span className='text-blue-800 font-bold'>Feed back page </span> 
                in der to give us review rate and all
                other relevant, </Link></span> so we are
                apologizing any inconvenience hope you are enjoying journey
                with us.</h1>
            </div> 

         
      
       <div>
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your name here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-20 mt-5  text-xl 
        focus:outline p-2
        bg-lime-00 font-bold
        border-4 border-slate-950' />
      </div>

      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your email here'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-20 mt-5  text-xl 
        focus:outline p-2
        bg-lime-00  font-bold
        border-4 border-slate-950' />
      </div>
     
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='reason you want contact us'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-32 mt-5  text-xl 
        focus:outline p-2
        bg-lime-00  font-bold
        border-4 border-slate-950' />
      </div>

      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       placeholder='write your statements here'
       className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-80 mt-5  text-xl 
        focus:outline  p-2 text-black
        bg-lime-00 font-bold 
        border-4 border-slate-950' />
      </div>
     
     
     

       </div>
       
       <div className='flex justify-center'>
       <button type='submit' className='border-2 border-slate-200
        bg-slate-950 lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5
         text-xl text-white rounded-3xl py-2 mt-10
        hover:bg-purple-950 mb-20'>contact us</button>

      </div>


       </div>
    
  )
}

export default page