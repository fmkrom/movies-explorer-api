// import { useState } from 'react';

import '../SavedMoviesCardList/SavedMoviesCardList.css';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';
import ContentBlockMain from '../ContentBlockMain/ContentBlockMain';

function SavedMoviesCardList(props){

return (
    <ContentBlockMain>
        <div className="movies-cards-list">
                {
                        props.data.map((currentMovie) => {
                        return (
                            <SavedMoviesCard
                                moviesCardImage={currentMovie.image}
                                trailer={currentMovie.trailer}
                                movieName={currentMovie.nameRU}
                                movieDuration={currentMovie.duration}
                                key={currentMovie._id}
                                saveMovie={()=>{props.saveMovie(currentMovie)}}
                            />
                        )
                    })
                }
            </div>
    </ContentBlockMain>
    )
};
   
export default SavedMoviesCardList;

/*
moviesCardImage={currentMovie.image}
                                trailer={currentMovie.trailerLink}
                                movieName={currentMovie.nameRU}
                                movieDuration={currentMovie.duration}
                                key={currentMovie._id}
                                saveMovie={()=>{props.saveMovie(currentMovie)}}

*/