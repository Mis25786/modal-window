// по Репеті на body

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

// вішаємо слухачів на кнопки і бекдроп
refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModal() {
  // вішаємо слухача на віндов коли модалка відкрита
  window.addEventListener("keydown", onEscKeyPress);
  // додаємо боді клас show-modal
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  // знімаємо слухача коли модальне вікно закривається
  window.removeEventListener("keydown", onEscKeyPress);
  // видаляємо в боді клас show-modal
  document.body.classList.remove("show-modal");
}

function onBackdropClick(e) {
  // провіряємо чи відбувся клік по бекдропу а не модальному вікні якщо так то закриваємо його
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function onEscKeyPress(e) {
  // провіряємо чи нажата клавіша є клавішою Escape
  if (e.code === "Escape") {
    onCloseModal();
  }
}
