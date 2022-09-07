import React from 'react'

const InputComponent = ({value,handleChange}) => {
  return (
    <div>
        <input type="text" id="inputText" value={value} onChange={handleChange} /> 
        
    </div>
  )
}

export default InputComponent