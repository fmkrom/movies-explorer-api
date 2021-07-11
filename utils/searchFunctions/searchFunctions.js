import { useEffect } from "react";

function filterFilmsByDuration(filterStatus, setFilterStatus, moviesArrayForSearch){
    if (filterStatus === false){   
        console.log(filterStatus);
        console.log(setFilterStatus);
        
        setFilterStatus(true);

        const moviesFilteredByDuration = moviesArrayForSearch.filter((movie)=> movie.duration < 40);
        
        console.log(moviesFilteredByDuration);
        return moviesFilteredByDuration;

    } else if (filterStatus === true){
        console.log(filterStatus);
        console.log(setFilterStatus);

        setFilterStatus(false);
        console.log(moviesArrayForSearch);
        return moviesArrayForSearch;
    }
}

function useFilterAndSearchMovies(input, moviesArray, filterStatus, setFilterStatus, moviesSetterHook){
    console.log(moviesSetterHook);
      const moviesArrayForSearch = filterFilmsByDuration(filterStatus, setFilterStatus, moviesArray);
      moviesArrayForSearch.filter((movie)=> movie.nameRU.toLowerCase().includes(input.toLowerCase()));
    
      console.log(moviesArrayForSearch);
      console.log(moviesSetterHook);
      moviesSetterHook(moviesArrayForSearch);  
}

const searchFunctions ={
    filterFilmsByDuration,
    useFilterAndSearchMovies
}

export default searchFunctions;