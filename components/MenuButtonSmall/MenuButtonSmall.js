import './MenuButtonSmall.css';

function MenuButtonSmall(props){
    
 return (
        <button 
            className={`menu-button
                ${props.loggedIn? 'menu-button_shown' : 'menu-button_hidden'}  
            `}
                onClick={props.onClickMenuButton}
        ></button>
    )
};

export default MenuButtonSmall;