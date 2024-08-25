document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;
    const passwordField = document.getElementById('password-field');
    const passwordValue = passwordField.value;
  
    if(emailValue === "sultan@gmail.com" && passwordValue === "sakibCSE")
    {
        window.location.href = "bank.html";
    }
    else{
        alert('Invalid User');
    }

    emailField.value = '';
    passwordField.value = '';
})