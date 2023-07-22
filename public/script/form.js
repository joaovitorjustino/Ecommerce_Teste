
const submitBtn = document.querySelector('.submit-btn');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');
const tac = document.querySelector('#terms-and-cond');
const notification = document.querySelector('#notification');


submitBtn.addEventListener('click', () =>{
    if(nome.value.length < 3){
        showAlert('Name must be longer than 3 letters');
    }
    else if(!email.value.length){
        showAlert('enter your email');
    }
    else if(password.value.length < 8){
        showAlert('Password must be longer than 8 letters');
    }
    else if(!number.value.length){
        showAlert('enter your phone number');
    }
    else if(!Number(number.value) || number.value.length < 10){
        showAlert('invalid number, please enter valid one');
    }
    else if(!tac.checked){
        showAlert('you must agree to our terms and conditions')
    }
    else{
        sendData('/signup', {
            nome: nome.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller: false
        })
    }
})

const showAlert = (msg) =>{
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}

const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
    })
}

const processData = (data) => {
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    } else if(data.nome){
        data.authToken - generateToken(data.email);
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}

window.onload = () =>{
    if(sessionStorage.user){
        user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            location.replace('/');
        }
    }
}