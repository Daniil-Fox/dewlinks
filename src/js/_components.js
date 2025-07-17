import { showSuccessModal } from "./components/modal-success.js";

// document.addEventListener("DOMContentLoaded", () => {
//   const modalBtn = document.querySelector(".modal-enter");
//   if (modalBtn) {
//     modalBtn.addEventListener("click", () => {
//       showSuccessModal("https://dewinlinks.ru/customlink1111");
//     });
//   }
// });

// --- hero__text editable expand ---
document.addEventListener("DOMContentLoaded", () => {
  const heroTextWrap = document.querySelector(".hero__text");
  const heroTextInput = document.querySelector(".hero__text-input");
  if (heroTextWrap && heroTextInput) {
    let isActive = false;
    heroTextWrap.addEventListener("click", () => {
      if (isActive) return;
      isActive = true;
      heroTextWrap.classList.add("hero__text--active");
      setTimeout(() => {
        heroTextInput.focus();
        heroTextInput.setSelectionRange(
          heroTextInput.value.length,
          heroTextInput.value.length
        );
      }, 0);
    });
    document.addEventListener("mousedown", (e) => {
      if (!isActive) return;
      if (heroTextWrap.contains(e.target)) return;
      isActive = false;
      heroTextWrap.classList.remove("hero__text--active");
      heroTextInput.blur();
    });
  }

  // --- Формирование кастомной ссылки и показ модалки ---
  const form = document.querySelector(".hero__url");
  const urlInput = document.querySelector(".hero__input");
  const customInput = document.querySelector(".hero__text-input");
  const modalBtn = document.querySelector(".modal-enter");
  if (form && urlInput && customInput && modalBtn) {
    modalBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const urlValue = urlInput.value.trim();
      const customValue = customInput.value.trim();
      let shortLink = location.origin + "/";
      if (customValue) {
        shortLink += encodeURIComponent(customValue);
      }
      // Можно добавить валидацию urlValue, если нужно
      showSuccessModal(shortLink);
    });
  }
});
