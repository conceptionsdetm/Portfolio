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

  /* ── 12. CV MODAL — PDF.js renderer ────────────────────── */
  (function () {
    /* Load PDF.js from CDN */
    var pdfScript = document.createElement("script");
    pdfScript.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    document.head.appendChild(pdfScript);

    /* ── Build overlay ── */
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
      "background:rgba(10,10,10,.93)",
      "flex-direction:column",
      "align-items:center",
      "padding:1.25rem 1.25rem 0"
    ].join(";");

    /* ── Toolbar ── */
    var toolbar = document.createElement("div");
    toolbar.style.cssText = [
      "display:flex",
      "align-items:center",
      "justify-content:space-between",
      "gap:1rem",
      "width:100%",
      "max-width:820px",
      "margin-bottom:.75rem",
      "flex-shrink:0"
    ].join(";");

    function makeBtn(text, tag) {
      var el = document.createElement(tag || "button");
      el.textContent = text;
      el.style.cssText = [
        "font-family:'Courier New',monospace",
        "font-size:.72rem",
        "letter-spacing:.12em",
        "text-transform:uppercase",
        "color:#EDEDDE",
        "background:transparent",
        "border:1px dashed #EDEDDE",
        "padding:.4rem .9rem",
        "cursor:pointer",
        "text-decoration:none",
        "white-space:nowrap",
        "transition:background .15s,color .15s"
      ].join(";");
      el.addEventListener("mouseenter", function () {
        el.style.background = "#EDEDDE"; el.style.color = "#0A0A0A";
      });
      el.addEventListener("mouseleave", function () {
        el.style.background = "transparent"; el.style.color = "#EDEDDE";
      });
      return el;
    }

    var leftBtns = document.createElement("div");
    leftBtns.style.cssText = "display:flex;gap:.6rem;";

    var dlBtn  = makeBtn("↓ Download", "a");
    dlBtn.setAttribute("download", "Timonas-Stefanou-CV-2025.pdf");

    var closeBtn = makeBtn("✕ Close");
    closeBtn.setAttribute("aria-label", "Close CV viewer");

    leftBtns.appendChild(dlBtn);
    toolbar.appendChild(leftBtns);
    toolbar.appendChild(closeBtn);

    /* ── Scrollable canvas container ── */
    var canvasWrap = document.createElement("div");
    canvasWrap.style.cssText = [
      "width:100%",
      "max-width:820px",
      "flex:1",
      "overflow-y:auto",
      "overflow-x:hidden",
      "background:#fff",
      "display:flex",
      "flex-direction:column",
      "align-items:center",
      "gap:2px",
      "padding:0"
    ].join(";");

    /* Loading indicator */
    var loader = document.createElement("div");
    loader.style.cssText = [
      "padding:3rem",
      "font-family:'Courier New',monospace",
      "font-size:.8rem",
      "letter-spacing:.15em",
      "color:#888",
      "text-transform:uppercase"
    ].join(";");
    loader.textContent = "Loading…";

    modal.appendChild(toolbar);
    modal.appendChild(canvasWrap);
    document.body.appendChild(modal);

    /* ── Close helpers ── */
    function closeModal() {
      modal.style.display = "none";
      document.body.style.overflow = "";
      canvasWrap.innerHTML = "";
    }

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.style.display !== "none") closeModal();
    });

    /* ── Render PDF with PDF.js ── */
    function renderPDF(absUrl) {
      canvasWrap.innerHTML = "";
      canvasWrap.appendChild(loader);

      var pdfjsLib = window["pdfjs-dist/build/pdf"];
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

      pdfjsLib.getDocument(absUrl).promise.then(function (pdf) {
        canvasWrap.innerHTML = "";
        var total = pdf.numPages;

        function renderPage(n) {
          return pdf.getPage(n).then(function (page) {
            /* Scale to fit the 820px container */
            var baseVP  = page.getViewport({ scale: 1 });
            var scale   = Math.min(820, canvasWrap.clientWidth || 820) / baseVP.width;
            var vp      = page.getViewport({ scale: scale });

            var canvas  = document.createElement("canvas");
            canvas.width  = vp.width;
            canvas.height = vp.height;
            canvas.style.cssText = "width:100%;height:auto;display:block;";

            return page.render({ canvasContext: canvas.getContext("2d"), viewport: vp })
              .promise.then(function () { canvasWrap.appendChild(canvas); });
          });
        }

        /* Render pages sequentially */
        var chain = Promise.resolve();
        for (var i = 1; i <= total; i++) {
          chain = chain.then(renderPage.bind(null, i));
        }
        return chain;
      }).catch(function () {
        canvasWrap.innerHTML = "";
        var err = document.createElement("p");
        err.style.cssText = "padding:2rem;font-family:'Courier New',monospace;font-size:.8rem;color:#c00;";
        err.textContent = "Could not load the PDF. Try the Download button above.";
        canvasWrap.appendChild(err);
      });
    }

    /* ── Open modal ── */
    function openModal(pdfPath) {
      var abs = new URL(pdfPath, window.location.href).href;
      dlBtn.href = abs;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
      canvasWrap.scrollTop = 0;

      /* Wait for PDF.js to finish loading if needed */
      if (window["pdfjs-dist/build/pdf"]) {
        renderPDF(abs);
      } else {
        canvasWrap.innerHTML = "";
        canvasWrap.appendChild(loader);
        pdfScript.onload = function () { renderPDF(abs); };
      }
    }

    document.querySelectorAll(".cv-trigger").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        openModal(a.dataset.cv);
      });
    });
  }());

  /* ── 13. IMAGE LIGHTBOX ─────────────────────────────────── */
  (function () {
    /* Build overlay once */
    var lb = document.createElement("div");
    lb.id = "img-lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Image viewer");
    lb.style.cssText = [
      "display:none",
      "position:fixed",
      "inset:0",
      "z-index:9100",
      "background:rgba(10,10,10,.93)",
      "flex-direction:column",
      "align-items:center",
      "justify-content:center",
      "padding:1.5rem",
      "cursor:zoom-out"
    ].join(";");

    var lbImg = document.createElement("img");
    lbImg.id = "img-lightbox-img";
    lbImg.setAttribute("alt", "");
    lbImg.style.cssText = [
      "max-width:92vw",
      "max-height:88vh",
      "object-fit:contain",
      "box-shadow:0 8px 60px rgba(0,0,0,.6)",
      "cursor:default"
    ].join(";");

    var lbClose = document.createElement("button");
    lbClose.textContent = "✕ Close";
    lbClose.setAttribute("aria-label", "Close image viewer");
    lbClose.style.cssText = [
      "position:absolute",
      "top:1.25rem",
      "right:1.25rem",
      "font-family:'Courier New',monospace",
      "font-size:.75rem",
      "letter-spacing:.12em",
      "text-transform:uppercase",
      "color:#EDEDDE",
      "background:transparent",
      "border:1px dashed #EDEDDE",
      "padding:.4rem .9rem",
      "cursor:pointer",
      "transition:background .2s,color .2s"
    ].join(";");
    lbClose.addEventListener("mouseenter", function () {
      lbClose.style.background = "#EDEDDE";
      lbClose.style.color = "#0A0A0A";
    });
    lbClose.addEventListener("mouseleave", function () {
      lbClose.style.background = "transparent";
      lbClose.style.color = "#EDEDDE";
    });

    var lbCaption = document.createElement("p");
    lbCaption.style.cssText = [
      "margin-top:1rem",
      "font-family:'Courier New',monospace",
      "font-size:.72rem",
      "letter-spacing:.1em",
      "color:rgba(237,237,222,.55)",
      "text-transform:uppercase"
    ].join(";");

    lb.appendChild(lbClose);
    lb.appendChild(lbImg);
    lb.appendChild(lbCaption);
    document.body.appendChild(lb);

    function openLightbox(src, alt) {
      lbImg.src = src;
      lbImg.alt = alt || "";
      lbCaption.textContent = alt || "";
      lb.style.display = "flex";
      document.body.style.overflow = "hidden";
      lbClose.focus();
    }
    function closeLightbox() {
      lb.style.display = "none";
      document.body.style.overflow = "";
      lbImg.src = "";
    }

    lbClose.addEventListener("click", closeLightbox);
    lb.addEventListener("click", function (e) {
      if (e.target === lb) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lb.style.display !== "none") closeLightbox();
    });
    /* Stop clicks on the image itself from bubbling to the backdrop */
    lbImg.addEventListener("click", function (e) { e.stopPropagation(); });

    /* Wire up all deliverable images */
    document.querySelectorAll(".deliverable-full img, .deliverable-card img").forEach(function (img) {
      img.style.cursor = "zoom-in";
      img.setAttribute("title", "Click to enlarge");
      img.addEventListener("click", function () {
        openLightbox(img.src, img.alt);
      });
    });
  }());

})();
