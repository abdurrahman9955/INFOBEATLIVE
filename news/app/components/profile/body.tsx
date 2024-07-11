import Link from "next/link"
import { FaUser } from "react-icons/fa"
 
const body = () => {
  return (
    <div className="flex justify-center sm:pt-5 bg-emerald-500 border-2 border-slate-950 
     min-h-screen">
         
         <div className="flex  flex-col  bg-emerald-100 border-2 border-orange-950
        max-md:w-5/6 max-sm:w-full   sm:mb-10 max-lg:w-4/6 lg:p-10">
         <h1 className="flex justify-center text-2xl text-green-950 font-bold  
         max-sm:text-xl">
        My profile
      </h1>
      <div className="flex justify-center">
      <div className="   w-80 h-80 mt-10 border-4 border-orange-950
        bg-orange-100 rounded-full ">
        <FaUser className="flex justify-center w-32 h-32 ml-24 mt-16  " />
        <h1 className="flex justify-center  text-orange-950 text-xl font-bold 
        ">Upload Photo </h1> 
        
        </div>
        </div>
       
       
        <h1 className="flex justify-center text-xl text-orange-700 mb-10 mt-2 
         font-bold  max-sm:text-lg">profile name</h1>

        <div className="flex flex-row justify-between   ml-5 mb-5 md:ml-6
         md:gap-4 md:mr-5">
         <Link href={{pathname:'/Post'}}>
         <button type="button" className="text-sm text-white bg-black px-10 h-7 mt-5
         rounded-sm shadow-2xl max-sm:px-4 hover:bg-orange-600 "> All post
         </button></Link>

         <Link href={{pathname:'/following'}}>
         <button type="button" className="text-sm text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-600  ">following
         </button></Link>

         <Link href={{pathname:'/followers'}}>
         <button type="button" className="text-sm text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-600 max-lg:mr-3 ">followers
         </button></Link>
         </div>

        

         <div className="flex flex-row justify-between   ml-5 mb-5 md:ml-6
         md:gap-4 md:mr-5">
          <Link href={{pathname:'/massage'}}>
         <button type="button" className="text-sm text-black bg-slate-300 px-10 h-7 mt-5
         rounded-sm shadow-2xl max-sm:px-4 hover:bg-orange-200 border-2 border-slate-950
         font-bold ml-2 ">0
         </button></Link>
        
         <button type="button" className="text-sm  text-black bg-slate-300 px-5 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-200 border-2 border-slate-950 
         font-bold ml-3">0 
         </button>

         <Link href={{pathname:'/more'}}>
         <button type="button" className="text-sm  text-black bg-slate-300 px-10 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-200 max-lg:mr-3 border-2 border-slate-950
         font-bold  ">0
         </button></Link>

         </div>


         <div className="flex flex-row justify-between   ml-5 mb-5 md:ml-6
         md:gap-4 md:mr-5">
          <Link href={{pathname:'/massage'}}>
         <button type="button" className="text-sm text-white bg-black px-10 h-7 mt-5
         rounded-sm shadow-2xl max-sm:px-4 hover:bg-orange-500 ">massage
         </button></Link>
        
         <Link href={{pathname:'/public'}}>
         <button type="button" className="text-sm text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-500  ">public 
         </button></Link>

         <Link href={{pathname:'/more'}}>
         <button type="button" className="text-sm text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-500 max-lg:mr-3 ">more
         </button></Link>

         </div>

         <div className="flex flex-row justify-between   ml-5 mb-5 md:ml-6
         md:gap-4 md:mr-5">

          <Link href={{pathname:'/private'}}>
         <button type="button" className="text-sm text-white bg-black px-10 h-7 mt-5
         rounded-sm shadow-2xl max-sm:px-4 hover:bg-orange-600 ">private
         </button></Link>

         <Link href={{pathname:'Notifications'}}>
         <button type="button" className="text-sm text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-600 max-lg:mr-3 ">Note
         </button></Link>

         <Link href={{pathname:'/Verify'}}>
         <button type="button" className="text-sm text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-600 max-lg:mr-3 ">verify
         </button></Link>

         </div>

       </div>
      </div>
   

      
      
  )
}

export default body