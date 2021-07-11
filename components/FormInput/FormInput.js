import "./FormInput.css";
import FormError from '../FormError/FormError';

function FormInput(props){
    
    function validateInput(){
        // console.log(props.inputValue.validationMessage)
    }
    validateInput();

    
    return (
        <div className={`form-input__block
            ${props.isHorizontal ? 'form-input__block_horizontal' : 'form-input__block_regular'}
        `}>
            <div className={`form-input__input-align-block
                ${props.isHorizontal ? 'form-input__input-align-block_horizontal' : 'form-input__input-align-block_vertical'} 
            `}>
                <span className={`form-input__title
                    ${props.isHorizontal ? 'form-input__title_horizontal' : 'form-input__title_vertical'} 
                `}>{props.inputTitle}</span>
                <input 
                    className={`form-input__input
                            ${props.isHorizontal ? 'form-input__input_horizontal' : 'form-input__input_vertical'
                        }`
                    }
                    value={props.inputValue} 
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    required 
                    placeholder={props.placeholder}
                    type={props.type}
                    minLength={props.minLength} 
                    maxlenght={props.maxLength}
                />
            </div>
            <FormError
                isShown={props.isErrorShown}
                message={props.errorMessage}
            />
        </div>
    )
}

export default FormInput;