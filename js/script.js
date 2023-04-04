let conteiner__confirm = `<div class="conteiner__confirm">
    <div class="confirm">
        <div class="confirm__image">
            <img src="images/icon-complete.svg" alt="icon complete form">
        </div>
        <h2 class="confirm__title">
            THANK YOU!
        </h2>
        <p class="confirm__subtitle">
            We've added your card details
        </p>
        <a href="#" class="confirm__button">
            Continue
        </a>    
    </div>
</div>`

const inputs = document.querySelectorAll(".form__element .form__input");
const message = document.querySelectorAll(".form__message");
const message_error = document.querySelectorAll(".form__message--error");
const form= document.getElementById('form');

const expreciones = {
    card__name: /^[a-zA-ZÁ-Ó\s]{1,40}$/,
    card__number: /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?$/,
    card__exp_month: /^\d{2}$/,
    card__exp_year: /^\d{2}$/,
    card__cvc: /^\d{3}$/
}

let campos ={
    card__name: false,
    card__number: false,
    card__exp_month: false,
    card__exp_year: false,
    card__cvc: false
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case 'card__name':
            validarCampo(0,e.target,'card__name');
        break;
        case 'card__number':
            validarCampo(1,e.target,'card__number');
        break;
        case 'card__exp--month':
            validarCampo(2,e.target,'card__exp_month');
        break;
        case 'card__exp--year':
            validarCampo(3,e.target,'card__exp_year');
        break;
        case 'card__cvc':
            validarCampo(4,e.target,'card__cvc');
        break;
    }
    
}

function validarCampo(ind,target,exp){
    if(target.value==""){
        message[ind].classList.add('form__message--null');
        document.getElementById(target.id).classList.add('form__input--error');
        campos[exp]=false;
    }else{
        message[ind].classList.remove('form__message--null');
        if(expreciones[exp].test(target.value)){
            document.getElementById(target.id).classList.remove('form__input--error');
            message_error[ind].classList.remove('form__message--error-view');
            campos[exp]=true;
        }else{
            document.getElementById(target.id).classList.add('form__input--error');
            message_error[ind].classList.add('form__message--error-view');
            campos[exp]=false;
        }
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    inputs.forEach((input, i)=>{
        if(input.value==""){
            message[i].classList.add('form__message--null');
            document.getElementById(input.id).classList.add('form__input--error');
        }
    })
    if(campos.card__name && campos.card__number && campos.card__exp_month && campos.card__exp_year && campos.card__cvc){
        document.getElementById('conteiner__form').style.display="none";
        document.getElementById('content__app').innerHTML=conteiner__confirm;
    }
})

function confirm(){
    
}