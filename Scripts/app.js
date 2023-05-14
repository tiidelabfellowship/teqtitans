// Bring in Elements from the DOM
const slideoutMenu = document.getElementById('slideout-menu');
const bars = document.querySelector('.fa-bars');
const times = document.querySelector('.fa-times');


// Make Elements listen for an event
bars.addEventListener('click', ()=>{
    slideoutMenu.classList.add('open')
})
times.addEventListener('click', ()=>{
    slideoutMenu.classList.remove('open')
})
