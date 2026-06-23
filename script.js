/* ============================================================
   DADA PORTFOLIO — script.js
   Timonas Stefanou
   ============================================================ */

(function () {
  "use strict";

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── 1. CUSTOM CURSOR ───────────────────────────────────── */
  var cursor = document.querySelector(".cursor");
  if (cursor && window.innerWidth > 640) {
    var cx = 0, cy = 0;
    document.addEventListener("mousemove", function (e) {
      cx = e.clientX; cy = e.clientY;
      cursor.style.left = cx + "px";
      cursor.style.top  = cy + "px";
    });
    /* Stamp shape on hovering interactive elements */
    var hoverEls = document.querySelectorAll("a, button, .project-card, .skill-scrap, .step-body");
    hoverEls.forEach(function (el) {
      el.addEventListener("mouseenter", function () { cursor.classList.add("stamp"); });
      el.addEventListener("mouseleave", function () { cursor.classList.remove("stamp"); });
    });
  }

  /* ── 2. RANDOM ROTATION FUNCTION ───────────────────────── */
  /**
   * applyRandomRotations(selector, minDeg, maxDeg)
   * Applies a random rotation within [minDeg, maxDeg] to each
   * matched element. Call with any selector of collage items.
   * Also sets --base-rotate so the wobble animation uses it.
   */
  function applyRandomRotations(selector, minDeg, maxDeg) {
    var els = document.querySelectorAll(selector);
    els.forEach(function (el) {
      var deg = (Math.random() * (maxDeg - minDeg) + minDeg).toFixed(2);
      el.style.transform = "rotate(" + deg + "deg)";
      el.style.setProperty("--base-rotate", "rotate(" + deg + "deg)");
    });
  }

  /* Apply rotations to collage elements */
  if (!prefersReduced) {
    applyRandomRotations(".skill-scrap",  -8, 8);
    applyRandomRotations(".hero-scrap-1", -4, -2);
    applyRandomRotations(".hero-scrap-2", -6, 2);
  }

  /* ── 3. NAV — SCROLL STATE + MOBILE TOGGLE ──────────────── */
  var nav       = document.querySelector(".nav");
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks  = document.querySelector(".nav-links");
  var navH      = nav ? nav.offsetHeight : 60;

  document.documentElement.style.setProperty("--nav-h", navH + "px");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded",
        navLinks.classList.contains("open") ? "true" : "false");
    });
    /* Close menu when a link is clicked */
    navLinks.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ── 4. SCROLL REVEAL ───────────────────────────────────── */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if (prefersReduced) {
      reveals.forEach(function (el) { el.classList.add("visible"); });
    } else {
      var revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            revealObs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
      reveals.forEach(function (el) { revealObs.observe(el); });
    }
  }

  /* ── 5. GLITCH TEXT ─────────────────────────────────────── */
  /* Triggers on hero headline: a brief clip-path glitch
     fires once on load, then randomly every 8–18 seconds */
  var glitchEls = document.querySelectorAll(".glitch-text");
  if (glitchEls.length && !prefersReduced) {
    function fireGlitch() {
      glitchEls.forEach(function (el) {
        el.classList.add("active");
        setTimeout(function () { el.classList.remove("active"); }, 500);
      });
    }
    /* Initial glitch after 1.2s */
    setTimeout(fireGlitch, 1200);
    /* Recurring glitch */
    function scheduleGlitch() {
      var delay = 8000 + Math.random() * 10000;
      setTimeout(function () { fireGlitch(); scheduleGlitch(); }, delay);
    }
    scheduleGlitch();
  }

  /* ── 6. HERO SCRAP PARALLAX (subtle) ────────────────────── */
  var scraps = document.querySelectorAll(
    ".hero-scrap-1, .hero-scrap-2, .hero-scrap-3, .hero-stamp-1, .hero-stamp-2"
  );
  if (scraps.length && !prefersReduced) {
    document.addEventListener("mousemove", function (e) {
      var nx = (e.clientX / window.innerWidth  - 0.5);
      var ny = (e.clientY / window.innerHeight - 0.5);
      scraps.forEach(function (el, i) {
        var factor = (i % 2 === 0 ? 8 : -10);
        var currentRot = parseFloat(el.dataset.rot || 0);
        el.style.transform = "rotate(" + currentRot + "deg) translate(" +
          (nx * factor) + "px, " + (ny * factor) + "px)";
      });
    }, { passive: true });
  }

  /* ── 7. PROJECT CARD HOVER TILT ─────────────────────────── */
  if (!prefersReduced) {
    document.querySelectorAll(".project-card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r  = card.getBoundingClientRect();
        var dx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
        var dy = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
        card.style.transform = "perspective(800px) rotateY(" + (dx * 3) + "deg) rotateX(" + (-dy * 2) + "deg)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* ── 8. SKILL SCRAP WOBBLE ───────────────────────────────── */
  document.querySelectorAll(".skill-scrap").forEach(function (el) {
    var baseRot = parseFloat(el.style.transform.replace(/[^-\d.]/g, "")) || 0;
    el.dataset.rot = baseRot;
    el.addEventListener("mouseenter", function () {
      if (!prefersReduced) {
        var wobbleRot = baseRot + (Math.random() * 4 - 2);
        el.style.transform = "rotate(" + wobbleRot + "deg) translateY(-4px)";
      }
    });
    el.addEventListener("mouseleave", function () {
      el.style.transform = "rotate(" + baseRot + "deg)";
    });
  });

  /* ── 9. CONTACT FORM SIMULATION ─────────────────────────── */
  var form    = document.getElementById("contact-form");
  var formMsg = document.getElementById("form-msg");
  if (form && formMsg) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector("button[type='submit']");
      if (btn) { btn.textContent = "TRANSMITTING…"; btn.disabled = true; }
      setTimeout(function () {
        formMsg.textContent = "// SIGNAL RECEIVED. STAND BY.";
        formMsg.style.display = "block";
        form.style.opacity = "0.4";
        form.style.pointerEvents = "none";
      }, 900);
    });
  }

  /* ── 10. SMOOTH ANCHOR SCROLLING ────────────────────────── */
  document.querySelectorAll("a[href^='#']").forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
    });
  });

  /* ── 11. STORE INITIAL ROTATIONS ON SCRAPS ──────────────── */
  /* Must run after applyRandomRotations so data-rot is correct */
  document.querySelectorAll("[style*='rotate']").forEach(function (el) {
    var m = el.style.transform.match(/rotate\((-?[\d.]+)deg\)/);
    if (m) el.dataset.rot = m[1];
  });

  /* ── 12. CV MODAL ───────────────────────────────────────── */
  (function () {
    var modal = document.createElement("div");
    modal.id = "cv-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "CV viewer");
    modal.style.cssText = [
      "display:none",
      "position:fixed",
      "inset:0",
      "z-index:9000",
      "background:rgba(10,10,10,.88)",
      "flex-direction:column",
      "align-items:center",
      "justify-content:center",
      "padding:1.5rem"
    ].join(";");

    var toolbar = document.createElement("div");
    toolbar.style.cssText = [
      "display:flex",
      "align-items:center",
      "justify-content:space-between",
      "width:100%",
      "max-width:900px",
      "margin-bottom:.75rem"
    ].join(";");

    var dlBtn = document.createElement("a");
    dlBtn.id = "cv-download-btn";
    dlBtn.download = "Timonas-Stefanou-CV-2025.pdf";
    dlBtn.textContent = "Download PDF";
    dlBtn.style.cssText = [
      "font-family:'Courier New',monospace",
      "font-size:.8rem",
      "letter-spacing:.12em",
      "text-transform:uppercase",
      "color:#EDEDDE",
      "border:1px dashed #EDEDDE",
      "padding:.45rem 1rem",
      "text-decoration:none",
      "transition:background .2s,color .2s"
    ].join(";");
    dlBtn.addEventListener("mouseenter", function () {
      dlBtn.style.background = "#D4000A";
      dlBtn.style.borderColor = "#D4000A";
      dlBtn.style.color = "#EDEDDE";
    });
    dlBtn.addEventListener("mouseleave", function () {
      dlBtn.style.background = "transparent";
      dlBtn.style.borderColor = "#EDEDDE";
      dlBtn.style.color = "#EDEDDE";
    });

    var closeBtn = document.createElement("button");
    closeBtn.textContent = "✕ Close";
    closeBtn.setAttribute("aria-label", "Close CV viewer");
    closeBtn.style.cssText = [
      "font-family:'Courier New',monospace",
      "font-size:.8rem",
      "letter-spacing:.12em",
      "text-transform:uppercase",
      "color:#EDEDDE",
      "background:transparent",
      "border:1px dashed #EDEDDE",
      "padding:.45rem 1rem",
      "cursor:pointer",
      "transition:background .2s,color .2s"
    ].join(";");
    closeBtn.addEventListener("mouseenter", function () {
      closeBtn.style.background = "#EDEDDE";
      closeBtn.style.color = "#0A0A0A";
    });
    closeBtn.addEventListener("mouseleave", function () {
      closeBtn.style.background = "transparent";
      closeBtn.style.color = "#EDEDDE";
    });

    toolbar.appendChild(dlBtn);
    toolbar.appendChild(closeBtn);

    var frame = document.createElement("iframe");
    frame.id = "cv-frame";
    frame.setAttribute("title", "CV — Timonas Stefanou");
    frame.style.cssText = [
      "width:100%",
      "max-width:900px",
      "height:80vh",
      "border:none",
      "background:#fff"
    ].join(";");

    modal.appendChild(toolbar);
    modal.appendChild(frame);
    document.body.appendChild(modal);

    function openModal(pdfPath) {
      frame.src = pdfPath + "#toolbar=1&navpanes=0";
      dlBtn.href = pdfPath;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function closeModal() {
      modal.style.display = "none";
      document.body.style.overflow = "";
      frame.src = "";
    }

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.style.display !== "none") closeModal();
    });

    document.querySelectorAll(".cv-trigger").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        openModal(a.dataset.cv);
      });
    });
  }());

})();
