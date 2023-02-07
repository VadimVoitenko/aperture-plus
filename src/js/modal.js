// Модальное окно
function bindModal(trigger, modal, close) {
  (trigger = document.querySelector(trigger)),
    (modal = document.querySelector(modal)),
    (close = document.querySelector(close));

  const body = document.body;

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "flex";
    body.classList.add("locked");
  });
  close.addEventListener("click", () => {
    modal.style.display = "none";
    body.classList.remove("locked");
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      body.classList.remove("locked");
    }
  });
}

// FIRST  argument - the class of the button that, when clicked, will OPEN a modal window
// SECOND argument - the class of the modal window
// THIRD  argument - the class of the button that, when clicked, will CLOSE the modal window
bindModal(".modal__btn", ".modal__wrapper", ".modal__close");
