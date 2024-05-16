/* navbar a scorrimento */
window.addEventListener("scroll", function() {
    const navbar2 = document.querySelector(".navbar2");
    if (window.scrollY > 50) {
      navbar2.style.top = "0";
    } else {
      navbar2.style.top = "-100px";
    }
  });





/* navbar hamburger */

function myFunction(x) {
  x.classList.toggle("change");
}