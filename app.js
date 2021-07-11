import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import AboutProject from './components/AboutProject/AboutProject';
import Techs from './components/Techs/Techs';
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import OverlayMenu from './components/OverlayMenu/OverlayMenu';

import MoviesPage from './components/MoviesPage/MoviesPage';
import SavedMoviesPage from './components/SavedMoviesPage/SavedMoviesPage';
import AccountPage from './components/AccountPage/AccountPage';
import PageNotFound from './components/PageNotFound/PageNotFound';

import auth from './utils/Api/Auth';
import mainApi from './utils/Api/MainApi';
import MoviesApi from './utils/Api/MoviesApi';  
// import functions from './utils/utils';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import CurrentUserContext from './contexts/CurrentUserContext';

function App() {

  const isTokenPresent = Boolean(localStorage.getItem('jwt'));
  
  const [ user, setUser ] = useState({});
  
  const [ allBeatFilmMovies, setAllBeatFilmMovies ] = useState([]);
  const [ shortBeatFilmMovies, setShortBeatfilmMovies ] = useState([]);
  const [ moviesOnPage, setMoviesOnPage ] = useState([]);

  const [ mySavedMovies, setMySavedMovies ] = useState([]);
  // const [ mySavedMoviesFilteredByDuration, setMySavedMoviesFilteredByDuration ] = useState([]);
  
  const [ mySavedMoviesIDs, setMySavedMoviesIDs ] = useState([]);
  const [ isPreloaderShown, setPreloaderShown ] = useState(false);

  const [ isOverlayMenuOpen, handleOpenOverlayMenuClick ] = useState(false);
  const [ userLoggedIn, setUserLoggedIn] = useState(isTokenPresent);
  const [ moviesCountOnPage, setMoviesCountOnPage ] = useState(4);

  const [errorMessageTextLogin, setErrorMessageTextLogin] = useState('');
  const [errorMessageTextRegister, setErrorMessageTextRegister] = useState('');
  const [ errorMessageUpdateUser, setErrorMessageUpdateUser ] = useState('');
  
  const [ editProfileButtonShown, setEditProfileButtonShown ] = useState(true);
  const [ saveProfileButtonShown, setSaveProfileButtonShown ] = useState(false); 

  // const [ shortFilmsFiltered, setShortFilmsFiltered] = useState(false);
  // const [ mySavedMoviesShortFiltered, setMySavedMoviesShortFiltered] = useState(false);

  const [ shortFilmsFilterOn, switchshortFilmsFilterOn ] = useState(false);

  const history = useHistory();
  
  function closeAllpopups(){
    handleOpenOverlayMenuClick(false)
  }

  async function register(name, email, password){
    try {
      const res = await auth.register(name, email, password);
      if (res){
        history.push('/login');
        setErrorMessageTextRegister('');
        return;
      } else {
        if (res === 409) {
          setErrorMessageTextRegister('Пользователь с таким e-mail уже существует')
        } else if (res === 500){
          setErrorMessageTextLogin('При регистрации пользователя произошла ошибка');
        } else if (!res){
          setErrorMessageTextLogin('Неизвестная ошибка');
        }
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function login(email, password){
    try {
      const res = await auth.login(email, password);
      if (localStorage.getItem('jwt') === res.toString()) {
          setErrorMessageTextLogin('');
          setUserLoggedIn(true);
          history.push('/movies');
          return;
      } else {
      //console.log(res);
        if (res === 400){
          setErrorMessageTextLogin('Вы ввели некорректные данные');
        } else if (res === 401){
          setErrorMessageTextLogin('Вы ввели неправильный логин или пароль');
        } else if (res === 500){
          setErrorMessageTextLogin('На сервере произошла ошибка');
        } else if (!res) {
          setErrorMessageTextLogin('При авторизации произошла ошибка. Токен не передан или передан не в том формате');
        } 
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  }


function showSaveProfileButton(){
  setSaveProfileButtonShown(true);
  setEditProfileButtonShown(false);
}

async function updateUser(name, email){
  const token = localStorage.getItem('jwt');
  try{
    const res = await mainApi.setUser(name, email, token);
    if (res) {
      setUser({ name: res.name, email: res.email });
      setSaveProfileButtonShown(false);
      setEditProfileButtonShown(true);
      return;
    } else {
      if (res === 400) {
        setErrorMessageUpdateUser('Введите корректные данные!');
      } else if (res === 409) {
        setErrorMessageUpdateUser('Пользователь с таким e-mail уже существует')
      } else if (res === 500){
        setErrorMessageUpdateUser('При обновлении профиля произошла ошибка');
      } else if (!res){
        setErrorMessageUpdateUser('Неизвестная ошибка');
      }
    }
  } catch (err) {
    console.log(err);
  }
}

function logout(){
  localStorage.removeItem('jwt');
  setUserLoggedIn(false);
  setUser({});
  history.push('/login');
  return;
}

  function saveMovie(movie){
    const token = localStorage.getItem('jwt');
    mainApi.saveMovie(movie, token)
    .then((data)=>{
      console.log(data);
      setMySavedMovies([data.savedMovie, ...mySavedMovies]);
      setMySavedMoviesIDs([data.savedMovie.movieId, ...mySavedMoviesIDs]);
      return data.savedMovie;
    }).catch((err)=>{
      console.log(err);
    })
  }

  function deleteSavedMovie(movieId){
    const token = localStorage.getItem('jwt');
    mainApi.deleteSavedMovie(movieId, token)
    .then((res)=>{
      setMySavedMovies(mySavedMovies.filter((movie) => !(movie._id === movieId)))
      return res.deletedMovie;
    }).catch((err)=>{
      console.log(err);
    })
  };

  function toggleMoviesSavedStatus(movie){
    if (!mySavedMoviesIDs.includes(movie.id)){
      saveMovie(movie);
    } else if (mySavedMoviesIDs.includes(movie.id)){
      const currentSavedMovie = mySavedMovies.find((currentMovie)=> currentMovie.movieId === movie.id);
      setMySavedMoviesIDs(mySavedMoviesIDs.filter((id)=> !(id === currentSavedMovie.movieId)));
      deleteSavedMovie(currentSavedMovie._id);
    }
  }

  function filterMoviesByDuration(){
    if (shortFilmsFilterOn === false) {
      switchshortFilmsFilterOn(true)
    } else if (shortFilmsFilterOn === true) {
      switchshortFilmsFilterOn(false)
    }
  }

  function filterAndSearchMovies(input, status, moviesArray, shortMoviesArray){
    if (status === false){
      const foundMovies = moviesArray.filter((movie)=> movie.nameRU.toLowerCase().includes(input.toLowerCase()));
      setMoviesOnPage(foundMovies);
    } else if (status === true){
      const foundMovies = shortMoviesArray.filter((movie)=> movie.nameRU.toLowerCase().includes(input.toLowerCase()));
      setMoviesOnPage(foundMovies);
    }
  };
  
  function filterAndSearchMySavedMovies(input, status, moviesArray){
     if (status === false){
       const foundMovies = moviesArray.filter((movie)=> movie.nameRU.toLowerCase().includes(input.toLowerCase()));
       setMySavedMovies(foundMovies);
     } else if (status === true){
       const moviesFilteredByDuration = moviesArray.filter((movie)=> movie.duration < 40)
       const foundMovies = moviesFilteredByDuration.filter((movie)=> movie.nameRU.toLowerCase().includes(input.toLowerCase()));
      setMySavedMovies(foundMovies);
     }
   };

  function regulateMoviesCountOnPage(i){
    setMoviesCountOnPage(moviesCountOnPage + i);
    console.log(moviesCountOnPage);
  };

  function addMoviesToPage(){
    console.log(window.innerWidth);
    
    if (window.innerWidth < 1440){
      regulateMoviesCountOnPage(4);
    } else if (window.innerWidth < 1276){
      regulateMoviesCountOnPage(3);
    } else if (window.innerWidth < 767 && window.innerWidth > 320){
      regulateMoviesCountOnPage(2);
    }
  }
  
  useEffect(() => {
    function checkToken(){
      if (isTokenPresent){
      setUserLoggedIn(true);
      auth.getContent(localStorage.getItem('jwt'))
        .then((data)=>{
          setUser({
            id: data.id,
            name: data.name,
            email: data.email
          })
        })
        .catch((err) => { console.log(err) });
      } else if (!isTokenPresent){
        setUserLoggedIn(false);
        setUser({});
      }
    }
    checkToken()
  }, [isTokenPresent]);

  useEffect(()=>{
    const token = localStorage.getItem('jwt');
    setPreloaderShown(true)
    if(userLoggedIn) {
      Promise.all([
        MoviesApi.getAllBeatFilmMovies(),
        mainApi.getUsersSavedMovies(token, user)
      ]).then(([moviesData, usersSavedMovies])=>{
      setAllBeatFilmMovies(moviesData.beatFilmMovies);
      setShortBeatfilmMovies(moviesData.beatFilmShortMovies);
      setMoviesOnPage(!shortFilmsFilterOn ? moviesData.beatFilmMovies.slice(0, moviesCountOnPage) : moviesData.beatFilmShortMovies.slice(0, moviesCountOnPage));
      const currentIdsArray = usersSavedMovies.map((mySavedMovie)=>{return mySavedMovie.movieId});
      setMySavedMoviesIDs(currentIdsArray);
      setMySavedMovies(usersSavedMovies.reverse());
      }).catch((err)=>{
        console.log(err);
      });
    }
    setPreloaderShown(false)
  }, [userLoggedIn, moviesCountOnPage, shortFilmsFilterOn, user]);

  return (
    <CurrentUserContext.Provider value={user}>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <OverlayMenu 
              isOpen={isOverlayMenuOpen}
              isClosed={closeAllpopups}
            />
            <Header
              isLoggedIn={userLoggedIn}
              onOpenOverlayMenu={handleOpenOverlayMenuClick}
            />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
          </Route>

          <ProtectedRoute
            savedMoviesIds={mySavedMoviesIDs}
            exact path='/movies'
            component={MoviesPage}
            loggedIn={userLoggedIn}
            preloaderIsShown={isPreloaderShown}
            isOverlayMenuOpen={isOverlayMenuOpen}
            isOverlayMenuClosed={closeAllpopups}
            openOverlayMenu={handleOpenOverlayMenuClick}
            data={moviesOnPage}
            saveMovie={(movie)=>{toggleMoviesSavedStatus(movie)}}
            submitSearchForm={(input) => {filterAndSearchMovies(input, shortFilmsFilterOn, allBeatFilmMovies, shortBeatFilmMovies)}}
            filterShortFilms={()=>{filterMoviesByDuration()}}
            filterShortFilmsOn={shortFilmsFilterOn}
            addFilmsToPage={()=> addMoviesToPage()}
          />

          <ProtectedRoute
            exact path='/saved-movies'
            component={SavedMoviesPage}
            loggedIn={userLoggedIn}
            preloaderIsShown={isPreloaderShown}
            isOverlayMenuOpen={isOverlayMenuOpen}
            isOverlayMenuClosed={closeAllpopups}
            openOverlayMenu={handleOpenOverlayMenuClick}
            data={!shortFilmsFilterOn ? mySavedMovies: mySavedMovies.filter((movie)=> movie.duration < 40)}
            saveMovie={(movie)=> {deleteSavedMovie(movie._id)}}
            filterShortFilms={()=>{filterMoviesByDuration()}}
            filterShortFilmsOn={shortFilmsFilterOn}
            submitSearchForm={(input) => filterAndSearchMySavedMovies(input, shortFilmsFilterOn, mySavedMovies)}
          />

          <ProtectedRoute
            exact path='/account'
            component={AccountPage}
            loggedIn={userLoggedIn}
            isOverlayMenuOpen={isOverlayMenuOpen}
            isOverlayMenuClosed={closeAllpopups}
            openOverlayMenu={handleOpenOverlayMenuClick}
            userName={user.name}
            userEmail={user.email}
            editUserProfile={(name, email)=>{updateUser(name, email)}}
            logout={()=>{console.log('Does logout work???'); logout()}}
            errorMessageText={errorMessageUpdateUser}
            showSaveProfileButton={()=> {showSaveProfileButton()}}
            editProfileButtonDisplayed={editProfileButtonShown}
            saveProfileButtonDisplayed={saveProfileButtonShown}
          />
          
          <Route exact path="/login">
              <Login 
                onLoginUser={login}
                errorMessageText={errorMessageTextLogin}
              />
          </Route>

          <Route exact path="/register">
              <Register
                onRegisterUser={register}
                errorMessageText={errorMessageTextRegister}
              />
          </Route>

          <Route exact path="*">
              <PageNotFound 
                notFoundLinkRoute='./movies'
              />
          </Route>

        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
