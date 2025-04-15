window.onload = () => {
    window.scrollTo(0, 0); // Resets scroll position to the top
};

//nav hidden
// Function to check if the screen is small
function isSmallScreen() {
  return window.innerWidth <= 768; // Adjust breakpoint as needed
}

// Variables to track scroll position
let lastScrollPosition = 0;

// Add scroll event listener
window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Check if the screen is small
  if (isSmallScreen()) {
    const nav = document.querySelector('nav');

    // If scrolling down, hide the nav
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 0) {
      nav.classList.add('hidden-1');
    } else {
      // If scrolling up, show the nav
      nav.classList.remove('hidden-1');
    }

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
  }
});

//Billboard
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".billboard-video");
    video.addEventListener("loadeddata", () => {
        video.classList.add("loaded");
    });
});

// video gallery
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const videoWrappers = document.querySelectorAll('.video-wrapper');

let currentIndex = 0;

// Scroll to the previous video
leftButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    videoWrappers[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
});

// Scroll to the next video
rightButton.addEventListener('click', () => {
  if (currentIndex < videoWrappers.length - 1) {
    currentIndex++;
    videoWrappers[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
});

// Select all video elements in the gallery
document.querySelectorAll('.video-wrapper video').forEach((video) => {
    // Play the video when the user hovers over it
    video.addEventListener('mouseenter', () => {
      video.play();
    });
  
    // Pause the video when the user moves the cursor away
    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0; // Optionally reset the video to the start
    });
  });
  
  //for mobile
  document.querySelectorAll('.video-wrapper video').forEach((video) => {
    let isPlaying = false;
  
    video.addEventListener('click', () => {
      if (isPlaying) {
        video.pause();
        video.currentTime = 0; // Optional: Reset video
        isPlaying = false;
      } else {
        video.play();
        isPlaying = true;
      }
    });
  });
  

//Carousel
    const carouselTrack = document.querySelector('.carousel-track');

    // Pause the animation on hover
    carouselTrack.addEventListener('mouseover', () => {
        carouselTrack.style.animationPlayState = 'paused';
    });

    // Resume the animation when the cursor leaves
    carouselTrack.addEventListener('mouseout', () => {
        carouselTrack.style.animationPlayState = 'running';
    });

// JavaScript for Gold Carousel
const track = document.querySelector('.carousel-trackk');
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');

let currentIndexx = 0;

// Function to update the carousel position
function updateCarousel(index) {
  // Hide all items first
  items.forEach(item => item.classList.remove('active'));

  // Show the current item
  items[index].classList.add('active');

  // Update the active indicator
  updateIndicators(index);

  // Ensure the item scrolls into view (if necessary)
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Function to update the active indicator
function updateIndicators(index) {
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

// Add event listeners to indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

// Initialize carousel
updateCarousel(currentIndex);
setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
  }, 3000); // Switch every 3 seconds
  
//Feature product
document.querySelectorAll('.add-to-cart').forEach((icon) => {
    icon.addEventListener('click', () => {
      alert('Jewelry added to cart!');
      // Add logic for adding jewelry to cart
    });
  });
  
  document.querySelectorAll('.favorite').forEach((icon) => {
    icon.addEventListener('click', () => {
      alert('Jewelry added to favorites!');
      // Add logic for adding jewelry to favorites
    });
  });
  
  // side menu
  function toggleMenu() {
    const menu = document.querySelector('.left-menu');
    menu.classList.toggle('expanded');
}