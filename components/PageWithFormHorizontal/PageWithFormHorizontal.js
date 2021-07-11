import './PageWithFormHorizontal.css';
import FormTitle from '../FormTitle/FormTitle';
// import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import ButtonRegular from '../ButtonRegular/ButtonRegular';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ButtonSubmitColored from '../ButtonSubmitColored/ButtonSubmitColored';

function PageWithFormHorizontal(props){
   
   function handleLogout(){
      props.handleLogout()
   }
  
  return (
     <section className="form-horizontal">
                     <FormTitle 
                        isWithLogo={false}
                        isTextAlignLeft={false}
                        formTitleText={props.formTitle}
                     /> 
                     <form className="form-edit-profile form__inputs-block" 
                           name={props.formName} 
                           onSubmit={props.onSubmit} 
                           noValidate
                     >
                        {props.children}
                        <ErrorMessage
                           messageText={props.errorMessageText}
                        />
                        <ButtonSubmitColored 
                           buttonText="Сохранить"
                           isShown={props.isSaveProfileButtonShown}
                           isDisabled={props.isSaveProfileButtonDisabled} 
                        />
                     </form>
                     <div className="account__bottom-buttons">
                        <ButtonRegular
                           onButtonClick={()=>{props.showSaveProfileButton()}}
                           isShown={props.isEditProfileButtonShown}
                           isColored={true}
                           buttonText={props.buttonEditProfileText}
                        />
                        <ButtonRegular 
                           isRed={true}
                           isShown={true}
                           buttonText={props.buttonLogoutText}
                           onButtonClick={()=> handleLogout()}
                        />
                     </div>
      </section>
   )
} 

export default PageWithFormHorizontal;