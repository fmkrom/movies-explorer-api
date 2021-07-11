import './MoviesCardTitleBlock.css';

function MoviesCardTitleBlock(props){

// console.log(props.isMovieSaved);

return (
        <div className="movies-card__title-block">
            <div className="movies-card__name-block">
                <p className="movies-card__title">{props.name}</p>
                <button 
                    onClick={props.handleSaveMovie}
                    className={`movies-card__like-button
                       ${props.isMovieSaved ? 
                            'movies-card__like-button_active' : 
                            'movies-card__like-button_inactive'
                        }
                `}></button>
            </div>      
            <p className="movies-card__duration">{props.duration}</p>
        </div>      
    )
};

export default MoviesCardTitleBlock;

// ${props.isMovieSaved ? 'movies-card__like-button_active' : 'movies-card__like-button_inactive'}
