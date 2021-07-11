import '../IconLink/IconLink.css';

function IconLink(props){

//  <Link to={props.linkRoute} 

return (
        <a href={props.linkRoute} className="icon_link">{props.name}</a>
    )
};
    
export default IconLink;