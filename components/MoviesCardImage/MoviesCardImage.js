import './MoviesCardImage.css'

function MoviesCardImage(props){
    return(
        <a href={props.linkToTrailer} target="blank" className="movies-card__link-to-trailer">
            <img src={props.image} className="movies-card__image" alt="Постер фильма" />
        </a>
    )
}

export default MoviesCardImage;

/*
<img src={props.image} className="movies-card__image" alt="Постер фильма" />
*/