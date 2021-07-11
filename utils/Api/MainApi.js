import  URL from '../constants';

function checkRes(res) {
    if (res.ok) {
        // console.log(res);
        return res.json();
    } else {
      // console.log(res);
      Promise.reject(`Ошибка: ${res.statusText}`);
    }
}

async function setUser(userName, userEmail, token){
  try {
      const result = await fetch(`${URL.MY_BASE}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          email: userEmail, 
          name: userName
        })
      })
      if (result.ok){
        const res = await result.json();
        return res;
      } else if (!result.ok){
        return result.status
      }
      return result;
    } catch (err) {
      console.log(err);
    }
};

function saveMovie(movie, token){
  return fetch(`${URL.MY_BASE}/movies`,
      {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({
          movieId: movie.id,
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co${movie.image.url}`, 
          trailer: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
        })
      }).then(checkRes);
};

function deleteSavedMovie(movieId, token){
  return fetch(`${URL.MY_BASE}/movies/${movieId}`,
      {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      }).then(checkRes); 
}



function toggleMoviesSavedStatus(status, movie, token){
    if (status === false){
      saveMovie(movie, token)
    } else if (status === true) {
      deleteSavedMovie(movie, token)
    }
}

async function getUsersSavedMovies(token, user){
  try {
    const result = await fetch(`${URL.MY_BASE}/movies`,
    {
     method: 'GET',
     headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      },
    })
    if (result.ok){
      const movies = await result.json();
      const usersSavedMovies = movies.filter((movie)=> movie.owner === user.id);
      // console.log(usersSavedMovies);
      return usersSavedMovies;
    } else if (!result.ok){
      return result.status
    }
  } catch (err) {
    console.log(err);
  }
}

function getAllSavedMovies(token){
  return fetch(`${URL.MY_BASE}/movies`,
  {
   method: 'GET',
   headers: {
    authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    },
  }).then(checkRes);
};

const mainApi = {
    setUser,
    saveMovie,
    getAllSavedMovies,
    deleteSavedMovie,
    toggleMoviesSavedStatus,
    getUsersSavedMovies
}

export default mainApi;
