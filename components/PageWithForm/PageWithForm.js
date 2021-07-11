import './PageWithForm.css';
import FormTitle from '../FormTitle/FormTitle';
import ButtonSubmitColored from '../ButtonSubmitColored/ButtonSubmitColored';
import FormSubtitle from '../FormSubtitle/FormSubtitle';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function PageWithForm(props){
  return (
     <section className="form-main">
                     <FormTitle 
                        isWithLogo={true}
                        isTextAlignLeft={true}
                        formTitleText={props.formTitle}
                     /> 
                        <form className="form__inputs-block" 
                           name={props.formName} 
                           onSubmit={props.onSubmit} 
                           noValidate
                        >
                           {props.children}
                        <ErrorMessage
                           messageText={props.errorMessageText}
                        />
                        <ButtonSubmitColored 
                           isShown={true}
                           buttonText={props.buttonText}
                           isDisabled={props.buttonDisabled}
                        />
                        </form>
                        <FormSubtitle
                           subtitleText={props.formSubtitleText}
                           linkRoute={props.formSubtitleLinkRoute}
                           linkText={props.formSubtitleLinkText}
                        />
      </section>
   )
} 

export default PageWithForm;