const SHEET_URL = "PASTE_YOUR_EXEC_URL_HERE";

document.getElementById("sellerForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  fd.append("formType", "seller");

  fetch(SHEET_URL, { method: "POST", mode: "no-cors", body: fd });

  document.getElementById("sellerMsg").textContent = "✅ Submitted!";
  e.target.reset();
});

document.getElementById("buyerForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  fd.append("formType", "buyer");

  fetch(SHEET_URL, { method: "POST", mode: "no-cors", body: fd });

  document.getElementById("buyerMsg").textContent = "✅ Saved!";
  e.target.reset();
});
