import './ErrorMessage.css';

function ErrorMessage(props){
  return (
     <p className="error-message">{props.messageText}</p>
   )
} 

export default ErrorMessage;