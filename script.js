document.addEventListener("DOMContentLoaded", () => {
    /* ───────────────────────────────
       Theme Toggle
    ─────────────────────────────── */
    const themeSwitch = document.getElementById("switch");
    themeSwitch.addEventListener("change", () => {
      // Toggle the 'light-theme' class based on the checkbox state
      document.body.classList.toggle("light-theme", themeSwitch.checked);
    });
  
    /* ───────────────────────────────
       Home Section Animations
    ─────────────────────────────── */
    const homeH1Elements = document.querySelectorAll(".home-content h1");
    const homePElement = document.querySelector(".home-content p");
    homeH1Elements.forEach((h1, index) => {
      setTimeout(() => {
        h1.style.opacity = "1";
        h1.style.transform = "translateX(0)";
        h1.style.transition = "all 1s ease-out";
      }, index * 300);
    });
    setTimeout(() => {
      if (homePElement) {
        homePElement.style.opacity = "1";
        homePElement.style.transform = "translateX(0)";
        homePElement.style.transition = "all 1s ease-out";
      }
    }, 600);
  
    /* ───────────────────────────────
       Navigation Menu Handling
    ─────────────────────────────── */
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const goBackButton = document.getElementById("goBack");
  
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  
    goBackButton.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  
    /* ───────────────────────────────
       Word Animation in Home Section
    ─────────────────────────────── */
    const words = ["Web Designer", "UX Designer", "Front End Developer", "Software Tester"];
    let wordIndex = 0;
    const textAnimationSpan = document.querySelector(".text-animation span");
  
    function changeWord() {
      if (textAnimationSpan) {
        textAnimationSpan.textContent = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    // Initialize and update the word every 3 seconds
    changeWord();
    setInterval(changeWord, 3000);
  
    /* ───────────────────────────────
       Create Stars in Background
    ─────────────────────────────── */
    function createStars(num) {
      const container = document.querySelector(".stars-container");
      if (!container) return;
      for (let i = 0; i < num; i++) {
        const star = document.createElement("div");
        star.className = "star";
        // Random position
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        // Random size (between 1px and 4px)
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        // Random animation durations for twinkling and movement
        star.style.animationDuration = `${Math.random() * 3 + 2}s, ${Math.random() * 15 + 5}s`;
        container.appendChild(star);
      }
    }
    createStars(1500);
  
    /* ───────────────────────────────
       Draggable Skills Scroll
    ─────────────────────────────── */
    const skillsContainer = document.querySelector(".skills-container");
    if (skillsContainer) {
      let isMouseDown = false;
      let startX;
      let scrollLeft;
  
      skillsContainer.addEventListener("mousedown", (e) => {
        isMouseDown = true;
        startX = e.pageX - skillsContainer.offsetLeft;
        scrollLeft = skillsContainer.scrollLeft;
        skillsContainer.style.cursor = "grabbing";
      });
  
      skillsContainer.addEventListener("mouseleave", () => {
        isMouseDown = false;
        skillsContainer.style.cursor = "grab";
      });
  
      skillsContainer.addEventListener("mouseup", () => {
        isMouseDown = false;
        skillsContainer.style.cursor = "grab";
      });
  
      skillsContainer.addEventListener("mousemove", (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - skillsContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed as needed
        skillsContainer.scrollLeft = scrollLeft - walk;
      });
    }
  });
  