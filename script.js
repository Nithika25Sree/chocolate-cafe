
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


function placeOrder(itemName) {
  showToast(`✅ You've selected \"${itemName}\"! Your order is being prepared...`);
}


document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const itemName = btn.closest(".card").querySelector("h3").textContent;
      placeOrder(itemName);
    });
  });
});
