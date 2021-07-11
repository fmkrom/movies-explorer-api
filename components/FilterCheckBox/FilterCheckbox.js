import './FilterCheckbox.css';

import CheckboxOff from '../../images/checkbox_off.png';
import CheckboxOn from '../../images/checkbox_on.png';

function FilterCheckbox(props){

return (
      <div className="filter-checkbox">
          <p className="filter-checkbox__text">Короткометражки</p>
          <img 
            className="filter-checkbox__toggle-button" 
            onClick={()=>{props.filterShortFilms()}} 
            src={props.filterShortFilmsOn ? CheckboxOn : CheckboxOff} alt="Чекбокс"/>
      </div>
  )
};

export default FilterCheckbox;