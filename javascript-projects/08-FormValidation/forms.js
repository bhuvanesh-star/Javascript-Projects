const form = getElementById('form');
const username = getElementById('userName');
const mailId = getElementById('mail');
const password = getElementById('createPassword');
const confirmPassword = getElementById('passwordConfirm');


form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});
// in case if the input is empty
const setError = (element, message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classlist.remove('success');
    
}
// in case if the input is filled
const setSuccess = element =>{
    const inputControl= element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = ()=>{
    const re =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    return re.test(string(email).toLowerCase());
}
const validateInputs =()=>{
    const userNamevalue = username.value.trim();
    const emailvalue = mailId.value.trim();
    const passwordvalue = typePassword.value.trim();
    const passwordConfirmvalue = password.value.trim();
    //to find if the input feild is emptyn or filled with values
    if(userNamevalue === ''){
        setError(username, "Username is Required");
    }
    else{
        setSuccess(username);
    }

    if(emailvalue === ''){
        setError(mailId, "Mail Id is Required")
    } 
    else if(!isValidEmail(emailvalue)) {
        setError(mailId, "Provide a Valid Email Address")
    }
    else{
        setSuccess(mailId);
    }
    if(passwordvalue === ''){
        setError(typePassword, "Please Provide a Password");
    }else if(passwordvalue.length<8){
        setError(typePassword, "Password Must be 8 Characters")
    }
    else{
        setSuccess(typePassword)
    }

    if(passwordConfirmvalue === ''){
        setError(password, "password doesn't match.")
    }else if (!password === typePassword){
        setError(password, "password doesn't match.")
    }
    else{
        setSuccess(password)
    }
};