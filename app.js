

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');

stars.forEach(star => {
    star.addEventListener('click', function() {
        let rating = this.getAttribute('data-value');
        ratingValue.textContent = rating;

        // Reset all stars
        stars.forEach(s => s.classList.remove('active'));

        // Highlight the selected stars
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('active');
        }
    });
});

