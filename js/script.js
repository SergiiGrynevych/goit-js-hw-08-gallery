import galleryItems from './gallery-items.js';

const gallery = document.querySelector(".js-gallery");
const btnToCloseModal = document.querySelector(".lightbox__button");
const modal = document.querySelector(".js-lightbox");
const modalImage = document.querySelector(".lightbox__image");
const overlay = document.querySelector(".lightbox__overlay");

gallery.insertAdjacentHTML("beforeend", galleryMarkup(galleryItems));
gallery.addEventListener("click", modalIsOpen);

function galleryMarkup(img) {
    return img.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    }).join("");
}

function modalIsOpen(event){
  event.preventDefault();
  
  if(event.target.nodeName !== "IMG"){
    return;
  }

  modal.classList.add("is-open");
  modalImage.src = event.target.dataset.source;
  modalImage.alt = event.target.alt;
  btnToCloseModal.addEventListener("click", toCloseModal);
  overlay.addEventListener("click", toCloseModalByOverlay);
  document.addEventListener("keydown", toCloseModalByEsc);
  console.dir(event);
}

function toCloseModal() {
  modal.classList.remove("is-open");
  modalImage.src = '';
  modalImage.alt = '';
  document.removeEventListener("keydown", toCloseModalByEsc);
  overlay.removeEventListener("click", toCloseModalByOverlay);
}

function toCloseModalByOverlay(event){
  if(event.target === event.currentTarget){
    toCloseModal(event);
  }
}

function toCloseModalByEsc(event) {
  if(event.code === "Escape"){
   toCloseModal();
 }
}






