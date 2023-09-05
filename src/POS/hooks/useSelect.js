/* import { useState } from "react" */


/* export const useSelect = (initiaState) => {
 const [selectedValue,setSelectValue]=useState(initiaState);
 
  onSelectChange=(event)=>{
    const {target}=event;
    const {name,value}=target;
    
    setSelectValue({
      ...selectedValue,
      [name]:value
    })
    console.log(selectedValue);
    
}
const onResetSelect=()=>{
  setSelectValue(initiaState);
}
    

  return{
    ...useSelect,
    selectedValue,
    onSelectChange,
    onResetSelect
  }
} */
import { useState } from 'react';

export const useSelect = (initialState) => {
  /* const [selectedValue, setSelectedValue] = useState(initialState);

  const onSelectChange = (event) => {
    const { name, value } = event.target;

    setSelectedValue({
      ...selectedValue,
      [name]: value,
    });
  };

  const onResetSelect = () => {
    setSelectedValue(initialState);
  }; */
  onSelectChange=()=>{
    console.log('hola desde hook')
  }
  return {
    selectedValue,
    onSelectChange,
    onResetSelect,
  };
};
