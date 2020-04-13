import React, { useState } from "react";
import "./index.css";

const DropdownMenu = ({ options, placeholderText }) => {

  const [selectedOption, selectOption] = useState(options[0].text);
  const [showOptions,toggleShowOptions] = useState(false)

  const handleSelectOption = option => {
    selectOption(option);
    if (option.callback) option.callback();
  };
  return (
    <div className="dropdown-container" >
    
     <select className='dropdown-options'>
          { 
              options.map(option=>(<option className='dropdown-option' onClick={()=>handleSelectOption(option.text)}>
                  {option.text}
              </option>))
          }
      </select>
    </div>
  );
};


export default DropdownMenu