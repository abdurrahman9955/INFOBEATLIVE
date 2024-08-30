import React from "react"

const ClassNote = () => {
  return (
    <div className='flex flex-col bg-lime-500 text-black pt-5 border-2
    border-purple-950 '>
       <div className='flex justify-center text-xl max-sm:text-lg max-md:text-lg 
       font-bold
       '> create an announcement here</div>

    <div className='flex justify-center '>
      <h1
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full  h-auto mt-5  text-sm
        border-2 border-black font-bold p-2 rounded-xl
       '>

       Class announcements are visible to all platform users, not just students. Utilize 
       this feature to inform your class about upcoming events, new courses, lectures, 
       price discounts, and other relevant activities. To maximize your announcement's 
       impact, set specific start and end dates and times. This creates a sense of urgency,
        perfect for limited-time offers or course launches. For example, specify when a 
        discount code expires or a new course begins. By effectively using this feature, 
        you can expand your course's reach and engagement.

       </h1>
      </div>
      
      
       <div>

       <div className='flex justify-center mt-1 '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-5  text-sm
        focus:outline p-1
        bg-lime-00 font-bold
       '>write your title here</label>
      </div>

       
      <div className='flex justify-center '>
      <input type='text'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-10   text-lg
        focus:outline p-1 rounded
        bg-lime-00 font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-2  text-sm
        focus:outline p-1
        bg-lime-00 font-bold
       '>write your date here ((optional))</label>
      </div>

      <div className='flex justify-center'>
      <input type='date'
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8  text-sm 
        focus:outline p-1 rounded
        bg-lime-00  font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-2  text-sm 
        focus:outline p-1 
        bg-lime-00 font-bold
       '>write your time here ((optional))</label>
      </div>
     
      <div className='flex justify-center'>
      <input type="time"
       
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8   text-sm
        focus:outline p-1 rounded
        bg-lime-00  font-bold
        border border-black' />
      </div>

      <div className='flex justify-center '>
      <label
       className=' lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-8 mt-2  text-sm
        focus:outline p-1 
         font-bold
       '>write your statements here</label>
      </div>

      <div className='flex justify-center'>
      <textarea
       id="news"
       name="message"
       className='lg:w-2/5 max-lg:w-2/3 max-md:w-4/5 max-sm:w-full mx-2 h-40   text-sm
        focus:outline  p-1 text-black rounded
        bg-lime-00 font-bold 
        border border-black' />
      </div>
     
       </div>

       
      <div className='flex justify-center'>
       <button type='submit' className=' rounded
        bg-slate-950 w-80 max-sm:w-4/5
          text-white  h-7 mt-5 
        hover:bg-slate-800 mb-20'>create announcement</button>

      </div>

       </div>
    
  )
}

export default ClassNote