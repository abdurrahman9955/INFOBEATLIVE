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




const Choose3:React.FC = () => {

  const options = [
    { value: 'option1', label: 'Meeting' },
    { value: 'option1', label: 'discoursing' },
    { value: 'option2', label: 'teaching' },
    { value: 'option3', label: 'Mentoring' },
    { value: 'option4', label: 'training' },
    { value: 'option2', label: 'test' },
    { value: 'option2', label: 'Examination' },
    { value: 'option2', label: 'questions & answer' },
    { value: 'option5', label: 'others' },
   
    
  ];

  return (
    <div>
     
      <Select
       options={options}
       styles={customStyles}
       placeholder='Category of your program'
       className='w-full focus:outline-none bg-black'  />
    </div>
  );
};

export default Choose3;