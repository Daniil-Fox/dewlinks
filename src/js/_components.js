import { showSuccessModal } from "./components/modal-success.js";

document.addEventListener("DOMContentLoaded", () => {
  const modalBtn = document.querySelector(".modal-enter");
  if (modalBtn) {
    modalBtn.addEventListener("click", () => {
      showSuccessModal("https://dewinlinks.ru/customlink1111");
    });
  }
});
