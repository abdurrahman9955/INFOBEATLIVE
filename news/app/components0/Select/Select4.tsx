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




const Select4:React.FC = () => {

  const options = [
    { value: 'option1', label: 'teaching' },
    { value: 'option2', label: 'mentoring' },
    { value: 'option3', label: 'helping' },
    { value: 'option3', label: 'Others' },
    { value: 'option3', label: 'All types' },
    
  ];

  return (
    <div>
     
      <Select
       options={options}
       styles={customStyles}
       placeholder='Type of your class'
       className='w-full focus:outline-none bg-black'  />
    </div>
  );
};

export default Select4;