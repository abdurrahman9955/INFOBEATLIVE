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




const Choose2:React.FC = () => {

  const options = [
    { value: 'option1', label: 'News' },
    { value: 'option2', label: 'Blogs' },
    { value: 'option3', label: 'Other' },
   
    
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

export default Choose2;