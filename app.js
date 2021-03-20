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
