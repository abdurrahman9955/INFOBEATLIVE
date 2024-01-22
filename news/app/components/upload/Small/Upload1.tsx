import React from 'react';
import Select from 'react-select';




const customStyles  = {
    control: (provided: any, state:any ) =>({
        ...provided,
        borderRadius:'none',
        outline:'none',
        borderColor:"#fff"
       
        
    }), 
    option: (provided: any, state:any ) =>({
        ...provided,
        borderRadius: state.isSelected ? 'bg-blue-600' : 'bg-white',
    }),
};




const Upload1:React.FC = () => {

  const options = [
    { value: 'option1', label: 'News' },
    { value: 'option2', label: 'Blogs' },
    { value: 'option3', label: 'All types' },
    
  ];

  return (
    <div>
     
      <Select
       options={options}
       styles={customStyles}
       placeholder='Choose A Type'
       className='w-full focus:outline-none bg-black'  />
    </div>
  );
};

export default Upload1