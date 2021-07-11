import './FormTitle.css';
import HeaderLogo from '../../images/mark.png';

function FormTitle(props){
  return (
    <div className="form__title">
      <div 
        className={`form__logo-containter
          ${props.isWithLogo ? 'form__logo-containter_shown' : 'form__logo-containter_hidden'}
        `}
      >
        <img src={HeaderLogo} className="form__logo" alt="Лого"/>
      </div>
      <h1 className={`form__title-text
        ${props.isTextAlignLeft ? 'form__title-text_left' : 'form__title-text_centered'}
      `}
      >{props.formTitleText}</h1>    
    </div>
  )
}

export default FormTitle;
