import '../Footer/Footer.css';

import ContentBlock from '../ContentBlock/ContentBlock';

function Footer(){

    return (
        <ContentBlock
            isTall={false}
        >
            <footer className="footer">
                <div className="footer__content">
                    <div className="footer__title">
                        <p className="footer__title-text">Учебный проект Яндекс.Практикум х BeatFilm</p>
                    </div>
                    <div className="footer__info">
                        <p className="footer__copyright">&copy; 2021 Ефим Романенко</p>
                        <div className="footer__links">
                            <span className="footer__text footer__link">Яндекс.Практикум</span>
                            <span className="footer__text footer__link">Github</span>
                            <span className="footer__text footer__link">Facebook</span>
                        </div>
                    </div>
                </div>
            </footer>
        </ContentBlock>
    )
};

export default Footer;