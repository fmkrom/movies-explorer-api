import './SearchForm.css';

import { useState } from 'react';

import FilterCheckbox from '../FilterCheckBox/FilterCheckbox';
import ContentBlockMain from '../ContentBlockMain/ContentBlockMain';

function SearchForm(props){
    
  const [ searchFormRequest, setSearchFormRequest ] = useState('');

  function handleSearchInputSubmit(e){
    setSearchFormRequest(e.target.value);
  }

  function handleSearchRequestSubmit(e){
    e.preventDefault();
    props.onSubmitSearchForm(searchFormRequest)
  }

 return (
      <ContentBlockMain>
        <form 
          className="form search-form"
          onSubmit={handleSearchRequestSubmit}
        >
                <div className="search-form__search-bar">
                    <input 
                      value={searchFormRequest}
                      onChange={handleSearchInputSubmit}
                      required 
                      className="search-form__input" 
                      placeholder="Фильм" 
                      type="text" 
                      minLength="2" 
                      maxlenght="40"
                    /> 
                    <button className="search-form__button"></button>
                </div>
                <FilterCheckbox 
                  filterShortFilms={()=>{props.filterShortFilms()}}
                  filterShortFilmsOn={props.filterShortFilmsOn}
                />
        </form>
      </ContentBlockMain>  
  )
};

export default SearchForm;