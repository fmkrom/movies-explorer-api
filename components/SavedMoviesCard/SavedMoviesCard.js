import './SavedMoviesCard.css';

import MoviesCardImage from '../MoviesCardImage/MoviesCardImage';
import SavedMoviesCardTitleBlock from '../SavedMoviesCardTitleBlock/SavedMoviesCardTitleBlock';

function SavedMoviesCard(props){

return (
            <div className="movies-card">
                  <MoviesCardImage 
                    image={props.moviesCardImage}
                    linkToTrailer={props.trailer}
                  />
                  <SavedMoviesCardTitleBlock
                    name={props.movieName}
                    handleSaveMovie={()=>props.saveMovie()}
                    duration={props.movieDuration}
                  />
            </div>
      )
};

export default SavedMoviesCard;

/*
<SavedMoviesCardTitleBlock
                        name={props.movieName}
                        handleSaveMovie={()=>props.saveMovie()}
                        duration={props.movieDuration}
                  />
*/