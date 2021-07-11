import './PortfolioLink.css';

import PortfolioLinkArrow from '../../images/portfolio__link-arrow.png'

function PortfolioLink(props){

//link to = {props.path}

return (
    <a href={props.linkRoute} className="portfolio__link">
       <p className="portfolio__link-text">{props.name}</p>
       <img src={PortfolioLinkArrow} className="portfolio__link-arrow" alt="Стрелка"/>
    </a>
    )
};
    
export default PortfolioLink;