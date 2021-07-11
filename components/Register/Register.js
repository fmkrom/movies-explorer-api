import '../PageWithForm/PageWithForm.css';

import PageWithForm from '../PageWithForm/PageWithForm';
import FormInput from '../FormInput/FormInput';

import useInputValidation from '../../utils/customHooks/useInputValidation';
import functions from '../../utils/utils';

function Register(props){

    const name = useInputValidation('', { isEmpty: true, minLength: 2, isName: true });
    const email = useInputValidation('', { isEmpty: true, minLength: 5, isEmail: true });
    const password = useInputValidation('', { isEmpty: true, minLength: 8 });

    // console.log('Name input: ', name)
    // console.log('Name input: ', name.inputValid);

    const buttonDisabled = Boolean(!name.inputValid || !email.inputValid || !password.inputValid);
    
    function handleRegisterUserSubmit(e){
        e.preventDefault();
        props.onRegisterUser(name.value, email.value, password.value)
    }
    
    return (
                <PageWithForm
                    formTitle='Добро пожаловать!'
                    formName='form__register'
                    onSubmit={handleRegisterUserSubmit}
                    buttonText='Зарегистрироваться'
                    formSubtitleText='Уже зарегистрированы?'
                    formSubtitleLinkRoute='/login'
                    formSubtitleLinkText=' Войти'
                    buttonDisabled={buttonDisabled}
                    errorMessageText={props.errorMessageText}
                >
                    <FormInput
                        isHorizontal={false}
                        inputTitle="Имя"
                        inputValue={name.value} 
                        onChange={e=> name.onChange(e)}
                        onBlur={e=> name.onBlur(e)} 
                        placeholder="Введите имя"
                        type="text"
                        minLength="2"
                        maxLength="40"
                        isErrorShown={functions.validateNameInput(name)}
                        errorMessage="Введите корректное имя"
                    />
                    <FormInput 
                        isHorizontal={false}
                        inputTitle="E-mail"
                        inputValue={email.value} 
                        onChange={e=> email.onChange(e)}
                        onBlur={e=> email.onBlur(e)} 
                        placeholder="Введите e-mail"
                        type="email"
                        minLength="2"
                        maxLength="40"
                        isErrorShown={functions.validateEmailInput(email)}
                        errorMessage="Введите корректный e-mail"
                    />
                    <FormInput 
                        isHorizontal={false}
                        inputValue={password.value} 
                        onChange={e=> password.onChange(e)}
                        onBlur={e=> password.onBlur(e)} 
                        placeholder="Введите пароль"
                        type="password"
                        minLength="2"
                        maxLength="200"
                        isErrorShown={functions.validatePasswordInput(password)}
                        errorMessage="Введите корректный пароль"
                    />
                </PageWithForm>
        )
}

export default Register;