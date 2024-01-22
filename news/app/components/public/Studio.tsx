import Link from "next/link"
import Select2 from "@/app/components0/Select/Select2"


const Studio = () => {
  return (
    <div className='flex flex-col w-full h-auto pt-10 bg-red-500 border-4 border-black 
     '>
      <div className="flex justify-center  text-3xl text-black font-bold"> <h1>
        crate your studio here </h1></div>

      <div className="flex justify-center text-xl text-black font-bold mt-5 mb-10 ">
         <h1 className="max-w-2xl border-4 border-black h-auto p-2 m-3">
        this studio will be available for every body in this platform, once you create it 
        you can upload articles or  other relevant, and you can monetize 
        your content if  you fullfil the requirements, please create your 
        studio to be useful for your audience and readers, if you need to upload books 
        or newspaper magazine only what to do is to go back to the library, or channel if 
        your content is a video and shots , and you can visit 
        <Link href={{pathname:'/privacy'}} className="text-blue-900"> privacy and policy page </Link>
        to know more about this platform, thanks so much for joining us.
        </h1></div>
      
        <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5 
          border-4 border-slate-950  text-xl  bg-white
          '
         placeholder='your studio name'  />
      </div>

      

      <div className='flex justify-center'>
         <input type='text' className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-12 p-2 mt-5 
         border-4 border-slate-950  text-xl  bg-white
           '
         placeholder='purpose of your studio'  />
      </div>
      

      <div className='flex justify-center '>
      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-auto mt-5  text-xl 
        focus:outline-none focus:ring p-2
        focus:ring-slate-950 bg-white text-left pb-2
        border-4 border-slate-950'>
          <h1 className='flex justify-between '>
             generate a link
          
       <button className=' w-auto px-3  bg-red-600  rounded 
        text-white hover:bg-green-600'>generate</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-auto mt-5  text-xl 
        focus:outline-none focus:ring p-2
        focus:ring-slate-950 bg-white text-left pb-2
        border-4 border-slate-950'>
          <h1 className='flex justify-between '>
             Create an id
          
       <button className=' w-auto px-3  bg-red-600  rounded
        text-white hover:bg-green-600'>Create</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-auto  mt-5  text-xl 
        focus:outline-none focus:ring p-2
        focus:ring-slate-950 bg-white text-left pb-2
        border-4 border-slate-950'>
          <h1 className='flex justify-between '>
             Create a handle
          
       <button className=' w-auto px-3  bg-red-600  rounded
        text-white hover:bg-green-700'>create</button>
       </h1>
      </span>
      </div>


      <div className='flex justify-center'>
         <button className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-auto  mt-5
          border-4 border-slate-950  text-xl bg-white
          '
         >  <Select2 /> </button>
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-40 p-2 mt-5
           border-4 border-slate-950 text-xl    bg-white
          '
         placeholder='write your keyword'  />
      </div>

      
      <div className='flex justify-center'>
         <textarea className='lg:w-1/3 max-lg:w-2/4 max-sm:w-3/4 h-60 p-2 mt-5
           border-4 border-slate-950 text-xl     bg-white
          '
         placeholder='write the description about your studio '  />
      </div>
       
      <Link href={{pathname:'/Studio_Profile'}}>
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-10 mb-3 font-bold
      hover:bg-purple-950 max-sm:4/5  rounded mt-10'>Validate Studio</button>
      </div></Link>

       <Link href={{pathname:'/Manage_Studio'}}>
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-10 mb-10 font-bold
      hover:bg-purple-950 max-sm:4/5  rounded mt-'>Create Studio</button>
      </div></Link>
      

    </div>
  )
}

export default Studio