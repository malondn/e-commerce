document.querySelector("form").addEventListener("submit", function(event) {
    alert("Thank you! We’ll get back to you shortly.");
  });

document.getElementById("home-link").addEventListener("click", function() {
  window.location.href = "index.html";
})

document.getElementById("shop-link").addEventListener("click", function() {
  window.location.href = "shop.html";
})