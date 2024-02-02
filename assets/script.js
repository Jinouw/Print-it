
// script.js
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelector(".dots");

let currentIndex = 0;

slides.forEach(dot => {
    dot = document.createElement("div");
    dot.classList = "dot"
    
    dots.appendChild(dot);
});

const dot = document.querySelectorAll('.dot'); 

function updateDots(index) {
    dot.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); 
        } else {
            dot.classList.remove('dot_selected'); 
        }
    });
}


function updateCarousel(index, direction) {
     
      if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

    
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic sur la flèche ${direction}`);
}


arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); 
});


arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); 
});



updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex); 