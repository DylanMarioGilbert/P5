
// Sélectionnez les éléments du carrousel
var banner = document.getElementById('banner');
var bannerImg = banner.querySelector('.banner-img');
var arrowLeft = banner.querySelector('.arrow_left');
var arrowRight = banner.querySelector('.arrow_right');
var dots = banner.querySelectorAll('.dot');

// Données des diapositives
const slides = [
	{
		"image":'./assets/images/slideshow/slide1.jpg',
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":'./assets/images/slideshow/slide2.jpg',
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":'./assets/images/slideshow/slide3.jpg',
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":'./assets/images/slideshow/slide4.png',
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables pour suivre la diapositive actuelle
var currentSlide = 0;

// Fonction pour mettre à jour la diapositive affichée
function updateSlide() {
    bannerImg.src = slides[currentSlide].image;
    banner.querySelector('p').innerHTML = slides[currentSlide].tagLine;

    // Mettre à jour les points de navigation
    dots.forEach((dot, index) => {
        dot.classList.remove('dot_selected');
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        }
    });
}

// Fonction pour afficher la diapositive précédente
// function previousSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     updateSlide();
// }

// // Fonction pour afficher la diapositive suivante
// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     updateSlide();
// }

function previousSlide() {
    // Décrémente l'index de la diapositive actuelle
    currentSlide -= 1;

    // Vérifie si l'index est devenu négatif (en passant de la première à la dernière diapositive)
    if (currentSlide < 0) {
        // Revenir à la dernière diapositive
        currentSlide = slides.length - 1;
    }

    // Met à jour l'affichage avec la nouvelle diapositive
    updateSlide();
}

function nextSlide() {
    // Incrémente l'index de la diapositive actuelle
    currentSlide += 1;

    // Vérifie si l'index est supérieur à la longueur du tableau slides
    if (currentSlide >= slides.length) {
        // Revenir à la première diapositive
        currentSlide = 0;
    }

    // Met à jour l'affichage avec la nouvelle diapositive
    updateSlide();
}


// Ajoutez des event listeners pour les flèches gauche et droite
arrowLeft.addEventListener('click', previousSlide);
arrowRight.addEventListener('click', nextSlide);

// Ajoutez des event listeners pour les points de navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
        currentSlide = index;
        updateSlide();
    });
});

// Affichez la première diapositive au chargement de la page
updateSlide();

