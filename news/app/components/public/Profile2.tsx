import Link from "next/link"
import { FaUser } from "react-icons/fa"
 
const Profile2 = () => {
  return (
    <div className="flex justify-center  bg-orange-500 border-2 border-slate-950 
     min-h-screen sm:pt-5 ">
        
         <div className="flex  flex-col  bg-white border-2 border-orange-900
        max-md:w-5/6 max-sm:w-full sm:mb-10 lg:p-10">
         <h1 className="flex justify-center text-xl text-green-950 font-bold  max-sm:text-xl">
        Library profile
      </h1>
      <div className="flex justify-center">
      <div className="   w-80 h-80 mt-10 border-2 border-orange-600
        bg-orange-100 rounded-full ">
        <FaUser className="flex justify-center w-32 h-32 ml-24 mt-16  " />
        <h1 className="flex justify-center  text-orange-950 text-xl font-bold 
        ">Library logo </h1> 
        
        </div>
        </div>
       
        
        <h1 className="flex justify-center text-xl text-orange-700 mb-10 mt-2 
         font-bold  max-sm:text-lg">Library name</h1>

        <div className="flex flex-row justify-between   ml-5 mb-5 md:ml-6
         md:gap-4 md:mr-5">
         <Link href={{pathname:'/upload'}}>
         <button type="button" className="text-xs text-white bg-black px-10 h-7 mt-5
         rounded-sm shadow-2xl max-sm:px-4 hover:bg-orange-600 "> Published
         </button></Link>

         <Link href={{pathname:'/Library_Profile/Massage'}}>
         <button type="button" className="text-xs text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-600  ">massage
         </button></Link>

         <Link href={{pathname:'/Library_Profile/Subscribers'}}>
         <button type="button" className="text-xs text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-600 max-lg:mr-3 ">Subscribers
         </button></Link>
         </div>

        

         <div className="flex flex-row justify-between   ml-5 mb-5 md:ml-6
         md:gap-4 md:mr-5">
          <Link href={{pathname:'/massage'}}>
         <button type="button" className="text-xs text-black bg-slate-300 px-10 h-7 mt-5
         rounded-sm shadow-2xl max-sm:px-4 hover:bg-orange-200 border border-slate-950
         font-bold ml-2 ">0
         </button></Link>
        
         <button type="button" className="text-xs  text-black bg-slate-300 px-5 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-200 border border-slate-950 
         font-bold ml-3">0 
         </button>

         <Link href={{pathname:'/more'}}>
         <button type="button" className="text-xs  text-black bg-slate-300 px-10 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-200 max-lg:mr-3 border border-slate-950
         font-bold  ">0
         </button></Link>

         </div>


         <div className="flex flex-row justify-between   ml-5 mb-5 md:ml-6
         md:gap-4 md:mr-5">
          <Link href={{pathname:'/Library_Profile/Manage'}}>
         <button type="button" className="text-xs text-white bg-black px-10 h-7 mt-5
         rounded-sm shadow-2xl max-sm:px-4 hover:bg-orange-500 ">manage
         </button></Link>
        
         <Link href={{pathname:'/Manage_Library'}}>
         <button type="button" className="text-xs text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-500  ">details 
         </button></Link>

         <Link href={{pathname:'/more'}}>
         <button type="button" className="text-xs text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-500 max-lg:mr-3 ">about
         </button></Link>

         </div>

         <div className="flex flex-row justify-between   ml-5 mb-5 md:ml-6
         md:gap-4 md:mr-5">

          <Link href={{pathname:'/Earning'}}>
         <button type="button" className="text-xs text-white bg-black px-10 h-7 mt-5
         rounded-sm shadow-2xl max-sm:px-4 hover:bg-orange-600 ">earning
         </button></Link>

         <Link href={{pathname:'/Verify'}}>
         <button type="button" className="text-xs text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-600  ">help
         </button></Link>

         <Link href={{pathname:'/verify'}}>
         <button type="button" className="text-xs text-white bg-black px-4 h-7 mt-5
         rounded-sm shadow-2xl hover:bg-orange-600 max-lg:mr-3 ">withdraw 
         </button></Link>
         </div>

       </div>
      </div>
   

      
      
  )
}

export default Profile2