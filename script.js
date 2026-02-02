const API_URL = "YOUR_APPS_SCRIPT_WEB_APP_URL";

document.getElementById("year").textContent = new Date().getFullYear();

function formToObject(form) {
  const fd = new FormData(form);
  const obj = {};
  for (const [k, v] of fd.entries()) {
    if (k === "propertyTypes") {
      obj.propertyTypes = obj.propertyTypes || [];
      obj.propertyTypes.push(v);
    } else {
      obj[k] = v;
    }
  }
  return obj;
}

async function postJSON(payload) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

// Buyer form
const buyerForm = document.getElementById("buyerForm");
const buyerMsg = document.getElementById("buyerMsg");

buyerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  buyerMsg.textContent = "Submitting...";
  try {
    const data = formToObject(buyerForm);
    data.type = "buyer";
    const out = await postJSON(data);
    if (out.ok) {
      buyerMsg.textContent = "✅ Buy box submitted. We’ll reach out soon.";
      buyerForm.reset();
    } else {
      buyerMsg.textContent = "❌ Error: " + (out.error || "Unknown error");
    }
  } catch (err) {
    buyerMsg.textContent = "❌ Error: " + err.message;
  }
});

// Seller form
const sellerForm = document.getElementById("sellerForm");
const sellerMsg = document.getElementById("sellerMsg");

sellerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  sellerMsg.textContent = "Submitting...";
  try {
    const data = formToObject(sellerForm);
    data.type = "seller";
    const out = await postJSON(data);
    if (out.ok) {
      sellerMsg.textContent = "✅ Property submitted. We’ll review and contact you.";
      sellerForm.reset();
    } else {
      sellerMsg.textContent = "❌ Error: " + (out.error || "Unknown error");
    }
  } catch (err) {
    sellerMsg.textContent = "❌ Error: " + err.message;
  }
});
