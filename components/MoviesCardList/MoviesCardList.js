// import { useState } from 'react';

import '../MoviesCardList/MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ContentBlockMain from '../ContentBlockMain/ContentBlockMain';

function MoviesCardList(props){

return (
    <ContentBlockMain>
        <div className="movies-cards-list">
                {
                    props.data.map((currentMovie) => {
                        return (
                            <MoviesCard
                                savedMoviesIds={props.savedMoviesIds}
                                isOnSavedMoviesPage={false}
                                moviesCardImage={`https://api.nomoreparties.co${currentMovie.image.url}`}
                                trailer={currentMovie.trailerLink}
                                movieName={currentMovie.nameRU}
                                movieDuration={currentMovie.duration}
                                key={props.isOnSaveMoviesPage? currentMovie._id : currentMovie.id }
                                saveMovie={()=>{props.saveMovie(currentMovie)}}
                                isMovieSaved={Boolean(props.savedMoviesIds.includes(currentMovie.id))}
                            />
                        )
                    })
                }
            </div>
    </ContentBlockMain>
    )
};
   
export default MoviesCardList;
