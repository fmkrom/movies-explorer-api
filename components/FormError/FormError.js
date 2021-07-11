import "./FormError.css";

function FormError(props){
    return (
        <div className="form-error">
            <span className={`form-error__text
                ${props.isShown ? 'form-error__text_shown' : 'form-error__text_hidden'}
            `}
            >{props.message}</span>
        </div>
    )
}

export default FormError;