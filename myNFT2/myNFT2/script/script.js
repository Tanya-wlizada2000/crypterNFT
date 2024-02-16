// dark mode
function colorBlack() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
// menubar
let subMenu = document.getElementById("subMenu");
function toggleMenu() {
  subMenu.classList.toggle("open-menu")
}
// photo chaanging
mainimage = document.getElementById("mainImg");
mainTwo = document.getElementById("mainTwo");
mainThree = document.getElementById("mainThree");

image1 = document.getElementById("image1");
image1Src = document.getElementById("image1").src;
image2 = document.getElementById("image2");
image2Src = document.getElementById("image2").src;
image3 = document.getElementById("image3");
image3Src = document.getElementById("image3").src;
image4 = document.getElementById("image4");
image4Src = document.getElementById("image4").src;

image5 = document.getElementById("image5");
image5Src = document.getElementById("image5").src;
image6 = document.getElementById("image6");
image6Src = document.getElementById("image6").src;
image7 = document.getElementById("image7");
image7Src = document.getElementById("image7").src;
image8 = document.getElementById("image8");
image8Src = document.getElementById("image8").src;

image9 = document.getElementById("image9");
image9Src = document.getElementById("image9").src;
image10 = document.getElementById("image10");
image10Src = document.getElementById("image10").src;
image11 = document.getElementById("image11");
image11Src = document.getElementById("image11").src;
image12 = document.getElementById("image12");
image12Src = document.getElementById("image12").src;


image1.addEventListener("click", function () {
  mainimage.src = image1Src;
  mainimage.style.width = "352px"; // Increase width to 300 pixels
  mainimage.style.height = "240px"; // Maintain aspect ratio

});


image2.addEventListener("click", function () {
  mainimage.src = image2Src;
  mainimage.style.width = "352px"; // Increase width to 300 pixels
  mainimage.style.height = "240px"; // Maintain aspect ratio
});

image3.addEventListener("click", function () {
  mainimage.src = image3Src;
  mainimage.style.width = "352px"; // Increase width to 300 pixels
  mainimage.style.height = "240px"; // Maintain aspect ratio
});

image4.addEventListener("click", function () {
  mainimage.src = image4Src;
  mainimage.style.width = "352px"; // Increase width to 300 pixels
  mainimage.style.height = "240px"; // Maintain aspect ratio
});




image5.addEventListener("click", function () {
  mainTwo.src = image5Src;
  mainTwo.style.width = "352px"; // Increase width to 300 pixels
  mainTwo.style.height = "240px"; // Maintain aspect ratio

});


image6.addEventListener("click", function () {
  mainTwo.src = image6Src;
  mainTwo.style.width = "352px"; // Increase width to 300 pixels
  mainTwo.style.height = "240px"; // Maintain aspect ratio
});

image7.addEventListener("click", function () {
 mainTwo.src = image7Src;
 mainTwo.style.width = "352px"; // Increase width to 300 pixels
 mainTwo.style.height = "240px"; // Maintain aspect ratio
});

image8.addEventListener("click", function () {
  mainTwo.src = image8Src;
  mainTwo.style.width = "352px"; // Increase width to 300 pixels
  mainTwo.style.height = "240px"; // Maintain aspect ratio
});


image9.addEventListener("click", function () {
  mainThree.src = image9Src;
  mainThree.style.width = "352px"; // Increase width to 300 pixels
  mainThree.style.height = "240px"; // Maintain aspect ratio
});

image10.addEventListener("click", function () {
  mainThree.src = image10Src;
  mainThree.style.width = "352px"; // Increase width to 300 pixels
  mainThree.style.height = "240px"; // Maintain aspect ratio
});

image11.addEventListener("click", function () {
  mainThree.src = image11Src;
  mainThree.style.width = "352px"; // Increase width to 300 pixels
  mainThree.style.height = "240px"; // Maintain aspect ratio
});

image12.addEventListener("click", function () {
  mainThree.src = image12Src;
  mainThree.style.width = "352px"; // Increase width to 300 pixels
  mainThree.style.height = "240px"; // Maintain aspect ratio
});







// for card scrolling
// // //
document.addEventListener("DOMContentLoaded", function() {
  let items = document.querySelectorAll('.Creator-Profile .profile-card' );
  let active = 0;

  function loadShow() {
    // Hide all cards initially
    items.forEach(item => {
      item.style.transform = 'none';
      item.style.zIndex = '0';
      item.style.filter = 'blur(0)';
      item.style.opacity = '1';
    });

    // Show active card
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
  }

  function checkScreenWidth() {
    loadShow();
  }

  // Call checkScreenWidth when the page loads and when the window is resized
  window.onload = checkScreenWidth;
  window.onresize = checkScreenWidth;

  let next = document.getElementById('next');
  let prev = document.getElementById('prev');

  next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
  }

  prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
  }
});



//   for dropdown
const mainItems = document.querySelectorAll(
  '.main-item'
);

mainItems.forEach((mainItem) => {
  mainItem.addEventListener('click', () => {
    mainItem.classList.toggle(
      'main-item--open'
    );
  })
});








//  ////// For the slider value change
const priceSlider = document.getElementById('priceSlider');
const priceDisplay = document.getElementById('priceDisplay');

priceSlider.addEventListener('input', function() {
priceDisplay.textContent = priceSlider.value;
updateSliderStyle(priceSlider);
});

function updateSliderStyle(slider) {
const percentage = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;

slider.style.height = `${percentage / 10}px`; 
}




// //////////
// // for hot-bid-cards slider

const sliders = document.querySelectorAll('.hot-bid-container');

sliders.forEach(slider => {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;

      slider.scrollLeft = scrollLeft - walk;
  });
});




// //////////
// // for discover-cards slider

const discoverContainers = document.querySelectorAll('.discover-container');

discoverContainers.forEach(container => {
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('active');
  });

  container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3;

      container.scrollLeft = scrollLeft - walk;
  });
});

