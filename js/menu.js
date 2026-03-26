const menu = document.querySelector('[data-menu]');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');

if (openBtn && closeBtn && menu) {
  openBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
}

const backdrop = document.querySelector('[data-modal]');
const modalOpenBtn = document.querySelector('[data-modal-open]');
const modalCloseBtn = document.querySelector('[data-modal-close]');

if (backdrop && modalOpenBtn && modalCloseBtn) {
  const openModal = () => {
    backdrop.classList.add('is-open');
  };

  const closeModal = () => {
    backdrop.classList.remove('is-open');
  };

  modalOpenBtn.addEventListener('click', openModal);
  modalCloseBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      closeModal();
    }
  });
}


