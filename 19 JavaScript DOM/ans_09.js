
localStorage.setItem('loginState','Has Not logged In');

const loginButton = document.querySelector('[type=login]');

const logoutButton = document.querySelector('[type=logout]');
const loginState = document.querySelector('h1');

loginButton.addEventListener('click',()=>{
    if(localStorage.getItem('loginState') === 'is logged In'){
        
        loginState.textContent = 'User is already logged In';
    }
    else 
    {
    localStorage.setItem('loginState','is logged In');

    loginState.textContent = `User ${localStorage.getItem('loginState')}`
    
}
});

logoutButton.addEventListener('click',()=>{

    if(localStorage.getItem('loginState') == 'Has Not logged In'){

        loginState.textContent = 'User is already logged out';
        console.log(localStorage.getItem('loginState'));
    }
    else{
        localStorage.setItem('loginState','Has Not logged In');

        loginState.textContent = `User ${localStorage.getItem('loginState')}`
    
    }
    
    localStorage.removeItem('loginState');

});


