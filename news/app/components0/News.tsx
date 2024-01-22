'use client'
import Link from "next/link"
import { useState } from "react";
import Banks from "../components/Banks/Banks";
import Billionaires from "../components/Billionaires/Billionaires";
import Books from "../components/Books/Books";
import Business from "../components/Business/Business";
import Celebrities from "../components/Celebrities/Celebrities";
import Ceo from "../components/Ceo/Ceo";
import Companies from "../components/Companies/Companies";
import Countries from "../components/Countries/Countries";
import Crypto from "../components/Crypto/Crypto";
import Currencies from "../components/Currencies/Currencies";
import Economics from "../components/Economics/Economics";
import Education from "../components/Education/Education";
import Fitness from "../components/Fitness/Fitness";
import HealthCare from "../components/HealthCare/HealthCare";
import Hospitals from "../components/Hospitals/Hospitals";
import Investing from "../components/Investing/Investing";
import Leadership from "../components/Leadership/Leadership";
import Money from "../components/Money/Money";
import Weather from "../components/Weather/Weather";
import War from "../components/War/War";
import Universities from "../components/Universities/Universities";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import Schools from "../components/Schools/Schools";
import Rich from "../components/Rich/Rich";
import Resources from "../components/Resources/Resources";
import Programming from "../components/Programming/Programming";
import Politics from "../components/Politics/Politics";
import Others from "../components/Others/Others";
import Motivation from "../components/Motivation/Motivation";
import Sports from "../components/Sports/Sports";
import Religion from "../components/Religion/Religion";
import AllNews from "../components/All/AllNews";





