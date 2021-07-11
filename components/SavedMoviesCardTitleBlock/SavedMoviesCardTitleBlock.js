import './SavedMoviesCardTitleBlock.css';

function SavedMoviesCardTitleBlock(props){

return (
    <div className="saved-movies-card__title-block">
        <div className="saved-movies-card__name-block">
            <p className="saved-movies-card__title">{props.name}</p>
            <button 
                onClick={props.handleSaveMovie}
                className="saved-movies-card__like-button"></button>
        </div>      
            <p className="saved-movies-card__duration">{props.duration}</p>
    </div>      
    )
};

export default SavedMoviesCardTitleBlock;

// ${props.isMovieSaved ? 'movies-card__like-button_active' : 'movies-card__like-button_inactive'}

//className="saved-movies-card__like-button"></button>

// <p className="movies-card__duration">{props.duration}</p> 
//<p className="movies-card__title">{props.name}</p>