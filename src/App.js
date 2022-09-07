
import { useState } from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import TextComponent from "./components/TextComponent";

const App = () => {
  const[value,setvalue]=useState('');
  const handleChange = event => setvalue(event.target.value);
  
  return(
     <div>
      <InputComponent value={value} handleChange={handleChange}/>
      <TextComponent value={value}/>
     </div>
  );
};

export default App;
