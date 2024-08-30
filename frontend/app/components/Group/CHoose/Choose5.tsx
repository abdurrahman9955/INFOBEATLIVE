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




const Choose5:React.FC = () => {

  const options = [
    { value: 'option1', label: 'All' },
    { value: 'option2', label: 'Halp' },
    { value: 'option3', label: 'Quarter' },
    
   
    
  ];

  return (
    <div>
     
      <Select
       options={options}
       styles={customStyles}
       placeholder='Choose'
       className='w-full focus:outline-none bg-black'  />
    </div>
  );
};

export default Choose5;