//<!-- ════ SCRIPTS ════ -->
"use strict";

// Navbar scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");

  // Sticky CTA
  const stickyCta = document.getElementById("stickyCta");
  if (window.scrollY > 400) stickyCta.classList.add("visible");
  else stickyCta.classList.remove("visible");
});

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 },
);
revealEls.forEach((el) => observer.observe(el));

// Carousel
let currentReview = 0;
const track = document.getElementById("reviewsTrack");
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  const isMobile = window.innerWidth <= 768;
  const offset = isMobile ? currentReview * 100 : currentReview * 50;
  track.style.transform = `translateX(-${offset}%)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentReview));
}

function nextReview() {
  const cards = track.children.length;
  currentReview = (currentReview + 1) % cards;
  updateCarousel();
}

function prevReview() {
  const cards = track.children.length;
  currentReview = (currentReview - 1 + cards) % cards;
  updateCarousel();
}

function goToReview(n) {
  currentReview = n;
  updateCarousel();
}

// Auto-advance carousel
setInterval(nextReview, 5000);

// Mobile menu
function toggleMenu() {
  alert("Mobile menu: Add your links here!");
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
