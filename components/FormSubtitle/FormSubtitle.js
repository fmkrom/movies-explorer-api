import { Link } from 'react-router-dom';
import './FormSubtitle.css';

function FormSubtitle(props){
    return(
        <div className="form__subtitle-block">
            <span className="form__subtitle-text">{props.subtitleText}</span>
            <Link to={props.linkRoute} className="form__subtitle-link">{props.linkText}</Link>
        </div>
    )
}

export default FormSubtitle;

