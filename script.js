document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".animated-text");
    const words = ["Frontend Developer", "Web Designer", "UI/UX Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentWord = words[wordIndex];
        let currentText = isDeleting 
            ? currentWord.substring(0, charIndex--) 
            : currentWord.substring(0, charIndex++);
        
        text.textContent = currentText;
        
        let speed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentWord.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        }
        
        setTimeout(typeEffect, speed);
    }
    
    typeEffect();

    document.addEventListener("DOMContentLoaded", function () {
        const details = document.querySelectorAll(".detail");
        
        details.forEach(detail => {
            detail.addEventListener("mouseover", function () {
                this.style.backgroundColor = "#292929";
                this.style.boxShadow = "0 4px 15px rgba(255, 255, 255, 0.2)";
            });
            
            detail.addEventListener("mouseout", function () {
                this.style.backgroundColor = "#1e1e1e";
                this.style.boxShadow = "0 4px 10px rgba(255, 255, 255, 0.1)";
            });
        });
    });
    
});
