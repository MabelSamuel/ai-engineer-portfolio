const PORTFOLIO_LINKS = {
  github: "https://github.com/MabelSamuel",
  linkedin: "https://www.linkedin.com/in/mabel-samuel-2bb9b42a9/",
  cv: "Mabel_Samuel_AI_Backend_Engineer.pdf",
  docuchat: "https://github.com/MabelSamuel/docuchat",
  groupProject: "https://github.com/MabelSamuel/tasklume" 
};

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      navLinks.classList.toggle("is-open", !isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.querySelector("#year").textContent = new Date().getFullYear();

  // Keep the project cards honest: repository links only become clickable
  // when a real URL is supplied in PORTFOLIO_LINKS.
  document.querySelectorAll("[data-repo]").forEach((link) => {
    const key = link.dataset.repo;
    const url = PORTFOLIO_LINKS[key];

    if (url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.innerHTML = 'View GitHub repository <span aria-hidden="true">↗</span>';
    } else {
      link.href = "#contact";
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });

  // LinkedIn and CV are intentionally left unlinked until the real URLs exist.
  document.querySelectorAll("[data-link]").forEach((link) => {
    const key = link.dataset.link;
    const url = PORTFOLIO_LINKS[key];

    if (url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.classList.remove("placeholder-link");
      link.querySelector("span:last-child").textContent =
        key === "linkedin" ? "View profile ↗" : "View CV / Resume ↗";
    } else if (key === "cv") {
      // A locally hosted cv.pdf is also supported if no external URL is set.
      link.href = "cv.pdf";
      link.querySelector("span:last-child").textContent = "Add cv.pdf to website ↗";
      link.addEventListener("click", (event) => {
        // Avoid a broken download until the file has been added.
        if (!document.documentElement.dataset.cvAdded) {
          event.preventDefault();
          const hint = document.querySelector("#contact-hint");
          hint.textContent = "CV not added yet: set the cv URL in script.js or add your PDF as cv.pdf before publishing.";
          hint.classList.add("hint-alert");
        }
      });
    } else {
      link.href = "#contact";
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const hint = document.querySelector("#contact-hint");
        hint.textContent = "Add your personal LinkedIn profile URL to PORTFOLIO_LINKS in script.js before publishing.";
        hint.classList.add("hint-alert");
      });
    }
  });
});
