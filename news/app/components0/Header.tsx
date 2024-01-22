'use client'
import Link from "next/link"
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import Home0 from "./Home/Articles/Home0";
import Home1 from "./Home/Channels/Home1";
import Home2 from "./Home/Classes/Home2";
import Home3 from "./Home/Groups/Home3";
import Home4 from "./Home/Home/Home4";
import Home5 from "./Home/Libraries/Home5";
import Home6 from "./Home/Shorts/Home6";
import Home7 from "./Home/Stores/Home7";
import Home8 from "./Home/Studios/Home8";
import Home9 from "./Home/Videos/Home9";
import Home10 from "./Home/Live/Home10";
import Home12 from "./Home/Posting/Home12";
import Home13 from "./Home/News/Home13";
import Home14 from "./Home/Blogs/Home14";
import Home15 from "./Home/Books/Home15";
import Home16 from "./Home/Television/Home16";
import Home17 from "./Home/Radio/Home17";
import Home18 from "./Home/Podcast/Home18";
import Home19 from "./Home/Media/Home19";
import User1 from "./Home/Users/User1";





const Header = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'Home4'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);


  return (
    <div className="pt-24 w-full ">
        <div className="border-4 border-indigo-900 bg-lime-400 py-5 w-full  ">
        <div className="flex justify-items-center overflow-x-auto  ">
               <Link href={{pathname:'/Profile'}}>
               <button type="button" className="text-lime-100 bg-indigo-900
                ml-3 rounded-xl h-10 w-auto p-2 sm:w-24 max-sm:mr-1 max-sm:ml-1
                 hover:bg-neutral-800 mr-5 ">Profile</button> </Link>
                
                <input type="text" className="flex-1 border-2 border-slate-950 
                 w-full
                rounded-l-full max-sm:rounded-full h-10 pl-5 font-bold text-xl"
                placeholder="search for your favorite news/blogs  "  /> 
                
                <button type="submit" className="bg-red-900 ml-0 text-slate-200
                rounded-r-full px-4 max-sm:hidden  ">search</button>

                 <Link href={{pathname: '/upload'}}>
                 <button type="button" className="text-lime-100 bg-indigo-900
                ml-5 rounded-xl 2 mr-3 w-auto p-2 max-sm:ml-1 max-sm:mr-1
                hover:bg-neutral-800 sm:w-24
                 ">Publish</button>
                 </Link>
           </div>
           </div>
        <div>
            <div className="flex justify-between gap-4 overflow-x-auto overscroll-auto
             bg-orange-500 text-xl
             py-3 border-4 border-purple-950  " >


             
              <button onClick={() => setSelectedRoute('Home4')}
              type="submit" className="h-11 px-10 ml-4 hover:bg-indigo-900 
               rounded-xl  bg-slate-950 text-slate-50">Home</button>

              <button onClick={() => setSelectedRoute('Home12')}
              type="submit" className="h-11 px-10  hover:bg-indigo-900 
               rounded-xl  bg-slate-950 text-slate-50">AllPost</button>

              <button onClick={() => setSelectedRoute('Home13')}
               type="submit" className="h-11 px-10 hover:bg-indigo-900 
              rounded-xl  bg-slate-950 text-slate-50">News</button>
              
              <button onClick={() => setSelectedRoute('Home14')}
              type="submit" className="h-11 px-10 hover:bg-indigo-900 
              rounded-xl  bg-slate-950 text-slate-50">Blogs</button>
              
              <button onClick={() => setSelectedRoute('Home9')}
               type="submit" className="h-11 px-10 hover:bg-indigo-900 
              rounded-xl  bg-slate-950 text-slate-50">Videos</button>
              
              <button onClick={() => setSelectedRoute('Home6')}
              type="submit" className="h-11 px-10 hover:bg-indigo-900 
              rounded-xl  bg-slate-950 text-slate-50">Shorts</button>
             
              <button onClick={() => setSelectedRoute('Home0')}
              type="submit" className="h-11 px-10 hover:bg-indigo-900 
              rounded-xl  bg-slate-950 text-slate-50">Articles</button>

              <button onClick={() => setSelectedRoute('Home15')}
              type="submit" className="h-11 px-10 hover:bg-indigo-900 
              rounded-xl  bg-slate-950 text-slate-50">Books</button>

             <button onClick={() => setSelectedRoute('Home10')}
              type="submit" className="h-11 px-10 hover:bg-indigo-900
               rounded-xl  bg-slate-950 text-slate-50">Live</button>

              <button onClick={() => setSelectedRoute('User1')}
              type="submit" className="h-11 px-10 hover:bg-indigo-900
               rounded-xl  bg-slate-950 text-slate-50">Peoples</button>
             
              <button onClick={() => setSelectedRoute('Home3')}
               type="submit" className="h-11 px-10 pox-3 hover:bg-indigo-900 
              rounded-xl  bg-slate-950 text-slate-50">Group</button>
             
              <button onClick={() => setSelectedRoute('Home2')}
              type="submit" className="h-11 px-10 hover:bg-indigo-900 
              rounded-xl  bg-slate-950 text-slate-50">Classes</button>
              
              <button onClick={() => setSelectedRoute('Home1')}
              type="submit" className="h-11  px-10 hover:bg-indigo-900
               rounded-xl  bg-slate-950 text-slate-50">Channels</button>
              
              <button onClick={() => setSelectedRoute('Home5')}
              type="submit" className="h-11 px-10 hover:bg-indigo-900
               rounded-xl  bg-slate-950 text-slate-50">Libraries</button>
              
              <button onClick={() => setSelectedRoute('Home8')}
              type="submit" className="h-11 px-10 hover:bg-indigo-900
               rounded-xl mr-4 bg-slate-950 text-slate-50">Studio</button> 
             
            </div>
           
          </div>

          <div> 
        {selectedRoute === 'Home0' && <Home0 />}
        {selectedRoute === 'Home1' && <Home1 />}
        {selectedRoute === 'Home2' && <Home2 />}
        {selectedRoute === 'Home3' && <Home3 />}
        {selectedRoute === 'Home4' && <Home4 />}
        {selectedRoute === 'Home5' && <Home5 />}
        {selectedRoute === 'Home6' && <Home6 />}
        {selectedRoute === 'Home7' && <Home7 />}      
        {selectedRoute === 'Home8' && <Home8 />}
        {selectedRoute === 'Home9' && <Home9 />}
        {selectedRoute === 'Home10' && <Home10 />}
        {selectedRoute === 'Home12' && <Home12 />}
        {selectedRoute === 'Home13' && <Home13 />}
        {selectedRoute === 'Home14' && <Home14 />}
        {selectedRoute === 'Home15' && <Home15 />}

        {selectedRoute === 'Home16' && <Home16 />}
        {selectedRoute === 'Home17' && <Home17 />}
        {selectedRoute === 'Home18' && <Home18 />}
        {selectedRoute === 'Home19' && <Home19 />}
        {selectedRoute === 'User1' && <User1 />}
       
          </div>
         
          
    </div>
  )
}

export default Header


