document.addEventListener("DOMContentLoaded", () => {
  // ---- Mobile menu toggle ----
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainnav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // ---- Price calculator ----
  const calcBtn = document.getElementById("calcBtn");
  const calcWeight = document.getElementById("calcWeight");
  const calcType = document.getElementById("calcType");
  const calcSpeed = document.getElementById("calcSpeed");
  const calcPrice = document.getElementById("calcPrice");

  function computePrice() {
    const weight = Math.max(parseFloat(calcWeight.value) || 0, 0.1);
    const base = calcType.value === "international" ? 60 : 15;
    const perKg = calcType.value === "international" ? 22 : 8;
    const speedMultiplier = calcSpeed.value === "express" ? 1.5 : 1;
    const price = (base + weight * perKg) * speedMultiplier;
    calcPrice.textContent = Math.round(price);
  }

  if (calcBtn) {
    calcBtn.addEventListener("click", computePrice);
    [calcWeight, calcType, calcSpeed].forEach(el => el.addEventListener("change", computePrice));
  }

  // ---- Pickup form ----
  const pickupForm = document.getElementById("pickupForm");
  const pickupSuccess = document.getElementById("pickupSuccess");
  if (pickupForm) {
    pickupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      pickupSuccess.classList.add("is-visible");
      pickupForm.reset();
    });
  }

  // ---- Tracking simulation ----
  const trackBtn = document.getElementById("trackBtn");
  const trackInput = document.getElementById("trackInput");
  const steps = document.querySelectorAll("#trackingTimeline .tl-step");

  if (trackBtn) {
    trackBtn.addEventListener("click", () => {
      if (!trackInput.value.trim()) return;
      // Deterministic pseudo-random progress based on tracking number
      const seed = trackInput.value.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
      const doneCount = (seed % 4) + 1;
      steps.forEach((step, i) => {
        step.classList.toggle("is-done", i < doneCount);
      });
    });
    trackInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") trackBtn.click();
    });
  }
});
