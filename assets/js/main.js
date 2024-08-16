// AOS
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// hide navbar
const navLinks = document.querySelectorAll(`.nav-link`);
const navCollapse = document.querySelector(`.navbar-collapse.collapse`);
const navToggler = document.querySelector(`.navbar-toggler`);
const main = document.querySelector(`main`);
const navBrand = document.querySelector(`.navbar-brand`);

function handleNavToggle() {
  navCollapse.classList.remove("show");
  navToggler.classList.add("collapsed");
}

navLinks.forEach(function (navLink) {
  navLink.addEventListener(`click`, handleNavToggle);
});
main.addEventListener(`click`, handleNavToggle);
navBrand.addEventListener(`click`, handleNavToggle);

// counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counter("count1", 0, 90, 3000);
        counter("count2", 0, 58, 2500);
        counter("count3", 0, 5, 3000);
        counter("count4", 0, 100, 3000);
        observer.unobserve(entry.target); // Ngừng theo dõi sau khi kích hoạt đếm
      }
    });
  });

  const counterSection = document.getElementById("counter");
  observer.observe(counterSection);
});

// owl-carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  item: 2,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
    },
    900: {
      items: 2,
    },
  },
});
