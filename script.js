// search button

// const searchBtn = document.getElementById('searchBtn');
// const searchBar = document.getElementById('searchBar');

// searchBtn.addEventListener('click', () => {
//   if (searchBar.style.display === 'none') {
//     searchBar.style.display = 'block';
//   } else {
//     searchBar.style.display = 'none';
//   }
// });





function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

// hero section of home page

window.onload = function () {
    let slides = document.getElementsByClassName('carousel-item');
    let currentSlideIndex = 0;

    function addActive(slide) {
        slide.classList.add('active');
    }

    function removeActive(slide) {
        slide.classList.remove('active');
    }

    function showSlide(index) {
        removeActive(slides[currentSlideIndex]);
        addActive(slides[index]);
        currentSlideIndex = index;
    }

    function nextSlide() {
        let nextIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(nextIndex);
    }

    addActive(slides[currentSlideIndex]);
    setInterval(nextSlide, 4000); 
};



$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        },
    }
})
