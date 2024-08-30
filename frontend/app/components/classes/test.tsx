'use client'
import React, { useState } from 'react';
import Level4 from './Lectures/Level4';
import Level5 from './Lectures/Level5';
import Level6 from './Lectures/Level6';

const Test = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>('Level4');

  const getButtonClass = (route: string) => {
    return selectedRoute === route 
      ? 'text-white bg-gray-900 px-3 w-auto h-7 mt-1 rounded-sm'  // Active button style
      : 'text-white bg-lime-700 px-3 w-auto h-7 mt-1 rounded-sm hover:bg-gray-900';  // Default style
  };

  return (
    <div className='flex justify-center font-bold border-2 border-black bg-lime-500'>
      <div className='flex flex-col w-full m-1 bg-white border-2 border-black h-auto font-bold'>
        <div className='w-full h-auto'>
          <h1 className='flex justify-center gap-2 border-b-2 border-black text-xs font-bold pb-1'>
            <button
              onClick={() => setSelectedRoute('Level4')}
              type='button'
              className={getButtonClass('Level4')}
            >
              Completed
            </button>

            <button
              onClick={() => setSelectedRoute('Level5')}
              type='button'
              className={getButtonClass('Level5')}
            >
              Queue
            </button>

            <button
              onClick={() => setSelectedRoute('Level6')}
              type='button'
              className={getButtonClass('Level6')}
            >
              ComingSoon
            </button>
          </h1>
          <div className='h-auto overflow-y-auto m-1 p-1 border-2 border-black'>
            {selectedRoute === 'Level4' && <Level4 />}
            {selectedRoute === 'Level5' && <Level5 />}
            {selectedRoute === 'Level6' && <Level6 />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
