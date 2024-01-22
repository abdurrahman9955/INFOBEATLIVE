
import Link from 'next/link'




const Help = () => {
  return (
    <div className='flex flex-col bg-orange-500 text-black pt-10 border-4 
    border-purple-950 '>
       <div className='flex justify-center text-3xl max-sm:text-lg max-md:text-2xl font-bold
       '> seek help or report this class</div>
       
      
       <div>

       <div className='flex justify-center mt-5 '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-12 mt-5  text-2xl 
        focus:outline p-2
        bg-lime-00 font-bold
       '>write your name here</label>
      </div>

       
      <div className='flex justify-center '>
      <input type='text'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-12   text-xl 
        focus:outline p-2
        bg-lime-00 font-bold
        border-4 border-black' />
      </div>

      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-12 mt-5  text-2xl 
        focus:outline p-2
        bg-lime-00 font-bold
       '>write your Email here</label>
      </div>

      <div className='flex justify-center'>
      <input type='email'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-12   text-xl 
        focus:outline p-2
        bg-lime-00  font-bold
        border-4 border-black' />
      </div>

      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-12 mt-5  text-2xl 
        focus:outline p-2
        bg-lime-00 font-bold
       '>reason you want seek help/report this class</label>
      </div>
     
      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-32   text-xl 
        focus:outline p-2
        bg-lime-00  font-bold
        border-4 border-black' />
      </div>

      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-12 mt-5  text-2xl 
        focus:outline p-2
         font-bold
       '>write your statements here</label>
      </div>

      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-80   text-xl 
        focus:outline  p-2 text-black
        bg-lime-00 font-bold 
        border-4 border-black' />
      </div>
     
     
     

       </div>

       <div className='flex justify-center mt-5 '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5 h-auto mt-5  text-2xl 
        focus:outline p-2 border-4 border-black text-black
        bg-lime-00 font-bold
       '>Note: if you sent your massage to the ((report this class)) that mean you appeal your 
       issue to us directly, the class instructors this can cause a problems to 
       them if we found them guilty about your issue, be careful please,
        please try your best to negotiate with the instructors 
         before appeal your problems 
       to us thanks, hope your enjoying our platform. </label>
      </div>
       
       <div className='flex justify-center'>
       <button type='submit' className=' rounded-full
        bg-slate-950 lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5
         text-2xl text-white  h-10 mt-10
        hover:bg-slate-800 '>Report this class</button>

      </div>

       
      <div className='flex justify-center'>
       <button type='submit' className=' rounded-full
        bg-slate-950 lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-4/5
         text-2xl text-white  h-10 mt-5
        hover:bg-slate-800 mb-20'>Seek support</button>

      </div>

       </div>
    
  )
}

export default Help