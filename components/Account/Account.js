import './Account.css';
// import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import PageWithFormHorizontal from '../PageWithFormHorizontal/PageWithFormHorizontal';
import ContentBlockMain from '../ContentBlockMain/ContentBlockMain';
import FormInput from '../FormInput/FormInput';
import useInputValidation from '../../utils/customHooks/useInputValidation';
import functions from '../../utils/utils';

function Account(props){
  
  const name = useInputValidation('', { isEmpty: true, minLength: 2, isName: true});
  const email = useInputValidation('', { isEmpty: true, minLength: 6, isEmail: true });

  //console.log(name.value);
  //console.log(email.value);
  
  const buttonDisabled = Boolean(!email.inputValid || !name.inputValid);

  function handleEditProfileSubmit(e){
    // console.log(e);
    // console.log(name.value, email.value);
    e.preventDefault();
    props.onEditProfile(name.value, email.value);
  }

  return (
    <ContentBlockMain>
      <div className="account">
        <PageWithFormHorizontal 
          formTitle={`Привет, ${props.userName}!`}
          formName="form__edit-profile"
          onSubmit={(e)=> {handleEditProfileSubmit(e)}}
          buttonEditProfileText="Редактировать профиль"
          buttonLogoutText="Выйти из аккаунта"
          handleLogout={()=>{props.logout()}}
          showSaveProfileButton={()=>{props.showSaveProfileButton()}}
          errorMessageText={props.errorMessageText}
          isSaveProfileButtonDisabled={buttonDisabled}
          isEditProfileButtonShown={props.editProfileButtonShown}
          isSaveProfileButtonShown={props.saveProfileButtonShown}
        >
          <FormInput
            isHorizontal={true} 
            inputTitle="Имя"
            onChange={e=> name.onChange(e)}
            onBlur={e=> name.onBlur(e)} 
            inputValue={name.value} 
            placeholder={props.userName}
            type="text"
            minLength="2"
            maxLength="40"
            isErrorShown={functions.validateNameInput(name)}
            errorMessage="Введите корректное имя"
          />
          <FormInput 
            isHorizontal={true} 
            inputTitle="E-mail"
            onChange={e=> email.onChange(e)}
            onBlur={e=> email.onBlur(e)} 
            inputValue={email.value}
            placeholder={props.userEmail}
            type="email"
            minLength="2"
            maxLength="40"
            isErrorShown={functions.validateEmailInput(email)}
            errorMessage="Введите корректный e-mail"
          />
          </PageWithFormHorizontal>
        </div>
    </ContentBlockMain>
  )
} 

export default Account;
