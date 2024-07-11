import Link from "next/link"
import Select1 from "@/app/components0/Select/Select1"


const Classes = () => {
  return (
    <div className='flex flex-col w-full h-auto pt-5 bg-orange-500 border-2 border-black  '>
      <div className="flex justify-center  text-xl text-black font-bold"> <h1>
        crate your library here </h1></div>

      <div className="flex justify-center text-sm text-black font-bold mt-5 mb-5 ">
         <h1 className="max-w-2xl border-2 border-black h-auto p-1 m-2">
        this library will be available for every body in this platform, once you create it 
        you can upload books or news-paper and magazines or relate, and you can monetize 
        your content if  you fullfil the requirements, please create your 
        library to be useful for your readers and researchers, if you need to upload videos 
        or short  only what to do is to go back to the channel, or studio if 
        your content is an articles and blogs or pdf,  and you can visit 
        <Link href={{pathname:'/privacy'}} className="text-blue-900"> privacy and policy page </Link>
        to know more about this platform, thanks so much for joining us.
        </h1></div>
      
        <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-5 
          border-2 border-slate-950  text-sm  bg-white
          '
         placeholder='your library name'  />
      </div>

      <div className='flex justify-center'>
         <input type='text' className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-8 p-1 mt-5 
         border-2 border-slate-950  text-sm  bg-white
           '
         placeholder='purpose of your library'  />
      </div>
      

      <div className='flex justify-center '>
      <span  className=' lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-auto mt-5  text-sm
        p-1 bg-white text-left 
        border-2 border-slate-950'>
          <h1 className='flex justify-between '>
             generate a link
          
       <button className=' w-auto px-3  bg-orange-600  rounded 
        text-white hover:bg-purple-70s0'>generate</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-auto mt-5  text-sm 
        p-1 bg-white text-left 
        border-2 border-slate-950'>
          <h1 className='flex justify-between '>
             Create an id
          
       <button className=' w-auto px-3  bg-orange-600  rounded
        text-white hover:bg-purple-700'>Create</button>
       </h1>
      </span>
      </div>

      <div className='flex justify-center '>
      <span  className=' lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-auto  mt-5  text-sm
        p-1 bg-white text-left 
        border-2 border-slate-950'>
          <h1 className='flex justify-between '>
             Create a handle
          
       <button className=' w-auto px-3  bg-orange-600  rounded
        text-white hover:bg-purple-700'>create</button>
       </h1>
      </span>
      </div>


      <div className='flex justify-center'>
         <button className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-auto  mt-5
          border-2 border-slate-950  text-sm bg-white
          '
         >  <Select1 /> </button>
      </div>

      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-40 p-1 mt-5
           border-2 border-slate-950 text-sm   bg-white
          '
         placeholder='write your keyword'  />
      </div>

      
      <div className='flex justify-center'>
         <textarea className='lg:w-2/5 max-lg:w-2/4 max-sm:w-full m-2 h-60 p-1 mt-5
           border-2 border-slate-950 text-sm     bg-white
          '
         placeholder='write the description about your library '  />
      </div>
       
      <Link href={{pathname:'/Library_Profile'}}>  
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-3 font-bold text-xs
      hover:bg-yellow-950 max-sm:4/5  rounded mt-5'>Validate Library</button>
      </div></Link>

      <Link href={{pathname:'/Manage_Library'}}>
      <div className='flex justify-center'>
      <button type='submit' className=' text-slate-50 bg-slate-950
      lg:w-1/4 max-lg:w-2/5 max-sm:w-3/5 h-7 mb-10 font-bold text-xs
      hover:bg-yellow-950 max-sm:4/5  rounded mt-'>Create Library</button>
      </div></Link>
      

    </div>
  )
}

export default Classes