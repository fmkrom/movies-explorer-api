import './MoviesCard.css';

import MoviesCardImage from '../MoviesCardImage/MoviesCardImage';
import MoviesCardTitleBlock from '../MoviesCardTitleBlock/MoviesCardTitleBlock';

function MoviesCard(props){

return (
            <div className="movies-card">
                  <MoviesCardImage 
                        image={props.moviesCardImage}
                        linkToTrailer={props.trailer}
                  />
                  <MoviesCardTitleBlock
                        isOnSavedMoviesPage={props.isOnSavedMoviesPage}
                        name={props.movieName}
                        handleSaveMovie={()=>props.saveMovie()}
                        isMovieSaved={props.isMovieSaved}
                        duration={props.movieDuration}
                  />
            </div>
      )
};

export default MoviesCard;
