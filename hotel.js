// Add click event listener to each box
document.querySelectorAll('.box').forEach(box => {
    // Toggle description overlay visibility on click
    box.addEventListener('click', () => {
        box.querySelector('.description-overlay').classList.toggle('active');
    });
});




// home slider section and progress circle section starts here 

document.addEventListener('DOMContentLoaded', function () {
  const progressCircle = document.querySelector('.autoplay-progress svg');
  const progressContent = document.querySelector('.autoplay-progress span');

  var homeSlider = new Swiper('.home-slider', {
    // Your Swiper configuration options here
    loop: true,
    autoplay: {
      delay: 6000, // Set autoplay delay to 6 seconds
      disableOnInteraction: false,
    },
    on: {
      init: function (swiper) {
        // Start animation
        progressCircle.style.transition = `stroke-dashoffset ${swiper.params.autoplay.delay}ms linear`;
        progressCircle.style.strokeDashoffset = "0";

        // Update progress text with remaining time
        updateProgressText(swiper.params.autoplay.delay / 1000);
      },
      slideChangeTransitionStart: function () {
        // Reset progress
        progressCircle.style.transition = ''; // Reset transition
        progressCircle.style.strokeDashoffset = "125.6px";
      },
      slideChangeTransitionEnd: function (swiper) {
        // Start animation
        progressCircle.style.transition = `stroke-dashoffset ${swiper.params.autoplay.delay}ms linear`;
        progressCircle.style.strokeDashoffset = "0";

        // Update progress text with remaining time
        updateProgressText(swiper.params.autoplay.delay / 1000);
      },
    },
  });

  function updateProgressText(seconds) {
    let remainingSeconds = Math.ceil(seconds);
    progressContent.textContent = `${remainingSeconds}s`;
    
    // Update the progress text every second
    let timer = setInterval(() => {
      remainingSeconds--;
      progressContent.textContent = `${remainingSeconds}s`;
      if (remainingSeconds <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
});





// JavaScript code for toggling the menu
document.getElementById('menu').addEventListener('click', function() {
  var menuList = document.getElementById('menuList');
  var maxHeight = menuList.style.maxHeight;
  menuList.style.maxHeight = maxHeight === '0px' ? '100vh' : '0px';
});



// JavaScript code for mobile view
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.getElementById("menu");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function() {
      navbar.classList.toggle("show");
  });
});