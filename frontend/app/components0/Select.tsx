import React from 'react';
import Select from 'react-select';

const Select0 = () => {
  const options = [
    { value: 'option1', label: 'News' },
    { value: 'option2', label: 'Blogs' },
    
  ];

  return (
    <div>
      <h1>React Select Example</h1>
      <Select options={options} />
    </div>
  );
};

export default Select0;
