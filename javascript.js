document.getElementById("shopButton").addEventListener("click", function() {
    window.location.href = "shop.html"; // Redirect to the shop page
  });

  document.getElementById("shop-link").addEventListener("click", function() {
    window.location.href = "shop.html";
  });

  document.getElementById("contact-link").addEventListener("click", function() {
    window.location.href = "contact.html";
  });

  document.querySelector("form").addEventListener("submit", function(event) {
    alert("Thank you! We’ll get back to you shortly.");
  });

  /* casioGshockblack image slideshow */
  const images = [
    "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg",
    "https://media.istockphoto.com/id/650233226/photo/military-style-watch.jpg?s=612x612&w=0&k=20&c=PknuHX2Dh0SN2JTKF60Ftxowdiwoudc_zTu9Vd2UD-w=",
    "https://cdn.pixabay.com/photo/2022/08/29/15/11/clock-7419071_640.jpg"
  ];
  
  let currentIndex = 0;
  const slideImg = document.getElementById("slide-img");
  
  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slideImg.src = images[currentIndex];
  });
  
  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    slideImg.src = images[currentIndex];
  });