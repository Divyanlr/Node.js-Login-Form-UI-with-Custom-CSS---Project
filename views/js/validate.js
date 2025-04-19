const form = document.querySelector('form');
const email = document.querySelector('input[type=email]');
const password = document.querySelector('input[type=password]');

form.addEventListener('submit', onsubmitFunction);

function onsubmitFunction(){
    if(email.value === '' || password.value === ''){
        event.preventDefault();
        alert('pls fill form')
        return false;
    }
}