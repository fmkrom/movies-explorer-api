import auth from './Api/Auth';

function register(name, email, password){
    auth.register(name, email, password)
    .then((res) =>{
        console.log(`Register sucesfull: ${res}`);
        console.log(res);
    })
    .catch((err)=> console.log(err));
}

function login(email, password){
    auth.login(email, password)
    .then((res) =>{
        console.log(`Login sucesfull: ${res}`);
    })
    .catch((err)=> console.log(err));
}


function editProfile(name, email){
    console.log('Edited User name: ', name);
    console.log('Edited User email: ', email);
}

function logout(){
    console.log('Logout successful!')
}

function closePopup(popupHookName){
    popupHookName(false)
}

function regulateArrayLength(array, currentLength){
    return array.length = currentLength;
}

function increaseArrayLength(array){
    let currentLength =  array.length + 3;
    console.log(currentLength);
    return currentLength;
}

function validateEmailInput(input){
    const emailInputIsEmpty = Boolean(input.isEmpty && input.isDirty);
    const emailIncorrect = Boolean(input.emailError && input.isDirty);
    const emailTooShort = Boolean(input.isDirty && input.minLength);

    const emailIsInValid = Boolean(emailTooShort || emailInputIsEmpty || emailIncorrect);
    return emailIsInValid;
}

function validatePasswordInput(input){
    const passwordInputIsEmpty = Boolean(input.isEmpty && input.isDirty);
    const passwordTooShort = Boolean(input.isDirty && input.minLength);
    
    const passwordIsInvalid = Boolean(passwordInputIsEmpty || passwordTooShort);
    return passwordIsInvalid;
}

function validateNameInput(input){
    const nameInputIsInvalid = (input.nameError && input.isDirty);
    const nameInputIsEmpty = Boolean(input.isEmpty && input.isDirty);
    const nameTooShort = Boolean(input.isDirty && input.minLength);
    
    const nameIsInvalid = Boolean(nameInputIsEmpty || nameTooShort || nameInputIsInvalid);
    return nameIsInvalid;
}

function filterMoviesByOwner(user, movies){
    const moviesFilteredByOwner = movies.filter((movie)=> movie.owner === user.id);
    return moviesFilteredByOwner;
}

const functions = {
    login, 
    register,
    editProfile,
    logout,
    closePopup,
    regulateArrayLength,
    increaseArrayLength,
    
    validateEmailInput,
    validatePasswordInput,
    validateNameInput,
    filterMoviesByOwner
}

export default functions;
