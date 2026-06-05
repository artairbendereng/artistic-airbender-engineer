// HVAC Airbender – script.js
// Features:
// 1) Footer year
// 2) Smooth scroll
// 3) Active nav highlight
// 4) Skill coloring per project using data-tech-count
// 5) Expand / Minimize with micro animation reveal (staggered bullets)

document.addEventListener("DOMContentLoaded", () => {
  // 1) Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2) Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const target = href === "#home" ? document.getElementById("home") : document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // 3) Active nav highlighting
  const navLinks = document.querySelectorAll(".site-nav .nav-link");
  const sections = document.querySelectorAll("main section[id]");

  function updateActiveNav() {
    let currentId = "home";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const id = href ? href.replace("#", "") : "";
      link.classList.toggle("active", id === currentId || (id === "home" && currentId === "hero"));
    });
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // 4) Skill coloring: first X bullets are technical (blue), rest are nontechnical (gold)
  document.querySelectorAll(".project-work-list[data-tech-count]").forEach((ul) => {
    const techCount = parseInt(ul.dataset.techCount, 10);
    const items = ul.querySelectorAll("li");

    items.forEach((li, idx) => {
      li.classList.remove("skill-tech", "skill-nontech");
      if (!Number.isNaN(techCount) && idx < techCount) {
        li.classList.add("skill-tech");
      } else {
        li.classList.add("skill-nontech");
      }
    });
  });

  // 5) Expand / Minimize + micro animation
  document.querySelectorAll("[data-expandable]").forEach((wrap) => {
    const button = wrap.querySelector("[data-expand-toggle]");
    const list = wrap.querySelector(".project-work-list");

    if (!button || !list) return;

    // Start collapsed
    wrap.classList.remove("is-expanded");
    button.textContent = "Expand";
    button.setAttribute("aria-expanded", "false");

    function runBulletReveal() {
      const items = list.querySelectorAll("li");

      // Put UL into reveal-mode so CSS starts bullets at opacity 0
      list.classList.add("reveal-mode");

      // Reset reveal classes
      items.forEach((li) => li.classList.remove("reveal"));

      // Stagger them in (micro animation)
      items.forEach((li, i) => {
        setTimeout(() => {
          li.classList.add("reveal");
        }, 85 * i); // tweak speed here
      });

      // After animation, keep reveal-mode (it’s harmless),
      // or remove it if you want normal state afterwards.
      // We'll keep it for consistent feel on expanded content.
    }

    function resetReveal() {
      // Remove reveal mode so collapsed list doesn't look like it’s fading out weirdly
      list.classList.remove("reveal-mode");
      list.querySelectorAll("li").forEach((li) => li.classList.remove("reveal"));
    }

    button.addEventListener("click", () => {
      const isExpanded = wrap.classList.toggle("is-expanded");

      button.textContent = isExpanded ? "Minimize" : "Expand";
      button.setAttribute("aria-expanded", isExpanded ? "true" : "false");

      if (isExpanded) {
        // Run the reveal effect when expanding
        runBulletReveal();
      } else {
        // Reset animation state when collapsing
        resetReveal();
      }
    });
  });
});

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrollPercent = (scrollTop / scrollHeight) * 100;

  const progressBar = document.querySelector(".scroll-progress-bar");
  if (progressBar) {
    progressBar.style.width = scrollPercent + "%";
  }
});