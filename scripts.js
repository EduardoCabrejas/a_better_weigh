const burgerMenu = document.querySelector("#burger-menu");
const links = document.querySelector("#nav-links");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("open");

  const expanded = burgerMenu.getAttribute("aria-expanded") === "true";
  burgerMenu.setAttribute("aria-expanded", !expanded);

  links.classList.toggle("show");
  burgerMenu.classList.toggle("show");
});

const endDate = new Date("2025-09-30T23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days-box").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".time-container").innerHTML =
      "<p class='dark-text'>Offer expired</p>";
  }
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);

function moveContent() {
  const timeContainer = document.querySelector(".time-container");
  const toggleP = document.querySelector("#toggle-p");
  const header = document.querySelector("header");
  const imgResponsive = document.querySelector(".help-img-resp");
  const helpRedact = document.querySelector(".help-redact");
  const helpTextResp = document.querySelector("#help-text-resp");
  const helpSection = document.querySelector(".help-section");

  if (window.innerWidth <= 1024) {
    header.insertBefore(timeContainer, toggleP.nextSibling);
    if (
      imgResponsive &&
      helpRedact &&
      helpTextResp &&
      helpTextResp.parentNode === helpRedact
    ) {
      const ref = helpTextResp.nextElementSibling || null;
      helpRedact.insertBefore(imgResponsive, ref);
    } else if (imgResponsive && helpRedact) {
      helpRedact.appendChild(imgResponsive);
    }
  } else {
    if (imgResponsive && helpSection) {
      helpSection.appendChild(imgResponsive);
    }
    const homeGrid = document.querySelector(".home-grid");
    if (homeGrid && timeContainer) {
      homeGrid.appendChild(timeContainer);
    }
  }
}

window.addEventListener("resize", moveContent);
window.addEventListener("DOMContentLoaded", moveContent);
