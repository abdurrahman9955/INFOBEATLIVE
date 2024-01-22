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




const Others2:React.FC = () => {

  const options = [
    { value: 'option1', label: 'Banks' },
    { value: 'option2', label: 'Billionaires' },
    { value: 'option3', label: 'Books' },
    { value: 'option4', label: 'Business' },
    { value: 'option5', label: 'Celebrities' },
    { value: 'option6', label: 'Ceo' },
    { value: 'option7', label: 'Companies' },
    { value: 'option8', label: 'Countries' },
    { value: 'option9', label: 'Crypto' },
    { value: 'option10', label: 'Currencies' },
    { value: 'option12', label: 'Economics' },
    { value: 'option13', label: 'Education' },
    { value: 'option14', label: 'Fitness' },
    { value: 'option15', label: 'Healthcare' },
    { value: 'option16', label: 'Hospitals' },
    { value: 'option17', label: 'Investing' },
    { value: 'option18', label: 'Leadership' },
    { value: 'option19', label: 'Money' },
    { value: 'option20', label: 'Motivation' },
    { value: 'option21', label: 'Politics' },
    { value: 'option22', label: 'Programming' },
    { value: 'option23', label: 'Religion' },
    { value: 'option24', label: 'Resources' },
    { value: 'option25', label: 'Rich' },
    { value: 'option26', label: 'Schools' },
    { value: 'option27', label: 'SocialMedia' },
    { value: 'option28', label: 'Sports' },
    { value: 'option29', label: 'Universities' },
    { value: 'option30', label: 'War' },
    { value: 'option30', label: 'Weather' },
    { value: 'option30', label: 'Others' },
    
  ];

  return (
    <div>
     
      <Select
       options={options}
       styles={customStyles}
       placeholder='Choose A Category'
       className='w-full focus:outline-none bg-black'  />
    </div>
  );
};

export default Others2