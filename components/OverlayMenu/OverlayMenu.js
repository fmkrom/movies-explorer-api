import "./OverlayMenu.css";

import OverlayMenuLink from '../OverlayMenuLink/OverlayMenuLink';

function OverlayMenu(props){
  return (
    <section className={`overlay-menu ${props.isOpen ? 'overlay-menu_shown' : 'overlay-menu_hidden'}`}>
        <div className="overlay-menu__menu-section">
          <div className="overlay-menu__close-block">
              <button className="overlay-menu__button-close" onClick={props.isClosed}></button>
          </div>
          <div className="overlay-menu__links-large">
            <OverlayMenuLink 
              linkRoute='./'
              linkName='Главная'
              sizeLarge={true}
              isWithImage={false}
            />
            <OverlayMenuLink 
              linkRoute='./movies'
              linkName='Фильмы'
              sizeLarge={true}
              isWithImage={false}
            />
            <OverlayMenuLink 
              linkRoute='./saved-movies'
              linkName='Сохраненные фильмы'
              sizeLarge={true}
              isWithImage={false}
            />
          </div>
          <OverlayMenuLink 
            linkRoute='./account'
            linkName='Аккаунт'
            sizeLarge={false}
            isWithImage={true}
          />
        </div>
    </section>
  )
} 

export default OverlayMenu;