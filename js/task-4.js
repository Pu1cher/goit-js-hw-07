const form = document.querySelector('.login-form');
function formHandler(event) {
    event.preventDefault();
    const trimmedEmail = event.target.email.value.trim();
    const trimmedPass = event.target.password.value.trim();
    
    if (trimmedEmail === '' || trimmedPass === '')  {
        alert(`All form fields must be filled in`)
    }
    else {
const data = {
        email: trimmedEmail,
        password: trimmedPass
    }
    console.log(data)
    }
    
}


form.addEventListener('submit', formHandler) 
form.addEventListener('submit', (e) => {
    form.reset()
})


