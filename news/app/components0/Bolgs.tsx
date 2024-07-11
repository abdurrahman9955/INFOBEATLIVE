'use client'
import Link from "next/link"
import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
import Banks1 from "../components/Banks/Banks1";
import Billionaires1 from "../components/Billionaires/Billionaires1";
import Books1 from "../components/Books/Books1";
import Business1 from "../components/Business/Business1";
import Celebrities1 from "../components/Celebrities/Celebrities";
import Ceo1 from "../components/Ceo/Ceo1";
import Companies1 from "../components/Companies/Companies1";
import Countries1 from "../components/Countries/Countries1";
import Crypto1 from "../components/Crypto/Crypto1";
import Currencies1 from "../components/Currencies/Currencies1";
import Economics1 from "../components/Economics/Economics1";
import Education1 from "../components/Education/Education1";
import Fitness1 from "../components/Fitness/Fitness1";
import HealthCare1 from "../components/HealthCare/HealthCare1";
import Hospitals1 from "../components/Hospitals/Hospitals1";
import Investing1 from "../components/Investing/Investing1";
import Leadership1 from "../components/Leadership/Leadership1";
import Money1 from "../components/Money/Money1";
import Weather1 from "../components/Weather/Weather1";
import War1 from "../components/War/War1";
import Universities1 from "../components/Universities/Universities1";
import SocialMedia1 from "../components/SocialMedia/SocialMedia1";
import Schools1 from "../components/Schools/Schools1";
import Rich1 from "../components/Rich/Rich1";
import Resources1 from "../components/Resources/Resources1";
import Programming1 from "../components/Programming/Programming1";
import Politics1 from "../components/Politics/Politics1";
import Others1 from "../components/Others/Others1";
import Motivation1 from "../components/Motivation/Motivation1";
import Sports1 from "../components/Sports/Sport1";
import Religion1 from "../components/Religion/Religion1";
import AllBlogs from "../components/All/AllBlogs";



