import Link from "next/link"

const Header = () => {
  return (
    <div className="pt-24">
        <div className="border-4 border-indigo-900 bg-lime-400 py-5">
        <div className="flex justify-items-center overflow-x-auto ">
               <Link href={{pathname:'/Profile'}}>
               <button type="button" className="text-lime-100 bg-indigo-900
                ml-3 rounded-xl  px-5 md:py-2 md:px-10 mr-5  max-sm:px-3 max-sm:py-2
                lg:px-7 hover:bg-neutral-800 md:mr-10 ">profile</button> </Link>
                
                <input type="text" className="flex-1 border-2 border-slate-950  px-28
                rounded-l-full  max-sm:px-5 max-sm:rounded-r-full   max-[450]:px-3 "
                placeholder="search for your favorite news  "  /> 
                
                <button type="submit" className="bg-red-800 ml-0 text-slate-200
                rounded-r-full px-4 max-sm:hidden  ">search</button>

                 <Link href={{pathname: '/upload'}}>
                 <button type="button" className="text-lime-100 bg-indigo-900
                ml-3 rounded-xl px-5 md:py-2 md:px-10 md:ml-20 max-sm:px-2 mr-1 
                max-sm:py-2 hover:bg-neutral-800 
                 ">Publish</button>
                 </Link>
           </div>
           </div>
        <div>
            <div className="flex justify-between border-4 border-green-950
             py-3 gap-4 overflow-x-auto overscroll-auto bg-yellow-400 
               " >
              <button type="submit" className="py-2 px-3 hover:bg-blue-800  rounded-full  bg-slate-950 text-slate-50">AllNews</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">AcademicHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">ChildrenHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">CommunityHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">GeneralHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">GovernmentHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">MaternityHospital</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">NonProfitHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">RuralHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">TeachingHospital</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">TertiaryHospital</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">VeteransHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-800 rounded-full  bg-slate-950 text-slate-50">OthersHospitals</button>
             
              <button type="submit" className="py-2 px-3 hover:bg-blue-950  rounded-full  bg-purple-950 text-slate-50">AllBlogs</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">AcademicHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">ChildrenHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">CommunityHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">GeneralHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">GovernmentHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">MaternityHospital</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">NonProfitHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">RuralHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">TeachingHospital</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">TertiaryHospital</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">VeteransHospitals</button>
              <button type="submit" className="py-2 px-3 hover:bg-blue-950 rounded-full  bg-purple-950 text-slate-50">OthersHospitals</button>

            </div>
          </div>
          
    </div>
  )
}

export default Header



