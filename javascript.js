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