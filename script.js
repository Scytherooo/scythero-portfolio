
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "COMPUTER ENGINEER"
];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

const imageElement = document.querySelector('.main-container .image');
const audio = new Audio('E:/Downloads/Portfolio/Web/files/audio/music.mp3'); 
imageElement.addEventListener('mouseenter', () => {
    audio.currentTime = 0; 
    audio.play();
});

imageElement.addEventListener('mouseleave', () => {
    audio.pause();
});

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.dataset.filter; 
            filterButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');

            const slides = document.querySelectorAll('.swiper-slide');
            
            slides.forEach(slide => {
                const slideCategory = slide.dataset.category; 
                if (filterValue === 'all' || slideCategory === filterValue) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            });

            swiper.update();
            swiper.slideTo(0, 0); 
        });
    });
});

window.onload = typeWriter;
