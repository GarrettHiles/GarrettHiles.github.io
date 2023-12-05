//Open and Close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//displays first image when page is loaded
var slideIndex = 1;
showSlides(slideIndex);

//This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//changes slides when the dots are clicked

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex =1};
    if (n < 1) {slideIndex = slides.lenght};
    for (i =0; i < slides.length; i++) {
        slides[i].style.display = "none"; //This for loop takes each item iin the array slides and sets the display to none

    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//This code will create close the contact form when the user clicks off of it
// the first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".contact")){
        closeForm()
    }
}, false)


