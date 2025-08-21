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
  const socialIcons = document.querySelector("#footer-social-icons");
  const copyrightP = document.querySelector("#footer-copyright");
  const footerColR = document.querySelector(".footer-col-r");
  const footerTitleL = document.querySelector("#footer-title-l");
  const footerTitleR = document.querySelector("#footer-title-r");
  const footerListL = document.querySelector("#footer-list-l");
  const footerListR = document.querySelector("#footer-list-r");
  const footerListsContainer = document.querySelector(
    ".footer-lists-container"
  );
  const footerHgroup = document.querySelector(".footer-col-r hgroup");
  if (window.innerWidth <= 768) {
    // MOBILE: Reorganize footer titles and lists vertically

    // Move existing content
    if (header && timeContainer && toggleP) {
      header.insertBefore(timeContainer, toggleP.nextSibling);
    }

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

    // Reorganize footer titles and lists
    if (
      footerTitleL &&
      footerTitleR &&
      footerListL &&
      footerListR &&
      footerListsContainer
    ) {
      // Check if already reorganized
      if (!document.querySelector(".footer-mobile-col-l")) {
        // Create mobile column containers
        const mobileColL = document.createElement("div");
        mobileColL.className = "footer-mobile-col-l";
        const mobileColR = document.createElement("div");
        mobileColR.className = "footer-mobile-col-r";

        // Move title-l and list-l to first mobile column
        mobileColL.appendChild(footerTitleL);
        mobileColL.appendChild(footerListL);

        // Move title-r and list-r to second mobile column
        mobileColR.appendChild(footerTitleR);
        mobileColR.appendChild(footerListR);

        // Clear existing containers and add mobile columns
        footerHgroup.style.display = "none";
        footerListsContainer.innerHTML = "";
        footerListsContainer.appendChild(mobileColL);
        footerListsContainer.appendChild(mobileColR);
      }
    }

    // Handle social icons + copyright
    if (socialIcons && copyrightP && footerColR) {
      let footerBottomContainer = document.querySelector(
        ".footer-bottom-container"
      );
      if (!footerBottomContainer) {
        footerBottomContainer = document.createElement("div");
        footerBottomContainer.className = "footer-bottom-container";
        footerBottomContainer.appendChild(socialIcons);
        footerBottomContainer.appendChild(copyrightP);
        footerColR.appendChild(footerBottomContainer);
      }
    }
  } else if (window.innerWidth <= 1024) {
    // TABLET: Keep desktop structure but move social icons

    // Restore desktop structure if coming from mobile
    if (document.querySelector(".footer-mobile-col-l")) {
      // Restore original structure
      if (
        footerTitleL &&
        footerTitleR &&
        footerListL &&
        footerListR &&
        footerListsContainer &&
        footerHgroup
      ) {
        // Show hgroup again
        footerHgroup.style.display = "flex";

        // Move titles back to hgroup
        footerHgroup.appendChild(footerTitleL);
        footerHgroup.appendChild(footerTitleR);

        // Clear and restore lists container
        footerListsContainer.innerHTML = "";
        footerListsContainer.appendChild(footerListL);
        footerListsContainer.appendChild(footerListR);
      }
    }

    // Move existing content
    if (header && timeContainer && toggleP) {
      header.insertBefore(timeContainer, toggleP.nextSibling);
    }

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

    // Handle social icons + copyright for tablet
    if (socialIcons && copyrightP && footerColR) {
      let footerBottomContainer = document.querySelector(
        ".footer-bottom-container"
      );
      if (!footerBottomContainer) {
        footerBottomContainer = document.createElement("div");
        footerBottomContainer.className = "footer-bottom-container";
        footerBottomContainer.appendChild(socialIcons);
        footerBottomContainer.appendChild(copyrightP);
        footerColR.appendChild(footerBottomContainer);
      }
    }
  } else {
    // DESKTOP: Restore everything to original positions

    // Restore desktop structure if coming from mobile/tablet
    if (document.querySelector(".footer-mobile-col-l")) {
      if (
        footerTitleL &&
        footerTitleR &&
        footerListL &&
        footerListR &&
        footerListsContainer &&
        footerHgroup
      ) {
        // Show hgroup again
        footerHgroup.style.display = "flex";

        // Move titles back to hgroup
        footerHgroup.appendChild(footerTitleL);
        footerHgroup.appendChild(footerTitleR);

        // Clear and restore lists container
        footerListsContainer.innerHTML = "";
        footerListsContainer.appendChild(footerListL);
        footerListsContainer.appendChild(footerListR);
      }
    }

    if (imgResponsive && helpSection) {
      helpSection.appendChild(imgResponsive);
    }

    const homeGrid = document.querySelector(".home-grid");
    if (homeGrid && timeContainer) {
      homeGrid.appendChild(timeContainer);
    }

    // Move social icons back to left column and restore copyright
    if (socialIcons && document.querySelector(".footer-col-l")) {
      const footerColL = document.querySelector(".footer-col-l");
      const footerBottomContainer = document.querySelector(
        ".footer-bottom-container"
      );

      footerColL.appendChild(socialIcons);
      if (footerBottomContainer && copyrightP && footerColR) {
        footerColR.appendChild(copyrightP);
        footerBottomContainer.remove();
      }
    }
  }
}

window.addEventListener("resize", moveContent);
window.addEventListener("DOMContentLoaded", moveContent);

const faqGroups = document.querySelectorAll(".faq-group");
faqGroups.forEach((group) => {
  const chevron = group.querySelector(".chevron-down");
  const content = group.querySelector("p");

  content.style.display = "none";

  chevron.addEventListener("click", () => {
    chevron.classList.toggle("open");

    if (content.style.display === "none") {
      content.style.display = "block";
      const isOpen = chevron.classList.contains("open");
      // O si lo pones en el h1:
      title.setAttribute("aria-expanded", isOpen);
    } else {
      content.style.display = "none";
    }
  });

  const title = group.querySelector("h1");
  title.addEventListener("click", () => {
    chevron.classList.toggle("open");

    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});