const News = () => {
  const initialRoute = localStorage.getItem('selectedRoute') || 'AllNews'
  const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute);


  return (
    <div className="pt-24 w-full ">
        <div className="border-4 border-indigo-900 bg-lime-400 py-5 w-full  ">
        <div className="flex justify-items-center overflow-x-auto  ">
               <Link href={{pathname:'/Profile'}}>
               <button type="button" className="text-lime-100 bg-indigo-900
                ml-3 rounded-xl h-10 w-auto p-2 sm:w-24 max-sm:mr-1 max-sm:ml-1
                 hover:bg-neutral-800 mr-5 ">Profile</button> </Link>
                
                <input type="text" className="flex-1 border-2 border-slate-950  w-full
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
            <div className="flex justify-items-center gap-4 overflow-x-auto overscroll-auto
             bg-cyan-500 text-lg
             py-3 border-4 border-purple-950  " >


              <button onClick={() => setSelectedRoute('AllNews')}
               type="submit" className="py-2 px-3 ml-6 hover:bg-blue-900 
               rounded-full  bg-slate-950 text-slate-50">AllNews</button>
              
              <button onClick={() => setSelectedRoute('Sports')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Sports</button>
              
              <button onClick={() => setSelectedRoute('Schools')}
               type="submit" className="py-2 px-3 hover:bg-blue-900 
              rounded-full  bg-slate-950 text-slate-50">Schools</button>
              
              <button onClick={() => setSelectedRoute('Education')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Education</button>
              
              <button onClick={() => setSelectedRoute('Universities')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Universities</button>
              
              <button onClick={() => setSelectedRoute('Fitness')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Fitness</button>
              
              <button onClick={() => setSelectedRoute('Countries')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Countries</button>
              
              <button onClick={() => setSelectedRoute('Politics')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Politics</button>
              
              <button onClick={() => setSelectedRoute('Leadership')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Leadership</button>
              
              <button onClick={() => setSelectedRoute('Billionaires')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Billionaires</button>
              
              <button onClick={() => setSelectedRoute('Money')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Money</button>

              <button onClick={() => setSelectedRoute('Programming')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Programming</button>
              
              <button onClick={() => setSelectedRoute('Banks')}
              type="submit" className="py-2 px-3 hover:bg-blue-900 
              rounded-full  bg-slate-950 text-slate-50">Banks</button>
              
              <button onClick={() => setSelectedRoute('HealthCare')}
               type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Healthcare</button>
              
              <button onClick={() => setSelectedRoute('Motivation')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Motivation</button>
              
              <button onClick={() => setSelectedRoute('Companies')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Companies</button>
              
              <button onClick={() => setSelectedRoute('SocialMedia')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">SocialMedia</button>

              <button onClick={() => setSelectedRoute('Ceo')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Ceo</button>

              <button onClick={() => setSelectedRoute('Crypto')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Crypto</button>

              <button onClick={() => setSelectedRoute('Hospitals')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Hospitals</button>

              <button onClick={() => setSelectedRoute('Currencies')}
              type="submit" className="py-2 px-3 hover:bg-blue-900 
              rounded-full  bg-slate-950 text-slate-50">Currencies</button>

              <button onClick={() => setSelectedRoute('Business')}
              type="submit" className="py-2 px-3 hover:bg-blue-900 
              rounded-full  bg-slate-950 text-slate-50">Business</button>

              <button onClick={() => setSelectedRoute('Investing')}
              type="submit" className="py-2 px-3 hover:bg-blue-900 
              rounded-full  bg-slate-950 text-slate-50">Investing</button>

              <button onClick={() => setSelectedRoute('War')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">War</button>

              <button onClick={() => setSelectedRoute('Weather')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Weather</button>

              <button onClick={() => setSelectedRoute('Books')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Books</button>

              <button onClick={() => setSelectedRoute('Celebrities')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Celebrities</button>

              <button onClick={() => setSelectedRoute('Economics')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Economics</button>

              <button onClick={() => setSelectedRoute('Resources')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Resources</button>

              <button onClick={() => setSelectedRoute('Religion')}
              type="submit" className="py-2 px-3 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Religions</button>

                 
              <button onClick={() => setSelectedRoute('Others')}
              type="submit" className="py-2 px-3 mr-6 hover:bg-blue-900
               rounded-full  bg-slate-950 text-slate-50">Others</button>
            
             
            </div>
          </div>

          <div>
        {selectedRoute === 'Banks' && <Banks />}
        {selectedRoute === 'Billionaires' && <Billionaires />}
        {selectedRoute === 'Books' && <Books />}
        {selectedRoute === 'Business' && <Business />}
        {selectedRoute === 'Celebrities' && <Celebrities />}
        {selectedRoute === 'Ceo' && <Ceo />}
        {selectedRoute === 'Companies' && <Companies />}
        {selectedRoute === 'Others' && <Others />}
        {selectedRoute === 'Countries' && <Countries />}
        {selectedRoute === 'Economics' && <Economics />}
        {selectedRoute === 'Education' && <Education />}      
        {selectedRoute === 'Fitness' && <Fitness />}
        {selectedRoute === 'HealthCare' && <HealthCare />}

        {selectedRoute === 'Hospitals' && <Hospitals />}
        {selectedRoute === 'Investing' && <Investing />}
        {selectedRoute === 'Leadership' && <Leadership />}
        {selectedRoute === 'Money' && <Money />}
        {selectedRoute === 'Motivation' && <Motivation />}
        {selectedRoute === 'Politics' && <Politics />}
        {selectedRoute === 'Programming' && <Programming />}
        {selectedRoute === 'Resources' && <Resources />}
        {selectedRoute === 'Rich' && <Rich />}
        {selectedRoute === 'Schools' && <Schools />}
        {selectedRoute === 'SocialMedia' && <SocialMedia />}      
        {selectedRoute === 'Sports' && <Sports />}
        {selectedRoute === 'Universities' && <Universities />}

        {selectedRoute === 'War' && <War />}
        {selectedRoute === 'Weather' && <Weather />}
        {selectedRoute === 'Crypto' && <Crypto />}
        {selectedRoute === 'Currencies' && <Currencies />}
        {selectedRoute === 'Religion' && <Religion />}
        {selectedRoute === 'AllNews' && <AllNews />}
       
        
        </div>
          
    </div>
  )
}

export default News


