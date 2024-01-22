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




const Choose1:React.FC = () => {

  const options = [
    { value: 'option1', label: 'Videos' },
    { value: 'option2', label: 'Books' },
    { value: 'option3', label: 'Articles' },
    { value: 'option3', label: 'shorts' },
    { value: 'option4', label: 'Photos' },
    { value: 'option4', label: 'other' },
   
   
    
  ];

  return (
    <div>
     
      <Select
       options={options}
       styles={customStyles}
       placeholder='Type of your post'
       className='w-full focus:outline-none bg-black'  />
    </div>
  );
};

export default Choose1;