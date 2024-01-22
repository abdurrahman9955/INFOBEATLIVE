import Link from 'next/link'
import React from 'react'

const DashBoard = () => {
  return (
    <div className='flex flex-col  py-32 bg-emerald-500 '>
        <div className="flex flex-col  ">
        <h1 className="flex justify-center text-3xl text-black font-bold max-sm:text-xl 
        sm:ml-10 max-sm:ml-3 ">
            verify your self to become writer/creator </h1>
             <div className='flex justify-center'>
            <h1 className='items-center text-xl text-black border-4 m-3 border-black h-auto max-w-xl lg:max-w-5xl
           mt-10  font-bold p-3'>
             this page was create in order to verify our users that they really qualify to become 
              creators, writers, or streamers, or other useful and important role in this platform,
              we will not only develop this platform for more creators or any information or blog, this 
              platform was create to be useful for every body who want to know and find the real time news,
              blogs, or any update about the specific what he need without wasting lot of time,
               in order to confirm that our user is qualify to publish any news/blog, or any 
              useful information, we need to verify our creators to know that all of our users are 
              legit and they are well qualified for any role they need to give and help other, and 
              as your position as a creator this will help us to recognize you better, and this will help 
              us to spread your content to your appropriate audience who may interest in your content, please
              provide concise and clear details required in this form, thank you for deciding to become creator 
              in this platform hope your enjoying journey with us,  you can give us rating or 
               <Link href={{pathname:'/Feedback'}}> <span className='text-blue-950'> 
                 Feedback </span> </Link> or to contact us directly 
                <Link href={{pathname:'/contact'}}> <span className='text-blue-950'>
                     Contact us </span> </Link> to our official contact page always we are 
            serving our users and creators we are very glad for becoming part of our users in this 
            platform, thanks so much hope today is your very nice day.

          </h1>
          </div>
         </div>

          <div className='flex justify-center'>
         <div className='flex flex-col lg:w-2/4  max-lg:w-2/4 max-md:w-5/6 mt-20 gap-10 font-bold 
              border-4  border-slate-950 sm:p-10 max-sm:p-5 '>

              <Link href={{pathname:'/Author'}}>
              <button type='button' className='w-full   bg-black text-white h-10
              rounded-2xl  hover:bg-violet-950 '>Become author</button></Link>

              <Link href={{pathname:'/Streamer'}}>
              <button type='button' className='w-full   bg-black text-white h-10
              rounded-2xl  hover:bg-violet-950'>Video Streamer</button></Link>

             <Link href={{pathname:'/Article_Writer'}}>
             <button type='button' className='w-full   bg-black text-white h-10
              rounded-xl  hover:bg-violet-950'> article writer </button></Link>

             <Link href={{pathname:'/Other_useful'}}>
             <button type='button' className='w-full   bg-black text-white h-10
             rounded-2xl  hover:bg-violet-950 '>Other useful</button></Link>

            <Link href={{pathname:'/Mentor_Teacher'}}>
            <button type='button' className='w-full   bg-black text-white h-10
             rounded-xl hover:bg-violet-950'>Mentor or Teacher</button></Link>
     </div>
     </div>

    </div>
  )
}

export default DashBoard