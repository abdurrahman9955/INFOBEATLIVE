



const Certificate = () => {
  

   return (
     <div className="flex flex-col py-32  bg-green-500 border-4 border-black">
 
       <div className='flex justify-center'>
         <h1 className="text-3xl max-sm:text-xl text-black mt-5 mb-5 font-bold ">
           Apply for certificate  here</h1>
       </div>
       
       <div className='flex justify-center'>
          <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12 p-2 mt-5 
           border-4 border-slate-950  text-xl max-sm:m-2
           focus:outline '
          placeholder='your full name'  />
       </div>
 
       <div className='flex justify-center'>
          <input type='email' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12 p-2 mt-5
           border-4 border-slate-950  text-xl max-sm:m-2
           focus:outline '
          placeholder='your email address'  />
       </div>

       <div className='flex justify-center'>
          <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12 p-2 mt-5
           border-4 border-slate-950  text-xl max-sm:m-2
           focus:outline '
          placeholder='country'  />
       </div>

       <div className='flex justify-center'>
          <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12 p-2 mt-5
           border-4 border-slate-950  text-xl max-sm:m-2
           focus:outline '
          placeholder='province'  />
       </div>

       <div className='flex justify-center'>
          <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12 p-2 mt-5
           border-4 border-slate-950  text-xl max-sm:m-2
           focus:outline '
          placeholder='full address'  />
       </div>

       <div className="flex justify-center">
       <div className='flex  flex-row'>
          <input type='radio' className='w-10 h-10  mt-5'
          placeholder='gender'  /> 
       </div><h1 className="text-3xl ml-3 mt-5 mr-7 font-bold">Male</h1>
       </div>

      
        <div className="flex justify-center">
       <div className='flex  flex-row'>
          <input type='radio' className='w-10 h-10 mt-5'
          placeholder='gender'  /> 
       </div><h1 className="text-3xl ml-3 mt-5 font-bold">Female</h1>
       </div>

       <div className='flex justify-center'>
          <h1 className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12  mt-5
             text-2xl font-bold ml-3
            '
          placeholder='your email address'> your id number</h1>
       </div>
 
       <div className='flex justify-center'>
          <input type='number' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12 p-2 
           border-4 border-slate-950  text-xl max-sm:m-2
           focus:outline  '
          placeholder='student id number '  />
       </div>

       <div className='flex justify-center'>
          <h1 className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12  mt-5
             text-2xl font-bold ml-3
            '
          placeholder='your email address'> your date of birth</h1>
       </div>
 
       <div className='flex justify-center'>
          <input type='date' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12 p-2 
           border-4 border-slate-950  text-xl max-sm:m-2
           focus:outline  '
          placeholder='your profession '  />
       </div>

       <div className='flex justify-center'>
          <h1 className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12  mt-5
             text-2xl font-bold ml-3
            '
          placeholder='your email address'> date of starting the course</h1>
       </div>
 
       <div className='flex justify-center'>
          <input type='date' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12 p-2 
           border-4 border-slate-950  text-xl max-sm:m-2
           focus:outline  '
          placeholder='your profession '  />
       </div>

       <div className='flex justify-center'>
          <h1 className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12  mt-5
             text-2xl font-bold ml-3
            '
          placeholder='your email address'> date you finished the course</h1>
       </div>
 
       <div className='flex justify-center'>
          <input type='date' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-12 p-2 
           border-4 border-slate-950  text-xl max-sm:m-2
           focus:outline  '
          placeholder='your profession '  />
       </div>
 
       <div className='flex justify-center'>
          <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-40 p-2 mt-5
            border-4 border-slate-950 text-xl max-sm:m-2
           focus:outline '
          placeholder=' please describe your self before the day you get admission, 
          and  after completing the course'  />
       </div>
 
       <div className='flex justify-center'>
          <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-64 p-2 mt-5
            border-4 border-slate-950 text-xl max-sm:m-2
           focus:outline  '
          placeholder='please describe what you learn and give reference, but you will
          held the examination before certificate offer to be giving to you
             '  />
       </div>
 
 
       <div className='flex justify-center'>
          <div className='flex flex-col lg:w-1/3  max-lg:w-2/4 max-md:w-5/6 mt-2 gap-10 font-bold 
                sm:p-10 max-sm:p-5 '>
 
              <button type='button' className='w-full   bg-black text-white h-10
              rounded-2xl  hover:bg-violet-950 '>APPLY HERE</button>
 
           
      </div>
      </div>
 
 
 
       
     </div>
   )
 }
 
 export default Certificate
 