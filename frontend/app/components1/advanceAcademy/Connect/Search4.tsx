import { FaSearch } from 'react-icons/fa';

const Search4 = () => {
    return (
      <nav className="  h-8 shadow-md 
       w-full mr-7 ">
          <div className=" " >
                  <div className="  ">
                  
                  
                  <div className=" flex flex-row  gap-0 max-md:gap-0
                   " 
              >
                
                 <input type="text" className="flex justify-center border border-pink-950  
                  rounded-l-full  flex-1  ml-5 pl-5 max-md:mx-3   h-7 bg-white
                  max-sm:rounded-full max-sm:w-auto
                  " 
                  placeholder="search here  "  /> 
                  <button className="w-24 max-sm:w-12  h-7 bg-slate-950 sm:hidden
                  rounded text-white p-2 text-sm hover:bg-orange-950"><FaSearch
                   className='ml-2' /></button>
                 
                  <button type="submit" className="bg-orange-950  text-slate-200
                  rounded-r-full px-4 text-xs h-7 border border-red-950 max-sm:hidden
                  font-bold   hover:bg-orange-950 ">search</button>
             
         </div>
                
        </div>
        </div>
         
      </nav>
    )
  }
  
  export default Search4
  
  
  
  
  