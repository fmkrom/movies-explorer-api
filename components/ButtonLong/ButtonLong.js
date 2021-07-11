import './ButtonLong.css';

function Buttonlong(props){
    return(
        <button 
            className="button-long"
            type="button"
            onClick={props.onClick}
        >{props.buttonText}</button>    
    )
}

export default Buttonlong;
