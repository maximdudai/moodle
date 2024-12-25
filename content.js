const observer = new MutationObserver(() => {
  const modal = document.querySelector('[data-region="modal-container"]')
  const modalShadow = document.querySelector('[data-region="modal-backdrop"]');

  // If the modal or the shadow are not present, prevent the script from running
  if (!modal || !modalShadow)
    return;

  modal.style.display = "none";
  modalShadow.style.display = "none";

  observer.disconnect();
});

observer.observe(document.body, { childList: true, subtree: true });