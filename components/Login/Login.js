import '../PageWithForm/PageWithForm.css';

import useInputValidation from '../../utils/customHooks/useInputValidation';
import functions from '../../utils/utils';

import PageWithForm from '../PageWithForm/PageWithForm';
import FormInput from '../FormInput/FormInput';

function Login(props){

    const email = useInputValidation('', { isEmpty: true, minLength: 6, isEmail: true });
    const password = useInputValidation('', { isEmpty: true, minLength: 8, });

    const buttonDisabled = Boolean(!email.inputValid || !password.inputValid);

    function handleLoginUserSubmit(e){
        e.preventDefault();
        props.onLoginUser(email.value, password.value);
    }

    return (
            <PageWithForm
                    formTitle={'Рады видеть!'}
                    formName='form__login'
                    onSubmit={handleLoginUserSubmit}
                    buttonText='Войти'
                    formSubtitleText='Еще не зарегистрированы? '
                    formSubtitleLinkRoute='/register'
                    formSubtitleLinkText='Регистрация'
                    buttonDisabled={buttonDisabled}
                    errorMessageText={props.errorMessageText}
                >
                    <FormInput
                        isHorizontal={false} 
                        inputTitle="E-mail"
                        inputValue={email.value} 
                        onChange={e=> email.onChange(e)}
                        onBlur={e=> email.onBlur(e)}
                        placeholder="Введите Ваш e-mail"
                        type="text"
                        minLength="2"
                        maxLength="40"
                        isErrorShown={functions.validateEmailInput(email)}
                        errorMessage={"Введите корректный e-mail"}
                    />

                    <FormInput 
                        isHorizontal={false} 
                        inputTitle="Пароль"
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

export default Login;
