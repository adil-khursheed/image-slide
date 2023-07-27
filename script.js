const slideImages = document.querySelectorAll(".slide-images");
const dots = document.querySelectorAll(".dot");

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  if (n > slideImages.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slideImages.length;
  }

  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slideImages[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
