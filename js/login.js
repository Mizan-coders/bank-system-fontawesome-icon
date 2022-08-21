document.getElementById('login-btn').addEventListener('click', function(){
    const inputEmailField = document.getElementById('input-email');
    const inputEmail = inputEmailField.value;

    const inputPasswordField = document.getElementById('input-password');
    const inputPassword = inputPasswordField.value;

    inputEmailField.value = '';

    if(inputEmail === 'Webmizan@hotmail.com' && inputPassword === 'Webmizan'){
        window.location.href='bank.html'
    }
    else{
        alert('Enter valid email and password!');
    }
})