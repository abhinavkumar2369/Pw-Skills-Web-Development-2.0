const nameInput = document.querySelector('[type=text]');
const emailInput = document.querySelector('[type=email]');
const passwordInput = document.querySelector('[type=password]');

const form = document.querySelector('form');

const nameInputWarning = document.querySelector('[data-warning-name]');

const passwordInputWarning = document.querySelector('[data-warning-password]');


nameInput.addEventListener('keyup',()=>{

    const nameLength = nameInput.value;
    if(nameLength.length >= 3 ){

        nameInputWarning.classList.add('hidden');
    }
    else{
        nameInputWarning.classList.remove('hidden');
    }

});


passwordInput.addEventListener('keyup',()=>{

    const passwordLength = passwordInput.value;

    if(passwordLength.length >= 8 ){

        passwordInputWarning.classList.add('hidden');
    }
    else{
        passwordInputWarning.classList.remove('hidden');
    }
    const nameLength = nameInput.value;
    if(nameLength.length >= 3 ){

        nameInputWarning.classList.add('hidden');
    }
    else{
        nameInputWarning.classList.remove('hidden');
    }
});

form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const nameLength = nameInput.value;

    const passwordLength = passwordInput.value;

    if(nameLength.length <= 2 || passwordLength.length <= 7){

        alert('Form Validation Failed!!');
    }
    else{
        alert('Form Validation Successfull !!');
    }
    console.log(e);

})
