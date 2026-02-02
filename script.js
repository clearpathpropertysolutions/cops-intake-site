// ==========================
// CONFIG (PUT YOUR /exec URL)
// ==========================
const SHEET_URL = "https://script.google.com/macros/s/AKfycbzAylOvhlPyFChh2pHMEnn97Ghp5zG70aW4S31Qbc-Y-f1JoRynJCdqCm_0rHETw35VOQ/exec"; // <-- replace this


// ==========================
// TAB SWITCHING (SELLER / BUYER)
// ==========================
const tabs = document.querySelectorAll(".tab");
const panels = {
  seller: document.getElementById("panel-seller"),
  buyer: document.getElementById("panel-buyer"),
};

function setActiveTab(which) {
  tabs.forEach(btn => btn.classList.toggle("active", btn.dataset.tab === which));
  Object.entries(panels).forEach(([key, el]) => {
    if (!el) return;
    el.classList.toggle("active", key === which);
  });
}

tabs.forEach(btn => {
  btn.addEventListener("click", () => setActiveTab(btn.dataset.tab));
});

// Default tab
setActiveTab("seller");


// ==========================
// SELLER FORM SUBMIT
// ==========================
document.getElementById("sellerForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const fd = new FormData(e.target);
  fd.append("formType", "seller");

  fetch(SHEET_URL, {
    method: "POST",
    mode: "no-cors",
    body: fd
  });

  document.getElementById("sellerMsg").textContent = "✅ Submitted!";
  e.target.reset();
});


// ==========================
// BUYER FORM SUBMIT
// ==========================
document.getElementById("buyerForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const fd = new FormData(e.target);
  fd.append("formType", "buyer");

  fetch(SHEET_URL, {
    method: "POST",
    mode: "no-cors",
    body: fd
  });

  document.getElementById("buyerMsg").textContent = "✅ Saved!";
  e.target.reset();
});
