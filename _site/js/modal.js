const modalWindow = document.getElementById('modal-one');
const modalbutton = document.querySelector('[data-modal="modal-one"]');
const modalOverlay = modalWindow.getElementsByClassName('modal__blur')[0];
const modalHideButton = modalWindow.getElementsByClassName('modal__hide')[0];
const bodyTag = document.getElementById('body');

modalHideButton.addEventListener("click", hideModal);
modalOverlay.addEventListener("click", hideModal)
modalbutton.addEventListener("click", openModal);
document.addEventListener('keydown', escKey);

function openModal() {
    modalWindow.classList.add("is-active");
    bodyTag.classList.add("is-modal");
}

function hideModal() {
    modalWindow.classList.remove("is-active");
    bodyTag.classList.remove("is-modal");
}

function escKey(event) {
    if(event.key === "Escape"){
        hideModal();
    }
}