const Blogs = () => {

  const [selectedRoute, setSelectedRoute] = useState<string>('AllBlogs');


  return (
    <div className=" w-full ">
        <div className="border-2 border-indigo-900 bg-lime-400 py-1 w-full  ">
        <div className="flex justify-items-center overflow-x-auto  ">
               <Link href={{pathname:'/Profile'}}>
               <button type="button" className="text-lime-100 bg-purple-950
                ml-1 rounded h-7 w-auto p-1 sm:w-24 max-sm:mr-1 max-sm:ml-1 text-xs
                 hover:bg-indigo-900 mr-2 ">Profile</button> </Link>
                
                <input type="text" className="flex-1 border border-slate-950  w-full
                rounded-l-full max-sm:rounded-full h-7 pl-5 font-bold text-xs"
                placeholder="search for your favorite news/blogs  "  /> 
                
                <button type="submit" className="bg-red-900 ml-0 text-slate-200
                rounded-r-full px-4 max-sm:hidden text-xs h-7  ">search</button>

                 <Link href={{pathname: '/upload'}}>
                 <button type="button" className="text-lime-100 bg-purple-950
                ml-2 rounded 2 mr-1 w-auto p-1 max-sm:ml-1 max-sm:mr-1 h-7 text-xs
                hover:bg-indigo-900 sm:w-24
                 ">Publish</button>
                 </Link>
           </div>
           </div>
        <div>
            <div className="flex justify-between gap-1 overflow-x-auto overscroll-auto
             bg-yellow-400 text-xs
             py-1 border-2 border-purple-950  " >
             
              <button onClick={() => setSelectedRoute('AllBlogs')}
               type="submit" className="h-7 ml-1 px-3 hover:bg-blue-800 
               rounded-sm  bg-purple-950 text-slate-50">AllBlogs</button>

              <button onClick={() => setSelectedRoute('Sports1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Sports</button>

              <button onClick={() => setSelectedRoute('Schools1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Schools</button>

              <button onClick={() => setSelectedRoute('Education1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm bg-purple-950 text-slate-50">Education</button>

              <button onClick={() => setSelectedRoute('Universities1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm bg-purple-950 text-slate-50">Universities</button>

              <button onClick={() => setSelectedRoute('Fitness1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm bg-purple-950 text-slate-50">Fitness</button>

              <button onClick={() => setSelectedRoute('Countries1')}
               type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm  bg-purple-950 text-slate-50">Countries</button>

              <button onClick={() => setSelectedRoute('Politics1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm bg-purple-950 text-slate-50">Politics</button>

              <button onClick={() => setSelectedRoute('Leadership1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Leadership</button>

              <button onClick={() => setSelectedRoute('Billionaires1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm  bg-purple-950 text-slate-50">Billionaires</button>

              <button onClick={() => setSelectedRoute('Money1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Money</button>

              <button onClick={() => setSelectedRoute('Banks1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Banks</button>

              <button onClick={() => setSelectedRoute('HealthCare1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Healthcare</button>

              <button onClick={() => setSelectedRoute('Motivation1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Motivation</button>

              <button onClick={() => setSelectedRoute('Companies1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Companies</button>

              <button onClick={() => setSelectedRoute('Programming1')}
              type="submit" className="h-7  px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Programming</button>
            

              <button onClick={() => setSelectedRoute('SocialMedia1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">SocialMedia</button>

              <button onClick={() => setSelectedRoute('Ceo1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Ceo</button>

              <button onClick={() => setSelectedRoute('Crypto1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Crypto</button>

              <button onClick={() => setSelectedRoute('Hospitals1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Hospitals</button>

              <button onClick={() => setSelectedRoute('Currencies1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800
               rounded-sm  bg-purple-950 text-slate-50">Currencies</button>

              <button onClick={() => setSelectedRoute('Business1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm bg-purple-950 text-slate-50">Business</button>

              <button onClick={() => setSelectedRoute('Investing1')}
               type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm  bg-purple-950 text-slate-50">Investing</button>

              <button onClick={() => setSelectedRoute('War1')}
               type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm  bg-purple-950 text-slate-50">War</button>

              <button onClick={() => setSelectedRoute('Weather1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm  bg-purple-950 text-slate-50">Weather</button>

              <button onClick={() => setSelectedRoute('Books1')}
               type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm  bg-purple-950 text-slate-50">Books</button>

              <button onClick={() => setSelectedRoute('Celebrities1')}
               type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm  bg-purple-950 text-slate-50">Celebrities</button>

              <button onClick={() => setSelectedRoute('Economics1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm  bg-purple-950 text-slate-50">Economics</button>

              <button onClick={() => setSelectedRoute('Resources1')}
              type="submit" className="h-7 px-3 hover:bg-blue-900
               rounded-sm bg-purple-950 text-slate-50">Resources</button>

              <button onClick={() => setSelectedRoute('Religion1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800 
              rounded-sm  bg-purple-950 text-slate-50">Religions</button>

              <button onClick={() => setSelectedRoute('Others1')}
              type="submit" className="h-7 px-3 hover:bg-blue-800 mr-1
              rounded-sm  bg-purple-950 text-slate-50">Others</button>
            
            </div>
          </div>

          
          <div>
        {selectedRoute === 'Banks1' && <Banks1 />}
        {selectedRoute === 'Billionaires1' && <Billionaires1 />}
        {selectedRoute === 'Books1' && <Books1 />}
        {selectedRoute === 'Business1' && <Business1 />}
        {selectedRoute === 'Celebrities1' && <Celebrities1 />}
        {selectedRoute === 'Ceo1' && <Ceo1 />}
        {selectedRoute === 'Companies1' && <Companies1 />}
        {selectedRoute === 'Others1' && <Others1 />}
        {selectedRoute === 'Countries1' && <Countries1 />}
        {selectedRoute === 'Economics1' && <Economics1 />}
        {selectedRoute === 'Education1' && <Education1 />}      
        {selectedRoute === 'Fitness1' && <Fitness1 />}
        {selectedRoute === 'HealthCare1' && <HealthCare1 />}

        {selectedRoute === 'Hospitals1' && <Hospitals1 />}
        {selectedRoute === 'Investing1' && <Investing1  />}
        {selectedRoute === 'Leadership1' && <Leadership1 />}
        {selectedRoute === 'Money1' && <Money1 />}
        {selectedRoute === 'Motivation1' && <Motivation1 />}
        {selectedRoute === 'Politics1' && <Politics1 />}
        {selectedRoute === 'Programming1' && <Programming1 />}
        {selectedRoute === 'Resources1' && <Resources1 />}
        {selectedRoute === 'Rich1' && <Rich1 />}
        {selectedRoute === 'Schools1' && <Schools1 />}
        {selectedRoute === 'SocialMedia1' && <SocialMedia1 />}      
        {selectedRoute === 'Sports1' && <Sports1 />}
        {selectedRoute === 'Universities1' && <Universities1 />}

        {selectedRoute === 'War1' && <War1 />}
        {selectedRoute === 'Weather1' && <Weather1 />}
        {selectedRoute === 'Crypto1' && <Crypto1 />}
        {selectedRoute === 'Currencies1' && <Currencies1 />}
        {selectedRoute === 'Religion1' && <Religion1 />}
        {selectedRoute === 'AllBlogs' && <AllBlogs />}
       
        
        </div>
          
    </div>
  )
}

export default Blogs



