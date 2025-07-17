/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modal_success_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal-success.js */ "./src/js/components/modal-success.js");


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
        heroTextInput.setSelectionRange(heroTextInput.value.length, heroTextInput.value.length);
      }, 0);
    });
    document.addEventListener("mousedown", e => {
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
      (0,_components_modal_success_js__WEBPACK_IMPORTED_MODULE_0__.showSuccessModal)(shortLink);
    });
  }
});

/***/ }),

/***/ "./src/js/components/modal-success.js":
/*!********************************************!*\
  !*** ./src/js/components/modal-success.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showSuccessModal: () => (/* binding */ showSuccessModal)
/* harmony export */ });
function showSuccessModal(link) {
  if (document.querySelector(".modal-success")) return;
  const modal = document.createElement("div");
  modal.className = "modal-success";
  modal.innerHTML = `
    <div class="modal-success__content">
      <button class="modal-success__close" aria-label="Закрыть">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.3278 13.572C15.9582 13.2276 15.4692 13.04 14.9641 13.0489C14.4589 13.0579 13.9769 13.2625 13.6196 13.6198C13.2623 13.9771 13.0577 14.4591 13.0488 14.9642C13.0398 15.4694 13.2274 15.9583 13.5718 16.328L23.2438 26L13.5718 35.672C13.3802 35.8505 13.2266 36.0658 13.12 36.305C13.0134 36.5442 12.9561 36.8024 12.9515 37.0642C12.9469 37.3261 12.995 37.5861 13.0931 37.829C13.1912 38.0718 13.3371 38.2923 13.5223 38.4775C13.7075 38.6627 13.928 38.8086 14.1709 38.9067C14.4137 39.0048 14.6737 39.053 14.9356 39.0483C15.1974 39.0437 15.4556 38.9864 15.6948 38.8798C15.934 38.7733 16.1493 38.6196 16.3278 38.428L25.9998 28.756L35.6718 38.428C35.8503 38.6196 36.0656 38.7733 36.3048 38.8798C36.544 38.9864 36.8022 39.0437 37.0641 39.0483C37.3259 39.053 37.586 39.0048 37.8288 38.9067C38.0716 38.8086 38.2921 38.6627 38.4773 38.4775C38.6625 38.2923 38.8085 38.0718 38.9065 37.829C39.0046 37.5861 39.0528 37.3261 39.0482 37.0642C39.0435 36.8024 38.9862 36.5442 38.8796 36.305C38.7731 36.0658 38.6194 35.8505 38.4278 35.672L28.7558 26L38.4278 16.328C38.7723 15.9583 38.9598 15.4694 38.9509 14.9642C38.942 14.4591 38.7373 13.9771 38.38 13.6198C38.0228 13.2625 37.5408 13.0579 37.0356 13.0489C36.5304 13.04 36.0415 13.2276 35.6718 13.572L25.9998 23.244L16.3278 13.572Z" fill="#1D1D1D" />
        </svg>
      </button>
      <div class="modal-success__icon">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="#34C759"/>
          <path d="M20 33L29 42L44 27" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="modal-success__title">Успешно!</div>
      <div class="modal-success__desc">Вот ваша новая ссылка:</div>
      <div class="modal-success__link-wrap">
        <a href="${link}" class="modal-success__link" target="_blank">${link}</a>
            <button class="modal-success__copy" aria-label="Скопировать ссылку"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 11.3333C5 8.03398 5 6.38315 6.0255 5.35881C7.04983 4.33331 8.70067 4.33331 12 4.33331H15.5C18.7993 4.33331 20.4502 4.33331 21.4745 5.35881C22.5 6.38315 22.5 8.03398 22.5 11.3333V17.1666C22.5 20.466 22.5 22.1168 21.4745 23.1411C20.4502 24.1666 18.7993 24.1666 15.5 24.1666H12C8.70067 24.1666 7.04983 24.1666 6.0255 23.1411C5 22.1168 5 20.466 5 17.1666V11.3333Z" stroke="#1D1D1D" stroke-width="1.5" />
                <path d="M5 20.6666C4.07174 20.6666 3.1815 20.2979 2.52513 19.6415C1.86875 18.9851 1.5 18.0949 1.5 17.1666V10.1666C1.5 5.76715 1.5 3.56681 2.86733 2.20065C4.23467 0.83448 6.43383 0.833313 10.8333 0.833313H15.5C16.4283 0.833313 17.3185 1.20206 17.9749 1.85844C18.6313 2.51482 19 3.40506 19 4.33331" stroke="#1D1D1D" stroke-width="1.5" />
              </svg>
            </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-success__close").onclick = close;
  modal.onclick = e => {
    if (e.target === modal) close();
  };
  function close() {
    modal.remove();
    document.body.classList.remove("modal-open");
  }
  modal.querySelector(".modal-success__copy").onclick = function () {
    navigator.clipboard.writeText(link);
    this.classList.add("copied");
    setTimeout(() => this.classList.remove("copied"), 1000);
  };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map