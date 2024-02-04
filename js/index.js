let header=document.querySelector('.header')
let burgerBtn = document.querySelector(".header__burger_button");
burgerBtn.addEventListener('click', ()=>{
    header.classList.toggle('open__menu')
})