import './HeaderLink.css';

import { Link } from 'react-router-dom';

function HeaderLink(props){
    
    return (
        <Link to={props.linkRoute}
            className={`header__link 
                ${props.isInBold ? 'header__link_bold' : 'header__link_regular'}
                ${props.isInColor ? 'header__link_colored' : 'header__link_plain'}
                ${props.isDisplayed ? 'header__link_shown' : 'header__link_hidden'}
                ${props.isWithImage ? 'header__link-with-margin' : ''}
            `}
        >{props.linkName}
            <div className={`header__link-image
                ${props.isWithImage? 'header__link-image_shown' : 'header__link-image_hidden'}
                `}>
            </div>
        </Link> 
     )
};
   
export default HeaderLink;
