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

function confirm(){
    document.getElementById('conteiner__form').style.display="none";
    document.getElementById('content__app').innerHTML=conteiner__confirm;
}