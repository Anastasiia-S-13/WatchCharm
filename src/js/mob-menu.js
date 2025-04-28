(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-mobnav]'),
    closeModalBtn: document.querySelector('[data-clos-mod]'),
    modal: document.querySelector('[data-modal-mobnav]'),
    menuLinks: document.querySelectorAll('[data-modal-mobnav] a'), // всі посилання в меню
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', onBackdropClick);

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('isopen');
  }

  function onBackdropClick(event) {
    if (event.target === refs.modal) {
      toggleModal();
    }
  }
})();