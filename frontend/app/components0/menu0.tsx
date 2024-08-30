import React, { useState } from 'react'

import Group from "../components/academy/Group"
import Classes from "../components/academy/Classes"
import Studio from "../components/academy/Studio"
import GoLive from "../components/academy/GoLive"

const Menu = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>('');


  return (
    <nav className="fixed top-40 left-0 px-5  shadow-md z-10 bg-yellow-950 
    border-4 border-slate-300  overflow-y-auto text-white">
        <div className="flex flex-row " >
               
                <ul className="flex flex-col p-2 gap-5 " >
                  <li className="text-xl"><p><button onClick={() => setSelectedRoute('group')}
                  >channel</button></p></li>

                  <li className="text-xl"><p><button onClick={() => setSelectedRoute('group')}
                  >Library</button></p></li>

                  <li className="text-xl"><p><button onClick={() => setSelectedRoute('group')}
                  >studio</button></p></li>

                  <li className="text-xl"><p><button onClick={() => setSelectedRoute('group')}
                  >about</button></p></li>

                  <li className="text-xl"><p><button onClick={() => setSelectedRoute('group')}
                  >publish</button></p></li>

                  <li className="text-xl"><p><button onClick={() => setSelectedRoute('group')}
                  >GoLive</button></p></li>
                 
                  </ul>
                 
                  
                
       </div>
       
    </nav>
  )
}

export default Menu