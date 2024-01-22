import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
      <nav className="  h-12 shadow-md 
       w-full mr-10 ">
          <div className=" " >
                  <div className="  ">
                  
                  
                  <div className=" flex flex-row  gap-0 max-md:gap-0
                   " 
              >
                  
                 <input type="text" className="flex justify-center border-4 border-pink-950  
                  rounded-l-full  flex-1  ml-5 pl-5 max-md:mx-3   h-12 bg-white
                  max-sm:rounded-full max-sm:w-auto
                  " 
                  placeholder="search here  "  /> 
                  <button className="w-24 max-sm:w-12  h-12 bg-yellow-700 sm:hidden
                  rounded text-white p-2  hover:bg-slate-700"><FaSearch
                   className='ml-2' /></button>
                  
                  <button type="submit" className="bg-yellow-700  text-slate-200
                  rounded-r-full px-4  h-12 border border-red-950 max-sm:hidden
                  font-bold   hover:bg-slate-700 ">search</button>
             
         </div>
                
        </div>
         </div>
         
      </nav>
    )
  }
  
  export default Search
  
  
  
  
  