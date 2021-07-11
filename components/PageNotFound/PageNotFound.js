import './PageNotFound.css';

import ContentBlockMain from '../ContentBlockMain/ContentBlockMain';
import { Link } from 'react-router-dom'

function PageNotFound(props){
    return(
        <ContentBlockMain>
            <section className="page-not-found__main">
                <div className="page-not-found__title-block">
                    <h1 className="page-not-found__title">404</h1>
                    <h2 className="page-not-found__subtitle">Страница не найдена</h2>
                </div>
                <Link 
                    className="page-not-found__link"
                    to={props.notFoundLinkRoute}>
                    Назад
                </Link>
            </section>
        </ContentBlockMain>
    )
}

export default PageNotFound;