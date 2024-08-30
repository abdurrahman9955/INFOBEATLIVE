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




const Select6:React.FC = () => {

  const options = [
   
    { value: 'option2', label: 'News' },
    { value: 'option3', label: 'Blogs' },
   
   
    
  ];

  return (
    <div>
     
      <Select
       options={options}
       styles={customStyles}
       placeholder='Category of your post'
       className='w-full focus:outline-none bg-black'  />
    </div>
  );
};

export default Select6;