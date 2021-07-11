import {useState, useEffect} from 'react';

function useValidation(value, validationParameters){
        
    const [ isEmpty, setEmpty ] = useState(true);
    const [ minLength, setMinLengthEror ] = useState(true);
    const [ emailError, setEmailError ] = useState(true);
    const [ nameError, setNameError ] = useState(true);

    const [ inputValid, setInputValid ] = useState(false);
    
    useEffect(()=>{
        for (const validation in validationParameters){
            switch (validation) {
                
                case 'minLength': 
                    value.length < validationParameters[validation] ? setMinLengthEror(true) : setMinLengthEror(false)
                break;

                case 'isEmpty': 
                    value ? setEmpty(false) : setEmpty(true)
                break;

                case 'isEmail': 
                    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    regexEmail.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true) 
                break;

                case 'isName':
                    const regexName = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/g;
                    regexName.test(String(value).toLowerCase()) ? setNameError(false) : setNameError(true)
                break; 

                default: 
                    console.log('Default case');
                break;
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    useEffect(()=>{
        if (isEmpty || minLength){
            setInputValid(false)
        } else {
            setInputValid(true)
        }

    }, [isEmpty, minLength, inputValid])

    return {
        isEmpty,
        minLength,
        inputValid, 
        emailError,
        nameError
    }
}

function useInputValidation(initialValue, validationParameters){
    const [ value, setValue ] = useState(initialValue);
    const [ isDirty, setDirty ] = useState(false)

    const valid = useValidation(value, validationParameters);

    function onBlur(e){
        e.preventDefault();
        setDirty(true);
    }
    
    function onChange(e){
        onBlur(e);
        setValue(e.target.value);
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

export default useInputValidation;