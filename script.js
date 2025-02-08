// Hämta checkboxen (växlaren) och lägg till eventlyssnare för temaväxling
var checkbox = document.getElementById('switch');
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        document.body.classList.add('light-theme');  // Växla till ljust tema
    } else {
        document.body.classList.remove('light-theme');  // Tillbaka till mörkt tema
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const pElement = document.querySelector(".home-content p");

    h1Elements.forEach((h1, index) => {
        setTimeout(() => {
            h1.style.opacity = "1";
            h1.style.transform = "translateX(0)";
            h1.style.transition = "all 1s ease-out";
        }, index * 300); // Gör att varje h1 kommer in i turordning
    });

    setTimeout(() => {
        pElement.style.opacity = "1";
        pElement.style.transform = "translateX(0)";
        pElement.style.transition = "all 1s ease-out";
    }, 600); // Fördröjning så att P kommer in efter H1
});











// Menyhantering
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const goBackButton = document.getElementById('goBack');

// Visa menyn när du klickar på menyns ikon
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Växla mellan synlig/dold meny
});

// Stäng menyn när du klickar på "Stäng Meny"
goBackButton.addEventListener('click', () => {
    navbar.classList.remove('active'); // Göm menyn
});

// Ordanimation
const words = ['Web Designer', 'UX Designer', 'Front End Developer', 'Software Tester'];
let index = 0;

function changeWord() {
    const span = document.querySelector('.text-animation span');
    span.textContent = words[index];
    index = (index + 1) % words.length;
}

setInterval(changeWord, 3000); // Byt ord var 3:e sekund


function createStars(num) {
    const container = document.querySelector('.stars-container');
    
    for (let i = 0; i < num; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        
        // Slumpmässig position
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        
        // Slumpmässig storlek
        let size = Math.random() * 3 + 1; // Mellan 1px och 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Slumpmässig animationstid
        star.style.animationDuration = `${Math.random() * 3 + 2}s, ${Math.random() * 15 + 5}s`;

        container.appendChild(star);
    }
}

createStars(1500); // Skapa 150 stjärnor*



const skillsContainer = document.querySelector('.skills-container');

let isMouseDown = false;
let startX;
let scrollLeft;

skillsContainer.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - skillsContainer.offsetLeft; // Få X-positionen där musen klickas
    scrollLeft = skillsContainer.scrollLeft; // Få den nuvarande scrollpositionen
    skillsContainer.style.cursor = 'grabbing'; // Ändra muspekaren när användaren håller nere
});

skillsContainer.addEventListener('mouseleave', () => {
    isMouseDown = false;
    skillsContainer.style.cursor = 'grab'; // Återgå till standard markör
});

skillsContainer.addEventListener('mouseup', () => {
    isMouseDown = false;
    skillsContainer.style.cursor = 'grab'; // Återgå till standard markör
});

skillsContainer.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return; // Om musen inte är nere, gör inget
    e.preventDefault(); // Förhindra standard dragbeteende
    const x = e.pageX - skillsContainer.offsetLeft;
    const scroll = (x - startX) * 2; // Rulla snabbare
    skillsContainer.scrollLeft = scrollLeft - scroll;
});
