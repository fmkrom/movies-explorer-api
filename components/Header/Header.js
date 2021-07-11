import '../Header/Header.css';
import HeaderLogo from '../../images/mark.png';

import HeaderLink from '../HeaderLink/HeaderLink';
import MenuButtonSmall from '../MenuButtonSmall/MenuButtonSmall';
import ContentBlock from '../ContentBlock/ContentBlock';

function Header(props){
    
 return (
      <header className="header">
          <ContentBlock 
            isTall={false}
          >
            <div className="header__content">
              <img src={HeaderLogo} className="header__logo" alt="Лого"/>
              <div className="header__links">
                    <div className="header__links_on-frontpage">
                      <HeaderLink 
                        linkRoute='/register'
                        linkName='Регистрация'
                        isInBold={true}
                        isInColor={false}
                        isDisplayed={!props.isLoggedIn}
                        isWithImage={false}
                      />
                      <HeaderLink
                        linkRoute='/login'
                        linkName='Войти'
                        isInBold={true}
                        isInColor={true}
                        isDisplayed={!props.isLoggedIn}
                        isWithImage={false}
                      />
                    </div> 
                  <div className="header__links_on-mainpage">
                    <HeaderLink
                      linkRoute='/movies'
                      linkName='Фильмы'
                      isInBold={true}
                      isInColor={false}
                      isDisplayed={props.isLoggedIn}
                      isWithImage={false}
                    />
                    
                    <HeaderLink 
                      linkRoute='/saved-movies'
                      linkName='Сохраненные фильмы'
                      isInBold={false}
                      isInColor={false}
                      isDisplayed={props.isLoggedIn}
                      isWithImage={false}
                    />
                  
                    <HeaderLink 
                      linkRoute='/account'
                      linkName='Аккаунт'
                      isInBold={true}
                      isInColor={false}
                      isDisplayed={props.isLoggedIn}
                      isWithImage={true}
                    />
                  </div>
                  <MenuButtonSmall 
                    loggedIn={props.isLoggedIn}
                    onClickMenuButton={props.onOpenOverlayMenu}
                  />
              </div>
            </div>
          </ContentBlock>
      </header>
  )
};

export default Header;

/*
<button 
                  className={`
                    header__open-overlay-menu-button
                    ${props.isLoggedIn? 'header__open-overlay-menu-button_shown' : 'header__open-overlay-menu-button_hidden'}  
                  `}
                  onClick={props.onOpenOverlayMenu}
                ></button>
*/