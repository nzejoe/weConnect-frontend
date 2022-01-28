import { useState } from "react";

const useInput = (validateValue)=>{
    const [value, setValue] = useState('');
    // check if input has been touched
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(value);
    const hasError = isTouched && !isValid;

    const onChange = (e)=>{
        setValue(e.target.value);
        setIsTouched(true);
    }

    const onBlur = ()=>{
        setIsTouched(true);
    }

    return {
      value,
      isValid,
      hasError,
      onBlur,
      onChange,
    };
}

export default useInput;