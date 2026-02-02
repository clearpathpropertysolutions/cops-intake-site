// ==========================
// SELLER FORM
// ==========================
document.getElementById("sellerForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());

  fetch(SHEET_URL, {
    method: "POST",
    body: JSON.stringify({
      formType: "Sellers",   // ✅ MATCHES SHEET TAB
      data
    })
  })
  .then(() => {
    document.getElementById("sellerMsg").textContent =
      "Thanks — we received your property.";
    form.reset();
  })
  .catch(() => {
    document.getElementById("sellerMsg").textContent =
      "Error submitting form.";
  });
});


// ==========================
// BUYER FORM
// ==========================
document.getElementById("buyerForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());

  fetch(SHEET_URL, {
    method: "POST",
    body: JSON.stringify({
      formType: "Buyers",    // ✅ MATCHES SHEET TAB
      data
    })
  })
  .then(() => {
    document.getElementById("buyerMsg").textContent =
      "Buy box saved successfully.";
    form.reset();
  })
  .catch(() => {
    document.getElementById("buyerMsg").textContent =
      "Error submitting form.";
  });
});
