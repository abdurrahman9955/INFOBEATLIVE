



const Advance = () => {
  

  return (
    <div className="flex flex-col py-5  bg-amber-500 border-2 border-black">

      <div className='flex justify-center'>
        <h1 className="text-xl max-sm:text-lg text-black  mb-5 font-bold ">
          Apply for Level 3 class here</h1>
      </div>
      
      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-7 p-1 mt-5 
          border-2 border-slate-950  text-sm max-sm:m-1
          focus:outline '
         placeholder='your full name'  />
      </div>

      <div className='flex justify-center'>
         <input type='email' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-7 p-1 mt-5
          border-2 border-slate-950  text-sm max-sm:m-1
          focus:outline '
         placeholder='your email address'  />
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-7 p-1 mt-5
          border-2 border-slate-950  text-sm max-sm:m-1
          focus:outline  '
         placeholder='your profession '  />
      </div>

       <div className='flex justify-center'>
          <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-7 p-1 mt-5
           border-2 border-slate-950  text-sm max-sm:m-1
           focus:outline '
          placeholder='province'  />
       </div>

       <div className='flex justify-center'>
          <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-7 p-1 mt-5
           border-2 border-slate-950  text-sm max-sm:m-1
           focus:outline '
          placeholder='full address'  />
       </div>

      <div className="flex justify-center ml-2">
       <div className='flex  flex-row'>
          <input type='radio' className='w-10 h-7  mt-5'
          placeholder='gender'  /> 
       </div><h1 className="text-lg ml-3 mt-5 mr-7 font-bold">Male</h1>
       </div>

      
        <div className="flex justify-center">
       <div className='flex  flex-row'>
          <input type='radio' className='w-10 h-7 mt-5'
          placeholder='gender'  /> 
       </div><h1 className="text-lg ml-3 mt-5 font-bold">Female</h1>
       </div>

       <div className='flex justify-center'>
          <h1 className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-7  mt-5
             text-sm font-bold ml-3
            '
          placeholder='your email address'> your date of birth</h1>
       </div>
 
       <div className='flex justify-center'>
          <input type='date' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-7 p-1
           border-2 border-slate-950  text-sm max-sm:m-1
           focus:outline  '
          placeholder='your profession '  />
       </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-40 p-1 mt-5
           border-2 border-slate-950 text-sm max-sm:m-1
          focus:outline '
         placeholder='  write short and concise note about your self  '  />
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-64 p-1 mt-5
           border-2 border-slate-950 text-sm max-sm:m-1
          focus:outline  '
         placeholder='please mention your experience in this field and what
          you know  '  />
      </div>


      <div className='flex justify-center'>
         <div className='flex flex-col lg:w-1/3  max-lg:w-2/4 max-md:w-5/6 mt-1 gap-5
          font-bold  sm:p-5 max-sm:p-5 '>

             <button type='button' className='w-full   bg-black text-white h-7
             rounded-sm  hover:bg-violet-950 '>APPLY HERE</button>

          
     </div>
     </div>



      
    </div>
  )
}

export default Advance
