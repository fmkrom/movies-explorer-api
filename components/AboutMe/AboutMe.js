import '../AboutMe/AboutMe.css';

import ProfilePhoto from '../../images/profile_photo.jpg';
import BlockHeadline from '../BlockHeadline/BlockHeadline';
import PortfolioLink from '../PortfolioLink/PortfolioLink';
import ContentBlock from '../ContentBlock/ContentBlock';

function AboutMe(){

    return (
        <section className="about-me" id="about-me">
            <ContentBlock
                isTall={true}
            >
                <BlockHeadline blockTitle="Студент" />
                <div className="about-me__main">
                    <div className="about-me__info">
                        <div className="about-me__info-main">
                            <h4 className="about-me__info-title">Ефим Романенко</h4>
                            <p className="about-me__info-subtitle">Фронтенд-разработчик, 36 лет</p>
                            <p className="about-me__info-text">Живу в Москве. Начал кодить в 2020 году и мне это очень нравится. Занимаюсь разработкой сайтов и веб-приложений на React.Js и Node.js. Планирую дальше развиваться как программист и изучать языки бэкенда: Java, Python, С#.</p>
                        </div>
                        <div className="about-me__info-links">
                            <p className="about-me__info-link">Facebook</p>    
                            <p className="about-me__info-link">Github</p>
                        </div>
                    </div>
                    <img src={ProfilePhoto} className="about-me__profile-photo" alt="Фото профиля" />
                </div>
                <div className="about-me__portfolio">
                    <h4 className="about-me__portfolio-title">Портфолио</h4>
                    <PortfolioLink 
                        name="Статичный сайт"
                        linkRoute='http://fmkrom.com/projects/how-to-learn/index.html'
                    />
                    <PortfolioLink 
                        name="Адаптивный сайт" 
                        linkRoute='http://fmkrom.com/projects/russian-travel/index.html'
                    />
                    <PortfolioLink 
                        name="Одностраничное приложение" 
                        linkRoute='https://fmkrom.students.nomoredomains.club/'
                    />
                </div>
            </ContentBlock>
        </section>
    )
};

export default AboutMe;