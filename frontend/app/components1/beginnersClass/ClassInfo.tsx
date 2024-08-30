import { FaUser } from "react-icons/fa"
import Link from "next/link"




const ClassInfo = () => {
   


  return (
    <div className='flex flex-col w-full h-auto pt-5 bg-lime-500 border-2 border-black   '>

          <div className="flex justify-center   ">
         
         <div className="flex  flex-col  
        max-md:w-5/6 max-sm:w-full  ">
         <h1 className="flex justify-center text-xl text-green-950 font-bold 
          max-sm:text-lg">
       class Name
      </h1>
      <div className="flex justify-center">
      <div className="   w-64 h-64 mt-10 border-2 border-slate-950
        bg-blue-100 rounded ">
        <FaUser className="flex justify-center w-16 h-16 ml-24 mt-16  " />
        <h1 className="flex justify-center  text-orange-950 text-lg font-bold 
        ">Upload Photo </h1> 
        
        </div>
        </div>

        <div className="flex justify-center  mt-5
           ">
        <div className="flex flex-row justify-between  
        ">
          
         <button type="button" className="text-sm text-black border border-black
          w-32 h-8 mt-5  font-bold bg-white mr-16 max-sm:mr-10
         rounded shadow-2xl max-sm:px-4 hover:bg-green-200 ">Instructors
         </button>

         <button type="button" className="text-sm text-black border border-black
          w-32 h-8  mt-5 font-bold bg-white ml-16 max-sm:ml-10
         rounded shadow-2xl hover:bg-green-200 max-lg:mr-3 ">Students 
         </button>
         </div>
         </div>

         <div className="flex justify-center  mt-5
           ">
        <div className="flex flex-row justify-between  
        ">
          
         <button type="button" className="text-sm text-black border border-black
          w-32 h-7 mt-5  font-bold bg-white mr-16 max-sm:mr-10
         rounded-full shadow-2xl max-sm:px-4 hover:bg-green-200 ">0
         </button>

         <button type="button" className="text-sm text-black border border-black
          w-32 h-7  mt-5 font-bold bg-white ml-16 max-sm:ml-10
         rounded-full shadow-2xl hover:bg-green-200 max-lg:mr-3 ">0
         </button>
         </div>
         </div>

         
      </div>
     </div>

      <div className="flex justify-center mt-10 text-xl text-indigo-950 font-bold"> <h1>
        more details about the class</h1></div>

        <div className='flex justify-center'>
         <label className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-7 p-2 mt-5 
            text-xl font-bold
          '
          >class name *</label>
      </div>
      
        <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-1 
          border border-slate-950  text-sm  bg-white
          '
         placeholder='group name'  />
      </div>

      <div className='flex justify-center'>
         <label className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-5 
            text-xl font-bold
          '
          >class type *</label>
      </div>

      <div className='flex justify-center'>
         <input type='email' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-1
          border border-slate-950  text-sm bg-white
          '
         placeholder='group type'  />
      </div>

      <div className='flex justify-center'>
         <label className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-5 
            text-xl font-bold
          '
          >class purpose *</label>
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-1
         border border-slate-950  text-sm  bg-white
           '
         placeholder=' group purpose'  />
      </div>

      <div className='flex justify-center'>
         <label className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1  mt-5 
            text-xl font-bold
          '
          >class category *</label>
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-2 mt-1
          border border-slate-950   text-sm  bg-white
           '
         placeholder='group category '  />
      </div>

      <div className='flex justify-center'>
         <label className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-5 
            text-xl font-bold
          '
          >class link *</label>
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-2 mt-1
          border border-slate-950  text-sm   bg-white
          '
         placeholder='group link '  />
      </div>

      <div className='flex justify-center'>
         <label className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-8 p-1 mt-5 
            text-xl font-bold
          '
          >class id *</label>
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-2 mt-1
          border border-slate-950 text-sm   bg-white
         '
         placeholder='group id'  />
      </div>

      <div className='flex justify-center'>
         <label className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-5 
            text-xl font-bold
          '
          >class handle *</label>
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-2 mt-1
          border border-slate-950 text-sm   bg-white
         '
         placeholder='group handle'  />
      </div>

      <div className='flex justify-center'>
         <label className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-5 
            text-xl font-bold
          '
          >date of creation *</label>
      </div>

      <div className='flex justify-center'>
         <input type="text" className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full h-8 p-2 mt-1
           border border-slate-950 text-sm   bg-white
          '
         placeholder='date of creating '  />
      </div>

      <div className='flex justify-center'>
         <label className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-5 
            text-xl font-bold
          '
          >class rules *</label>
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-60 p-1 mt-1
           border border-slate-950 text-sm  bg-white
          '
         placeholder='group rules '  />
      </div>

      <div className='flex justify-center'>
         <label className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-2 mt-5 
            text-xl font-bold
          '
          >class description *</label>
      </div>
       
      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-full m-2 h-60 p-1 mt-1
           border border-slate-950 text-sm  bg-white
          '
         placeholder='group description '  />
      </div>

       
      
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-4 font-bold text-xs
      hover:bg-blue-950 max-sm:4/5  rounded mt-5'>Customize class</button>
      </div>

     
      <div className='flex justify-center'>
      <button  type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-4 font-bold text-xs
      hover:bg-blue-950 max-sm:4/5  rounded mt-'>exit class
      </button>  
      </div>
       
      
      <div className='flex justify-center'>
      <button  type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-4 font-bold text-xs
      hover:bg-blue-950 max-sm:4/5  rounded mt-'>Block class
      </button>  
      </div>

      <div className='flex justify-center'>
      <button  type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-10 font-bold text-xs
      hover:bg-blue-950 max-sm:4/5  rounded mt-'>Delete class
      </button>  
      </div>
      
      

    </div>
  )
}

export default ClassInfo