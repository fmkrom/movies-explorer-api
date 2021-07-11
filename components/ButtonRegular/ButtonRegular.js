import './ButtonRegular.css';

function ButtonRegular(props){
    return(
        <button 
            className={`button-regular 
                ${props.isShown? 'button-regular_shown' : 'button-regular_hidden'}
                ${props.isRed? 'button-regular_red' : 'button-regular_black'}    
            `}
            type="button"
            onClick={()=>{props.onButtonClick()}}
        >{props.buttonText}</button>    
    )
}

export default ButtonRegular;
