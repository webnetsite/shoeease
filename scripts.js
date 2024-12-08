// Toggle the navigation menu on click
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
  
  // Close the menu when a link is clicked on mobile
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('active'); // Close the menu after link click
    });
  });

  /*carouse*/
  const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

// Function to move to the slide
function moveToSlide(index) {
  const totalSlides = slides.length;

  // Loop back to the first slide if at the end
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  // Update the carousel's transform property to move the slides
  carousel.style.transform = `translateX(-${index * 100}%)`;  // Moves the carousel one slide at a time
  return index;
}

// Auto slide every 3 seconds
function autoSlide() {
  index = moveToSlide(index + 1);
}

setInterval(autoSlide, 3000);

// Event listeners for prev and next buttons
prev.addEventListener('click', () => {
  index = moveToSlide(index - 1);
});

next.addEventListener('click', () => {
  index = moveToSlide(index + 1);
});
