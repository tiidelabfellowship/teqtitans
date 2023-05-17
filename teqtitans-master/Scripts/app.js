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

     // SLIDER

     var slides = document.querySelectorAll(".slide");
     var btns = document.querySelectorAll(".slider-btn");
     let currentSlide = 1;
     
     var repeat = function(activeClass){
         let active = document.getElementsByClassName('active');
         let i = 1;
     
         var repeater = () => {
             setTimeout(function(){
                 [...active].forEach((activeSlide) => {
                     activeSlide.classList.remove('active');
                 });
     
                 slides[i].classList.add('active');
                 btns[i].classList.add('active');
                 i++;
     
                 if(slides.length == i) {
                     i = 0;
                 }
                 if(i >= slides.length){
                     return;
                 }
                 repeater();
             }, 7000);
         }
         repeater();
     }
     repeat();

     // Service Item Icon Hover Styles
const serviceItem = document.querySelectorAll('.service-item');

for(i = 0; i < serviceItem.length; i++){
    let iconBlock = serviceItem[i]
    iconBlock.addEventListener('mouseenter', () =>{
        iconBlock.firstElementChild.classList.add ('white-bg')
    })
    iconBlock.addEventListener('mouseleave', () =>{
        iconBlock.firstElementChild.classList.remove ('white-bg')
    })
}

// gallery auto-slider
const imgWrap = document.querySelector('.img-wrap')
const images = document.querySelectorAll('.img-wrap img')
const imageItems = images.length
const animationDuration = imageItems * 7 + 's'
const translateX = images.length * -150
const root = document.documentElement

root.style.setProperty("--img-transform", translateX+'px')

for(i=0; i<imageItems; i++){

    imgWrap.appendChild(imgWrap.children[i].cloneNode(true));
    imgWrap.style.animationDuration = animationDuration

}