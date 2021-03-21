const burger = document.querySelector('.header__hamburger');
const mobile = document.querySelector('.mobile');
const formElement = document.querySelector('form');

//toggle hamburger menu animation for nav links
burger.addEventListener('click', function () {
    mobile.classList.toggle('active');
});


// preventing page from refreshing when clicking submit buttons
formElement.addEventListener('submit' ,function(e){
    e.preventDefault();
});


//image slider for home page
//make two buttons / forwards and backwards
//have a counter everytime button is clicked . + - 
//make a loop for the images 
//loop through the length of the images
const slide = document.querySelector('.gallery__carousel');
const images = document.querySelectorAll('.gallery__carousel img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter starts at 1 as the 0 index is the last picture of the loop
let counter = 1;
//how much to slide
let size = images[0].clientWidth;

//starts at the first picture
slide.style.transform = 'translateX(' + (-size * counter) + 'px)';


//button listeners to add onto counter and switch to next image
nextBtn.addEventListener('click' , function(e){
    if(counter >= images.length -1) return;
    slide.style.transition = "transform 0.4s ease-in-out ";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    size = images[0].clientWidth;
});

prevBtn.addEventListener('click' , function(e){
    if(counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    size = images[0].clientWidth;
});


//adds onto the counter and changes the next slide in the carousel making a loop
slide.addEventListener('transitionend' , function(e){
    if(images[counter].id === 'lastClone'){
        slide.style.transition = "none";
        counter = images.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(images[counter].id === 'firstClone'){
        slide.style.transition = "none";
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});