import './OverlayMenuLink.css';

import { Link } from 'react-router-dom';

function OverlayMenuLink(props){
    
    return (
        <Link to={props.linkRoute}
            className={`overlay-menu__link
                ${props.sizeLarge? 'overlay__link_large' : 'overlay__link_small'}
            `}>
                {props.linkName}
            <div className={`overlay__link-image
                ${props.isWithImage? 'overlay__link-image_shown' : 'overlay__link-image_hidden'}
                `}>
            </div>
        </Link> 
     )
};
   
export default OverlayMenuLink;