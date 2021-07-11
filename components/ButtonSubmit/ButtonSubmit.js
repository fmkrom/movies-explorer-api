import './ButtonSubmit.css';

function ButtonSubmit(props){
    return(
        <button 
            className={`button
                ${props.isColored ? "button_colored button_text-white" : "button_plain button_text-auto"}
            `}
            type="submit"
            disabled={props.buttonDisabled}
        >{props.buttonText}</button>    
    )
}

export default ButtonSubmit;
