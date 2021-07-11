import './ButtonSubmitColored.css';

function ButtonSubmitColored(props){
    return(
        <button 
            className={`button 
                button-submit-colored
                ${props.isShown ? 'button-submit-colored_shown' : 'button-submit-colored_hidden'}
                ${props.isDisabled ? 
                        'button-submit-colored_disabled' :
                        'button-submit-colored_enabled'
                    }    
                `}
            type="submit"
            disabled={props.isDisabled}
        >{props.buttonText}</button>    
    )
}

export default ButtonSubmitColored;
